// document.getElementById('posts');
// document.getElementById('comments');
// document.getElementById('albums');
// document.getElementById('photos');
// document.getElementById('todos');
// document.getElementById('users');

// posts 
const posts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => p(data))
};

p = a => {
    const ul = document.getElementById('ul');
    for (const id of a) {
        const li = document.createElement('li');
        li.innerText = `Id:${id.id} title:${id.title}`;
        ul.appendChild(li)
    }
};

// comments 

const comment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => com(data))
}

com = c => {
    const ul = document.getElementById('ul');
    for (const com of c) {
        const li = document.createElement('li')
        li.innerText = `id:${com.id} name: ${com.name}`;
        ul.appendChild(li);
    }
}


// albums

const album = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => gallery(data))
}

gallery = g => {
    const ul = document.getElementById('ul');
    for (const img of g) {
        const li = document.createElement('li');
        li.innerText = `Id:${img.id} title: ${img.title}`;
        ul.appendChild(li);
    }
}


// photos 
const photos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => photoo(data))
}

photoo = p => {
    const ul = document.getElementById('ul');
    for (const img of p) {
        const li = document.createElement('li');
        li.innerText = `id:${img.id} url:${img.url}`;
        ul.appendChild(li)
    }
}

// todos 
const todo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => todos(data))
}

todos = data => {
    const ul = document.getElementById('ul');
    for (const to of data) {
        const li = document.createElement('li');
        li.innerText = `id:${to.id} title:${to.title}`;
        ul.appendChild(li)
    }
}

// user 
const users = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => u(data))
}

u = data => {
    const ul = document.getElementById('ul');
    for (const to of data) {
        const li = document.createElement('li');
        li.innerText = `id:${to.id} {title}:${to.title}`;
        ul.appendChild(li)
    }
}

