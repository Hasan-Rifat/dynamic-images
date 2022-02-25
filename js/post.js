function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

loadPost()

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList = 'post';
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);

    }
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            body: JSON.stringify({
                title: 'My new post',
                body: 'ber',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
}

function addAPost2() {
    fetch('https://jsonplaceholder.typicode.com/pusts', {
            method: 'post',
            body: JSON.stringify({
                title: 'My new post',
                body: 'ber',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
}