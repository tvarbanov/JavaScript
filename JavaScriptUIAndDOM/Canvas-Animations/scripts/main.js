var stage = new Kinetic.Stage({
    container: 'canvas-container',
    width: 800,
    height: 500
});
var marioX = 35,
    marioY = 395,
    reverse = 0;
//Layer
var layer = new Kinetic.Layer();

//Image
var imageObj = new Image();
imageObj.src = 'images/mario2.png';

imageObj.onload = function() {
    var sprite = new Kinetic.Sprite({
        x: marioX,
        y: marioY,
        image: imageObj,
        animation: 'standing',
        animations: {
            standing: [
                // x, y, width, height
                70, 45, 23, 35,
                93, 45, 23, 35,
                116, 45, 23, 35,
                139, 45, 23, 35
            ]
        },
        frameRate: 7,
        frameIndex: 0
    });

    layer.add(sprite);
    stage.add(layer);
    sprite.start();

    setInterval(function(){
        if ( marioX+23 > stage.getWidth() - 30){
            reverse = 1;
            sprite.setScale({x:-1}); //Flips image sprite
        } else if (marioX-23 < stage.getWidth() - 770) {
            reverse = 0;
            sprite.setScale({x:1}); //Returns image to normal state
        }
        if (reverse == 0) {
            sprite.x(marioX += 3)
        } else
        {
            sprite.x(marioX -= 3)
        }

    }, 30);
}




