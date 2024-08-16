const apiUsers = 'https://jsonplaceholder.typicode.com/users';
const apiPosts = 'https://jsonplaceholder.typicode.com/posts';

let users = ['usuários']

fetch(apiUsers)
    .then(response => response.json())
    .then(json_data => {
        json_data.forEach(user => {
        users.push(user.name);
  });
});

fetch(apiPosts)
    .then(response => response.json())
    .then(posts => mostrarPosts(posts))
    .catch(error => displayError(error));

function mostrarPosts(posts){
    const postList = document.getElementById('postagem');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');

        postElement.innerHTML = `

                <h2>User: @${users[post.userId]} #${post.id}</h2>
                <p>Title: ${post.title}</p>
                <p>${post.body}</p>
                <p></p>

            `;
        postList.appendChild(postElement);
    })
}

function displayError(error) {
    const postList = document.getElementById('postagem');
    postList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}