const images = () => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(data => imgUrl(data))
}
images()

const imgUrl = data => {
    const divContainer = document.getElementById('div-container');
    for (const image of data) {
        const img = document.createElement('img');
        const p = document.createElement('p');
        img.src = `${image.url}`;
        p.innerText = `${image.title}`;
        divContainer.appendChild(p);
        divContainer.appendChild(img);
    }
}