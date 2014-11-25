function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createDivs() {
    var divs = document.getElementById('container'),
        count = 15,
        divFragment = document.createDocumentFragment('div');

    var itemTemplate = document.createElement('div'),
        titleTemplate = document.createElement('strong');

    itemTemplate.style.position = 'absolute';

    titleTemplate.innerHTML = 'div';
    itemTemplate.appendChild(titleTemplate);

    for (var i = 0; i < count; i += 1) {
        itemTemplate.style.height = (getRandomRange(20,100)+'px');
        itemTemplate.style.width = (getRandomRange(20,100)+'px');
        itemTemplate.style.backgroundColor = 'rgb(' + getRandomRange(0,255) + ',' + getRandomRange(0,255) + ',' + getRandomRange(0,255) + ')';
        itemTemplate.style.color = 'rgb(' + getRandomRange(0,255) + ',' + getRandomRange(0,255) + ',' + getRandomRange(0,255) + ')';
        itemTemplate.style.top = (getRandomRange(0,800)+'px');
        itemTemplate.style.left = (getRandomRange(0,800)+'px');
        itemTemplate.style.border = (getRandomRange(1,20)+'px solid ' + 'rgb(' + getRandomRange(0,255) + ',' + getRandomRange(0,255) + ',' + getRandomRange(0,255) + ')');
        itemTemplate.style.borderRadius = (getRandomRange(0,100)+'px');

        divFragment.appendChild(itemTemplate.cloneNode(true));
    }

    divs.appendChild(divFragment);
}



createDivs();