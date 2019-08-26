import create from './create';
import update from './update';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {},
  },
  scene: {
    create,
    update,
  },
};

export default config;
