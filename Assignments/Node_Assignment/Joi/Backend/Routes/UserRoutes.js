
const express = require("express");
const router = express.Router();
const User = require("../Schema/UserSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const zxcvbn = require('zxcvbn');
const verifyToken = require("../Middleware/auth");
const sendMail = require('../mailer');
require('dotenv').config()
const crypto = require('crypto');
const requestIp = require('request-ip');
const app = express();
// app.use = express();
app.use(requestIp.mw());
app.use(express.json());

const axios = require('axios');
const useragent = require('useragent');
const geoip = require('geoip-lite');



router.post('/signUp', async (req, res) => {
    const { name, password, email, role } = req.body;
    console.log('Received request:', { name, password, email, role });

    try {
        if (role && !['user', 'admin'].includes(role)) {
            console.log('Invalid role:', role);
            return res.status(400).json({ message: 'Invalid role' });
        }

        const existingUser = await User.findOne({ email });
        console.log('Existing user:', existingUser);
        const passwordStrength = zxcvbn(password);
        if (passwordStrength.score < 3) {
            return res.status(400).json({ message: 'Password is too weak. Please use a stronger password.' });
        }

        if (existingUser) {
            if (existingUser.role === role) {
                console.log('User with the same role exists');
                return res.status(400).json({ message: 'User already exists. Please log in' });
            }
        }

        // Fetch the latest user with the same role
        const lastUser = await User.findOne({ role }).sort({ _id: -1 });

        // Generate a new unique ID based on role
        let newUserId;
        if (lastUser && lastUser.userId) {
            const lastUserIdNumber = parseInt(lastUser.userId.split('_')[1]);
            newUserId = `${role}_${lastUserIdNumber + 1}`;
        } else {
            newUserId = `${role}_0`;  // If no users exist, start from 0
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed password:', hashedPassword);

        const newUser = new User({
            name,
            password: hashedPassword,
            email,
            role: role || 'user',
            userId: newUserId,  // Assign the generated userId
            isVerified: false   // Initially, the user is not verified
        });

        await newUser.save();
        console.log('User saved successfully with userId:', newUserId);

        // Send email with the correct template and data
        await sendMail(email, 'Welcome to Our Service', 'signup', {
            name,
            email,
            role,
            password // Be cautious with sending passwords via email
        });

        res.status(201).json({ message: 'User signed up successfully. Check your email for details.', userId: newUserId });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});


// Verify email route
router.post('/verifyEmail', async (req, res) => {
    const { email, code } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });
        if (user.isVerified) return res.status(400).json({ message: 'User is already verified' });
        
        if (user.verificationCode !== code) {
            return res.status(400).json({ message: 'Invalid verification code' });
        }

        user.isVerified = true;
        await user.save();

        res.status(200).json({ message: 'User verified successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/logIn', async (req, res) => {
    const { password, email, role } = req.body;

    if (!role) {
        return res.status(400).json({ message: 'Role must be provided' });
    }

    try {
        const searchUser = await User.findOne({ email: email, role: role });
        if (!searchUser) {
            return res.status(400).json({ message: 'User does not exist with the provided role. Please sign up' });
        }

        const bcryptPassword = await bcrypt.compare(password, searchUser.password);
        if (!bcryptPassword) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: searchUser._id, email: searchUser.email, role: searchUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token expiration time
        );

        // Get device and browser information
        const agent = useragent.parse(req.headers['user-agent']);
        const device = `${agent.family} on ${agent.os.family}`;
        const browser = agent.toAgent(); // Browser name

        // Get IP-based location information
        // const ip = req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
        const ip = req.clientIp;

        // Using geoip-lite
        const geo = geoip.lookup(ip);
        const city = geo ? geo.city : 'unknown city';
        const region = geo ? geo.region : 'unknown state';
        const country = geo ? geo.country : 'unknown country';
        const location = `${city}, ${region}, ${country}`;

        // Optionally, use an external API for more detailed location data
        // Example using ipinfo:
        const ipInfo = await axios.get(`https://ipinfo.io/${ip}?token=507387df6a11d6`);
        const ipData = ipInfo.data;
        const detailedLocation = `${ipData.city || 'Unknown'}, ${ipData.region || 'Unknown'}, ${ipData.country || 'Unknown'}`;

        // Get current time
        const loginTime = new Date().toLocaleString();

        // Send login email with detailed information
        await sendMail(
            searchUser.email,
            'Login Alert',
            'loginAlert',
            {
                name: searchUser.name,
                location: detailedLocation, // Use detailedLocation or location
                device,
                browser,
                time: loginTime
            }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error); // Log the full error for debugging
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// not working currrrenlty update user
// router.post('/updatePassword', verifyToken, async (req, res) => {
//     const { oldPassword, newPassword } = req.body;
//     console.log('Request userId:', req.userId); // Debugging line

//     try {
//         const user = await User.findById(req.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const isMatched = await bcrypt.compare(oldPassword, user.password);
//         if (!isMatched) {
//             return res.status(400).json({ message: 'The old password is incorrect' });
//         }

//         const passwordStrength = zxcvbn(newPassword);
//         if (passwordStrength.score < 3) {
//             return res.status(400).json({ message: 'New password is too weak. Please use a stronger password.' });
//         }

//         const hashedNewPassword = await bcrypt.hash(newPassword, 10);
//         user.password = hashedNewPassword;
//         await user.save();

//         res.status(200).json({ message: 'Password updated successfully' });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });


router.post('/updatePassword', verifyToken, async (req, res) => {
    const { oldPassword, newPassword, userId } = req.body; // Ensure userId is provided
    console.log('Request userId:', userId); // Debugging line

    try {
        const user = await User.findOne({ userId }); // Find user by userId
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare old password with stored password
        const isMatched = await bcrypt.compare(oldPassword, user.password);
        if (!isMatched) {
            return res.status(400).json({ message: 'The old password is incorrect' });
        }

        const passwordStrength = zxcvbn(newPassword);
        if (passwordStrength.score < 3) {
            return res.status(400).json({ message: 'New password is too weak. Please use a stronger password.' });
        }

        // Hash the new password and save it
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        await sendMail(
            user.email,
            'Password Changed',
            'passwordUpdate',
            { name: user.name, oldPassword, newPassword } // Pass old and new passwords
        );

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
