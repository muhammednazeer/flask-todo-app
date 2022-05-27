const checkboxes = document.querySelectorAll('.check-completed');
for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    checkbox.addEventListener('change', (e) => {
        console.log('Event', e);
        const newCompleted = e.target.checked;
        const todoId = e.target.dataset.id;
        fetch('/todos/' + todoId + '/set-completed', {
            method: 'POST',
            body: JSON.stringify({
                'completed': newCompleted
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });
}
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