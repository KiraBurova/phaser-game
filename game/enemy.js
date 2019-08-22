let enemyPhysicsGroup = null
let enemyObj = null

const enemy = ({scene}) => {
    enemyPhysicsGroup = scene.add.group({
        // angularDrag: 5,
        bounceX: 1,
        bounceY: 0.2,
        // collideWorldBounds: true,
        // dragX: 60,
        // dragY: 60,
    })

    for(var i = 1; i < 10; i++) {
        enemyObj = scene.add.circle(300 + i * 20, 100, 10, 0xABCDEF)
        enemyObj = scene.add.circle(300 + i * 20, 120, 10, 0xABEFAC)
        enemyObj = scene.add.circle(300 + i * 20, 140, 10, 0xEBA2BC)
    }

    enemyPhysicsGroup.add(enemyObj);
    var tween = scene.tweens.add({
        targets: enemyPhysicsGroup,
        alpha: { from: 0, to: 2000 },
        ease: 'Bounce',
        duration: 3000,
        yoyo: true,
        repeat: 1,
        onStart: function () { console.log('onStart'); console.log(arguments); },
        onComplete: function () { console.log('onComplete'); console.log(arguments); },
        onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
        onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
    });
    tween.play();
    // enemyAnimation(scene, enemyPhysicsGroup)
    // var tween = scene.tweens.add(enemyPhysicsGroup).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

const enemyAnimation = (scene, obj) => {
    var tween = scene.tweens.add({
        target: obj,
        alpha: {from: 0, to: 200},
        duration: 2000,
        yoyo: true,
    })
}

export default enemy