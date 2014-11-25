(function () {
    'use strict';

    function createDiv() {
        var result = document.createElement('div'),
            style = result.style;

        style.width = '50px';
        style.height = '50px';
        style.backgroundColor = '#000000';
        style.position = 'absolute';
        style.borderRadius = '50%';



        return result;
    }

    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.radius = r;

        this.el = document.createElement('div');
        var style = this.el.style;

        style.width =  r * 2 + 'px';
        style.height = r * 2 + 'px';

        style.position = 'absolute';
        style.top = x - r + 'px';
        style.left = y - r + 'px';

        style.borderRadius = '50%';
        style.borderColor = 'black';

    }

    Circle.prototype.drawAtDegrees = function (el, degrees) {
        var x = this.x + this.radius * Math.cos(degrees * Math.PI / 180),
            y = this.y + this.radius * Math.sin(degrees * Math.PI / 180);

        el.style.left = x - parseInt(el.style.width, 10) / 2 + 'px';
        el.style.top = y - parseInt(el.style.height, 10) / 2 + 'px';
    };

    var listTempContainer = document.createDocumentFragment(),
        divList = [],
        divCount = 5,
        circle = new Circle(200, 200, 100);

    listTempContainer.appendChild(circle.el);

    for (var i = 0; i < divCount; i += 1) {
        var div = createDiv();
        listTempContainer.appendChild(div);
        divList.push(div);
        var degrees = i * 360 / divCount;
        div.setAttribute('data-degrees', degrees);
        circle.drawAtDegrees(div, degrees);
    }

    document.body.appendChild(listTempContainer);

    setInterval(function () {
        for (var i = 0; i < divCount; i += 1) {
            div = divList[i];
            degrees = (parseFloat(div.getAttribute('data-degrees')) + 1) % 360;
            div.setAttribute('data-degrees', degrees);
            circle.drawAtDegrees(div, degrees);
        }
    }, 50);


})();