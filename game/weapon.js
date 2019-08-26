import { updateScore, gameWon } from './score';

const speed = 600;
let globalScene = null;

export const createWeapon = scene => {
  globalScene = scene.scene;
};

const weapon = ({ fromX, fromY, toX, toY, enemy }) => {
  const playerBullet = globalScene.add.circle(fromX, fromY, 5, 0xff66ff);
  const playerBullets = globalScene.physics.add.group();

  playerBullets.add(playerBullet);

  const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (speed / d) * (toX - fromX);
  const velocityY = (speed / d) * (toY - fromY);
  playerBullets.setVelocity(velocityX, velocityY);

  globalScene.physics.add.collider(
    enemy,
    playerBullets,
    (overlappingBullet, overlappingAlien) => {
      onAlienHit(overlappingAlien, overlappingBullet);
    },
    null,
    globalScene,
  );

  function onAlienHit(overlappingAlien, overlappingBullet) {
    overlappingBullet.destroy();
    overlappingAlien.destroy();
    updateScore(10);

    if (enemy.children.size === 0) {
      gameWon({ scene: globalScene });
    }
  }
};

export default weapon;
