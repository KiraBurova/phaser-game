let gunPhysicsGroup = null;
let bullet = null;
const speed = 600;

const gun = ({ scene, fromX, fromY, toX, toY, enemy }) => {
  gunPhysicsGroup = scene.physics.add.group();

  bullet = scene.add.circle(fromX, fromY, 2, 0xff0000);

  gunPhysicsGroup.add(bullet);

  const delta = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (speed / delta) * (toX - fromX);
  const velocityY = (speed / delta) * (toY - fromY);

  gunPhysicsGroup.setVelocity(velocityX, velocityY);
  
  scene.physics.add.collider(bullet, enemy, () => console.log('heeee'));

  //   setTimeout(() => {
  //     console.log(1);
  //     bullet.destroy(), 1000;
  //   });
};

export default gun;
