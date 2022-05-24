const formSubmit = document.getElementById('form');
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/todos/create', {
        method: 'POST',
        body: JSON.stringify({ 'description': document.getElementById('description').value }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => { return response.json() })
        .then(jsonResponse => {
            console.log(jsonResponse);
            const listItem = document.createElement('li');
            listItem.innerHTML = jsonResponse['description'];
            document.getElementById('todo').appendChild(listItem);
            document.getElementById('error').className = 'hidden';
        })
        .catch(error => {
            document.getElementById('error').className = '';
        })
});