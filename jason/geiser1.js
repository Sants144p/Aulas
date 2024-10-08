const apiUrl = 'https://jsonplaceholder.typicode.com/users';

let users = ['usuários']

fetch(apiUsers)
    .then(response => response.json())
    .then(json_data => {
        json_data.forEach(user => {
        users.push(user.name);
  });
});


fetch(apiUrl)
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => displayError(error));


function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        //userElement.classList.add('user');
        userElement.innerHTML = `
                <h2>#${user.id} ${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Company: ${user.company.name}</p>
                <p>Adress: ${user.address.street}</p>
            `;
        userList.appendChild(userElement);
    });
}

function displayError(error) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}