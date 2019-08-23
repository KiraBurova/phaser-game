const createAlien = ({ scene }) => {
  const aliens = scene.physics.add.group();
  let alien;


  for (var i = 0; i < 10; i++) {
    for(var j = 0; j < 4; j++) {
      alien = scene.add.circle(300 + i * 20, 100 + j * 20, 10, 0xabcdef);
      aliens.add(alien)
    }
  }
  animateAliens(scene, aliens)
};

const animateAliens = (scene, aliens) => {

  aliens.children.iterate (child => {

  scene.tweens.add({
    targets: child,
    ease: 'Linear',
    duration: 300,
    x: child.x + 15,
    repeat: -1,
    yoyo: true,
    });
  }, scene);
}

export default createAlien;
