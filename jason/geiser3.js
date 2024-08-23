const apiUsers = 'https://jsonplaceholder.typicode.com/users';

let users = ['usuários']
let emails = ['emails']

fetch(apiUsers)
    .then(response => response.json())
    .then(json_data => {
        json_data.forEach(user => {
        users.push(user.name);
        emails.push(user.email)  
        console.log(emails)
        
  });
});


const url_posts = 'https://jsonplaceholder.typicode.com/posts';

fetch(url_posts)
  .then(response => response.json())
  .then(posts => show_comments(posts));

  function show_comments(posts) {
    const userList = document.getElementById('lista');
    userList.innerHTML = '';

    posts.forEach(post => {
        const userElement = document.createElement('div');
        //userElement.classList.add('user');
        userElement.innerHTML = `
                <h2>Nome: @${users[post.userId]}</h2>
                <h3>Email: ${emails[post.userId]}</h3>
                <h3>Título: ${post.title}</h3>
                <h3>Texto: ${post.body}</h3>
            `;
        userList.appendChild(userElement);
    });
}

let usuário = `@${document.getElementById('nome')}`