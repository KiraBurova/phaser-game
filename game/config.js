import create from './create'
import update from './update'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 200 }
        }
    },
    scene: {
        create,
        update,
        preload: function() {
            this.load.spritesheet('aliens', 
        'assets/aliens.png',
        { frameWidth: 32, frameHeight: 48 }
    );
        }
    }
};

export default config;