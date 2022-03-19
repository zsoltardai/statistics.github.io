$.get('static/poems.json', function (poems) {
    let poemsContainer = document.getElementById("container-poems");
    let rowId = null;
    for (let i = 1; i < poems.length + 1; i++) {
        let poemObject = poems[i-1];
        let poem = createPoemPreview(poemObject.id, poemObject.title, poemObject.context);
        if ((i-1) % 3 === 0 || i === 0) {
            rowId = 'row-' + Math.random().toString(16).slice(2);
            let row = createRow(rowId);
            poemsContainer.appendChild(row);
        }
        document.getElementById(rowId).appendChild(poem);
    }
});

let createPoemPreview = function (id, title, context) {
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
    cardBody.appendChild(divider);
    let cardContext = document.createElement('p');
    cardBody.appendChild(cardContext);
    cardContext.innerText = getPartOfText(context, 20);
    let btnOpenArticle = document.createElement('a');
    btnOpenArticle.classList.add('btn');
    btnOpenArticle.classList.add('btn-primary');
    btnOpenArticle.classList.add('w-100');
    btnOpenArticle.innerText = 'Read';
    btnOpenArticle.href = `/article.html?id=${id}`;
    cardBody.appendChild(btnOpenArticle);
    return container;
}

let rowIds = [];

let createRow = function (id) {
    let row = document.createElement('div');
    row.id = id;
    rowIds.push(id);
    row.classList.add('d-flex');
    if (window.innerWidth < 800) {
        row.classList.add('flex-column');
    } else {
        row.classList.add('flex-fill');
    }
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

window.onresize = function () {
    if (window.innerWidth < 800) {
        for (let i = 0; i < rowIds.length; i++) {
            let rowId = rowIds[i];
            document.getElementById(rowId).classList.remove('flex-fill');
            document.getElementById(rowId).classList.add('flex-column');
        }
    } else {
        for (let i = 0; i < rowIds.length; i++) {
            let rowId = rowIds[i];
            document.getElementById(rowId).classList.remove('flex-column');
            document.getElementById(rowId).classList.add('flex-fill');
        }
    }
}