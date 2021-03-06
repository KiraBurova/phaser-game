import weapon, { createWeapon } from './weapon';

let playerPhysicsGroup = null;
let playerObj = null;
let globalEnemy = null;

const player = ({ scene, enemy }) => {
  globalEnemy = enemy;
  playerPhysicsGroup = scene.physics.add.group({
    collideWorldBounds: true,
  });

  playerObj = scene.add.circle(410, 400, 10, 0xff0000);

  playerPhysicsGroup.add(playerObj);
  createWeapon({ scene });
};

export const updatePlayerPosition = ({ scene }) => {
  const leftKey = scene.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.LEFT,
  );
  const rightKey = scene.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.RIGHT,
  );

  if (leftKey.isDown) {
    playerPhysicsGroup.setVelocityX(-160);
  }

  if (rightKey.isDown) {
    playerPhysicsGroup.setVelocityX(160);
  }

  if (!leftKey.isDown && !rightKey.isDown) {
    playerPhysicsGroup.setVelocityX(0);
  }
};

export const shoot = ({ scene }) => {
  scene.input.on('pointerdown', pointer => {
    if (pointer.button === 0) {
      weapon({
        scene,
        fromX: playerObj.x,
        fromY: playerObj.y,
        toX: pointer.position.x,
        toY: pointer.position.y,
        enemy: globalEnemy,
      });
    }
  });
};

export default player;
