var familyMembers = [
    {
        mother: 'Maria Petrova',
        father: 'Georgi Petrov',
        children: ['Teodora Petrova', 'Peter Petrov']
    },
    {
        mother: 'Boriana Stamatova',
        father: 'Teodor Stamatov',
        children: ['Martin Stamatov', 'Albena Dimitrova']
    },
    {
        mother: 'Albena Dimitrova',
        father: 'Ivan Dimitrov',
        children: ['Doncho Dimitrov', 'Ivaylo Dimitrov']
    },
    {
        mother: 'Donika Dimitrova',
        father: 'Doncho Dimitrov',
        children: ['Vladimir Dimitrov', 'Iliana Dobreva']
    },
    {
        mother: 'Juliana Petrova',
        father: 'Peter Petrov',
        children: ['Dimitar Petrov', 'Galina Opanova']
    },
    {
        mother: 'Iliana Dobreva',
        father: 'Delian Dobrev',
        children: ['Dimitar Dobrev', 'Galina Pundiova']
    },
    {
        mother: 'Galina Pundiova',
        father: 'Martin Pundiov',
        children: ['Dimitar Pundiov', 'Todor Pundiov']
    },
    {
        mother: 'Maria Pundiova',
        father: 'Dimitar Pundiov',
        children: ['Georgi Pundiov', 'Stoian Pundiov']
    },
    {
        mother: 'Dobrinka Pundiova',
        father: 'Georgi Pundiov',
        children: ['Pavel Pundiov', 'Marian Pundiov']
    }
];

window.onload = function () {
    AddLevelAndIndex();
    Draw();
};

function AddLevelAndIndex() {

    for (var i = 0; i < familyMembers.length; i++) {
        familyMembers[i].level = 0;
        familyMembers[i].childrenIndex = [];
    }

    for (var i = 0; i < familyMembers.length; i++) {
        for (var j = 0; j < familyMembers.length; j++) {
            var mother = familyMembers[j].children.indexOf(familyMembers[i].mother),
                father = familyMembers[j].children.indexOf(familyMembers[i].father);

            if (mother != -1 || father != -1) {
                familyMembers[j].childrenIndex.push(i);
                familyMembers[i].level = familyMembers[j].level + 1;
                if (familyMembers[i].childrenIndex.length != 0) {
                    for (var childIndex in familyMembers[i].childrenIndex) {
                        increaseLevels(familyMembers[familyMembers[i].childrenIndex[childIndex]]);
                    }
                }
            }
        }
    }
}

function Draw() {
    var stage = new Kinetic.Stage({
            container: 'container',
            width: 1366,
            height: 900
        }),
        layer = new Kinetic.Layer(),
        familyTree = [],
        text;

    makeTree(familyTree);

    printTree(familyTree, layer);

    stage.add(layer);
}

function makeTree(familyTree) {
    var countOfMembersInLevel = new Array(20).join('0').split('').map(parseFloat),
        parentsWithHeirs = [],
        i, k, corner;

    for (i = 0; i < familyMembers.length; i++) {

        countOfMembersInLevel[familyMembers[i].level] = parseInt(countOfMembersInLevel[familyMembers[i].level] + 2);

        for (k = 0; k < 2; k++) {
            if (k === 0) {
                corner = 10;
                text = familyMembers[i]['mother'];
            }
            else {
                corner = 0;
                text = familyMembers[i]['father'];
            }

            parentsWithHeirs.push(text);

            familyTree.push(new Kinetic.Rect({
                x: (k + countOfMembersInLevel[familyMembers[i].level] - 2)* 160 ,
                y: familyMembers[i].level * 120,
                width: 150,
                height: 40,
                stroke: 'yellowgreen',
                cornerRadius: corner
            }));

            familyTree.push(new Kinetic.Text({
                x: (k + countOfMembersInLevel[familyMembers[i].level] - 2) * 160 + 30,
                y: familyMembers[i].level * 120 + 13,
                text: text,
                fontFamily: 'Calibri',
                fill: 'black'
            }));
        }
    }

    parentsWithHeirs.sort();
    for (i = 0; i < familyMembers.length; i++) {
        for (var j = 0; j < familyMembers[i].children.length; j++) {
            if (parentsWithHeirs.indexOf(familyMembers[i].children[j]) == -1)
            {
                text = familyMembers[i].children[j];

                if (isNaN(countOfMembersInLevel[familyMembers[i].level+1])) {
                    countOfMembersInLevel[familyMembers[i].level+1] = 0;
                };

                if (text[text.length-1] === 'а' || text[text.length-1] === 'a') {
                    corner = 10;
                }
                else {
                    corner = 0;
                }

                familyTree.push(new Kinetic.Rect({
                    x: (countOfMembersInLevel[familyMembers[i].level+1]) * 160,
                    y: (familyMembers[i].level + 1) * 120,
                    width: 150,
                    height: 40,
                    stroke: 'yellowgreen',
                    cornerRadius: corner
                }));

                familyTree.push(new Kinetic.Text({
                    x: (countOfMembersInLevel[familyMembers[i].level+1]) * 160 + 30,
                    y: (familyMembers[i].level + 1)* 120 + 13,
                    text: text,
                    fontFamily: 'Calibri',
                    fill: 'black'
                }));
                countOfMembersInLevel[familyMembers[i].level+1]++;
            }

        };
    }
}

function printTree(familyTree, layer) {
    for (var i = 0; i < familyTree.length; i++) {
        if (familyTree[i].textArr) {
            var startX = familyTree[i].getX() + 35,
                startY = familyTree[i].getY() + 27,
                parent = familyTree[i].textArr[0].text,
                index = findElement(parent),
                j, k;
            if (index != undefined) {
                for (j = 0; j < familyMembers[index].children.length; j++) {
                    var child = familyMembers[index].children[j];

                    for (k = 0; k < familyTree.length; k++) {
                        if (familyTree[k].textArr) {
                            if (familyTree[k].textArr[0].text === child) {
                                var endX = familyTree[k].getX() + 35,
                                    endY = familyTree[k].getY() - 13;

                                layer.add(new Kinetic.Line({
                                    points: [startX, startY, endX, endY],
                                    stroke: 'yellowgreen'
                                }));

                                layer.add(new Kinetic.Circle({
                                    radius: 4,
                                    fill: 'yellowgreen',
                                    stroke: 'yellowgreen',
                                    strokeWidth: 3,
                                    x: endX,
                                    y: endY
                                }));
                            }
                        }
                    }
                }
            };
        }
        layer.add(familyTree[i]);
    }
}

function findElement(name) {
    for (var i = 0; i < familyMembers.length; i++) {
        if (familyMembers[i].mother === name || familyMembers[i].father === name) {
            return i;
        }
    }
}

function increaseLevels(family) {
    family.level++;
    if (family.indexWithChildren.length === 0) {
        return;
    }
    for (var childIndex in family.indexWithChildren) {
        increaseLevels(family[family.indexWithChildrens[childIndex]]);
    }
}   