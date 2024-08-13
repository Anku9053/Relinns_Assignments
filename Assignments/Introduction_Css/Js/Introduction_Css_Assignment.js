document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null,
        game: Array.from(document.querySelectorAll('input[name="game"]:checked')).map(el => el.value),
        age: document.getElementById('age').value,
        file: document.getElementById('file').files[0]
    };

    console.log(formData);

    fetch('use the correct version of api here relins api was not working inn my local machine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
