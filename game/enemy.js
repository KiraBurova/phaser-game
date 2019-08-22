let enemyPhysicsGroup = null;
let enemyObj = null;

const enemy = ({ scene }) => {
  enemyPhysicsGroup = scene.add.group({
    bounceX: 1,
    bounceY: 0.2,
  });

  for (var i = 1; i < 10; i++) {
    enemyObj = scene.add.circle(300 + i * 20, 100, 10, 0xabcdef);
    enemyObj = scene.add.circle(300 + i * 20, 120, 10, 0xabefac);
    enemyObj = scene.add.circle(300 + i * 20, 140, 10, 0xeba2bc);
  }

  enemyPhysicsGroup.add(enemyObj);
  var tween = scene.tweens.add({
    targets: enemyPhysicsGroup,
    alpha: { from: 0, to: 2000 },
    ease: 'Bounce',
    duration: 3000,
    yoyo: true,
    repeat: 1,
    onStart: function() {
      console.log('onStart');
      console.log(arguments);
    },
    onComplete: function() {
      console.log('onComplete');
      console.log(arguments);
    },
    onYoyo: function() {
      console.log('onYoyo');
      console.log(arguments);
    },
    onRepeat: function() {
      console.log('onRepeat');
      console.log(arguments);
    },
  });
  tween.play();

  return enemyPhysicsGroup;
};

// const enemyAnimation = (scene, obj) => {
//     var tween = scene.tweens.add({
//         target: obj,
//         alpha: {from: 0, to: 200},
//         duration: 2000,
//         yoyo: true,
//     })
// }

export default enemy;
