//https://jsonplaceholder.typicode.com/posts

//  etapa 1 ler os posts requisição para pegar as respostas (posts)

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    if(json.length > 0 ) {
        postArea.innerHTML ='';
        for (let i in json) {
            let postHtml = `<div class="content"><h1>${json[i].title}</h1><p>${json[i].body}<p><hr/></div>`
            postArea.insertAdjacentHTML("beforeend", postHtml);
        }
    } else {
        postArea.innerHTML = 'Nenhum Post para exibir';
    }
}

async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );

document.querySelector('#title-field').value ='';
document.querySelector('#body-field').value = '';

    readPosts();
}

document.querySelector('#insert-button').addEventListener('click', () => {
    let title = document.querySelector('#title-field').value;
    let body = document.querySelector('#body-field').value;

    if(title && body) {
        addNewPost(title, body);
    } else {
        alert('Preencha todos os campos')
    }
});



readPosts();

