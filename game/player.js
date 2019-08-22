import gun from './gun';
import enemy from './enemy';

let playerPhysicsGroup = null;
let playerObj = null;

const player = ({ scene }) => {
  playerPhysicsGroup = scene.physics.add.group({
    // angularDrag: 5,
    // bounceX: 1,
    bounceY: 0.2,
    collideWorldBounds: true,
    // dragX: 60,
    // dragY: 60,
  });

  playerObj = scene.add.circle(410, 400, 10, 0xff0000);

  playerPhysicsGroup.add(playerObj);
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
  scene.input.on('pointerdown', function(pointer) {
    if (pointer.button === 0) {
      gun({
        scene,
        fromX: playerObj.x,
        fromY: playerObj.y,
        toX: pointer.position.x,
        toY: pointer.position.y,
        enemy,
      });
    }
  });
};

export default player;
