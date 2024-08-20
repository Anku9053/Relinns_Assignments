const {createServer} = require('node:http');
const port = 8000;
const http = require("http")
const fs = require("fs");
const EventEmitter = require('events');
const  protoEventEmitter = new EventEmitter();
const filename = 'example.txt';
const initialContent = 'Initial content';
const appendedContent = '\nAppended content';
const express = require('express');
const  app = express();
app.use(express.json())

// const server = createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({name:"hello world"}))
// })

// const readFileServer = http.createServer((req,res)=>{
//     fs.readFile('./Html/FSREAD.html',(err,data)=>{
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     })

//     fs.appendFile("./Html/mynewfile1.txt",'\nHey there i am creating the files.',(err)=>{
//         console.log("saved");
//     })
// })

// function createFile(filename, content) {
//   fs.writeFile(filename, content, (err) => {
//     if (err) {
//       console.log("Sorry, an error occurred while creating the file.");
//     } else {
//       console.log("File created successfully.");
//       protoEventEmitter.emit('fileCreated', filename);
//     }
//   });
// }


// function readFile(filename) {
//   fs.readFile(filename, 'utf8', (err, data) => {
//     if (err) {
//       console.log("Sorry, an error occurred while reading the file.");
//     } else {
//       console.log(`File content: ${data}`);
//       protoEventEmitter.emit('fileRead', filename);
//     }
//   });
// }

// function updateFile(filename, newContent) {
//   fs.appendFile(filename, newContent, (err) => {
//     if (err) {
//       console.log("Sorry, an error occurred while updating the file.");
//     } else {
//       console.log("File updated successfully.");
//       protoEventEmitter.emit('fileUpdated', filename);
//     }
//   });
// }

// function deleteFile(filename) {
//   fs.unlink(filename, (err) => {
//     if (err) {
//       console.log("Sorry, an error occurred while deleting the file.");
//     } else {
//       console.log("File deleted successfully.");
//       protoEventEmitter.emit('fileDeleted', filename);
//     }
//   });
// }


// protoEventEmitter.on('fileCreated', (filename) => {
//   console.log(`Event: File ${filename} was created.`);
//   readFile(filename); // Read the file after creating
// });

// protoEventEmitter.on('fileRead', (filename) => {
//   console.log(`Event: File ${filename} was read.`);
//   updateFile(filename, appendedContent); // Update the file after reading
// });

// protoEventEmitter.on('fileUpdated', (filename) => {
//   console.log(`Event: File ${filename} was updated.`);
  
// });

// protoEventEmitter.on('fileDeleted', (filename) => {
//   console.log(`Event: File ${filename} was deleted.`);
// });


// createFile(filename, initialContent);

app.get('/ab*cd', (req, res) => {
   
    res.download('/report-12345.pdf')

});



app.listen(port,()=>{
    console.log(`server is working on the port ${port}`)
})