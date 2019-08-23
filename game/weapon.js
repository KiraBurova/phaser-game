const speed = 600;

const weapon = ({ scene, fromX, fromY, toX, toY, enemy }) => {
  const weaponPhysicsGroup = scene.physics.add.group({
    angularDrag: 5,
    angularVelocity: 60,
    collideWorldBounds: true,
    dragX: 10,
    dragY: 10,
  });

  const bullet = scene.add.circle(fromX, fromY, 2, 0xff0000);

  weaponPhysicsGroup.add(bullet);

  const delta = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (speed / delta) * (toX - fromX);
  const velocityY = (speed / delta) * (toY - fromY);

  weaponPhysicsGroup.setVelocity(velocityX, velocityY);
  
  scene.physics.add.collider(weaponPhysicsGroup, enemy, () => console.log('heeee'));

  //   setTimeout(() => {
  //     console.log(1);
  //     bullet.destroy(), 1000;
  //   });
};

export default weapon;
