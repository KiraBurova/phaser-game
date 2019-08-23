import { updateScore} from './score';

const speed = 600;
let globalScene;

export const createWeapon = ({scene}) => {
  globalScene = scene;
}

const weapon = ({ scene, fromX, fromY, toX, toY, aliens }) => {
  const weaponPhysicsGroup = globalScene.physics.add.group({});
  const bullet = globalScene.add.circle(fromX, fromY, 2, 0xff0000);

  weaponPhysicsGroup.add(bullet);

  const delta = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (speed / delta) * (toX - fromX);
  const velocityY = (speed / delta) * (toY - fromY);

  weaponPhysicsGroup.setVelocity(velocityX, velocityY);
  
  globalScene.physics.add.collider(weaponPhysicsGroup, aliens, (b, alien) => {
    console.log('hit')
    // bullet.destroy();
    // b.destroy()
    // alien.destroy();
    // updateScore(10);
  });

  setTimeout(() => bullet.destroy(), 1000);
};

export default weapon;
