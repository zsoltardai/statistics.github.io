$.get('static/articles.json', function (articles) {
    let articlesContainer = document.getElementById("container-articles");
    let rowId = null;
    for (let i = 1; i < articles.length + 1; i++) {
        let articleObject = articles[i-1];
        let articleId = 'article-' + Math.random().toString(16).slice(2);
        let article = createArticlePreview(articleId, articleObject.title, articleObject.context, articleObject.author, articleObject.date);
        if ((i-1) % 3 === 0 || i === 0) {
            rowId = 'row-' + Math.random().toString(16).slice(2);
            let row = createRow(rowId);
            articlesContainer.appendChild(row);
        }
        document.getElementById(rowId).appendChild(article);
    }
});


let createArticlePreview = function (id, title, context, author, date) {
    let divider = document.createElement('hr');
    divider.classList.add('mt-1');
    divider.classList.add('mb-2');
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('p-2');
    let container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('p-2');
    container.appendChild(card);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);
    let cardTitle = document.createElement('h4');
    cardTitle.innerText = title;
    cardBody.appendChild(cardTitle);
    let cardDetails = document.createElement('div');
    cardDetails.classList.add('d-flex');
    cardDetails.classList.add('flex-row');
    cardDetails.classList.add('justify-content-between');
    let cardAuthor = document.createElement('span');
    cardAuthor.classList.add('text-muted');
    cardAuthor.innerText = author;
    cardDetails.appendChild(cardAuthor);
    let cardDate = document.createElement('span');
    cardDate.classList.add('text-muted');
    cardDate.innerText = date;
    cardDetails.appendChild(cardDate);
    cardBody.appendChild(cardDetails);
    cardBody.appendChild(divider);
    let cardContext = document.createElement('p');
    cardBody.appendChild(cardContext);
    cardContext.innerText = getPartOfText(context, 20);
    let btnOpenArticle = document.createElement('button');
    btnOpenArticle.classList.add('btn');
    btnOpenArticle.classList.add('btn-primary');
    btnOpenArticle.classList.add('w-100');
    btnOpenArticle.innerText = 'Read';
    btnOpenArticle.addEventListener('onclick', function (event) {
        console.log('id');
    });
    cardBody.appendChild(btnOpenArticle);
    return container;
}

let createRow = function (id) {
    let row = document.createElement('div');
    row.id = id;
    row.classList.add('d-flex');
    row.classList.add('flex-fill');
    row.classList.add('justify-content-around');
    return row;
}

let getPartOfText = function (text, n) {
    let words = text.split(' ');
    let newText = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (i === n) break;
        if (word in ['.', ',', ';']) {
            newText += word;
            continue;
        }

        newText += ` ${word}`;
    }
    return newText;
}