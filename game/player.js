let playerPhysicsGroup = null
let playerObj = null

const player = ({scene}) => {
    playerPhysicsGroup = scene.physics.add.group({
        // angularDrag: 5,
        // bounceX: 1,
        bounceY: 0.2,
        collideWorldBounds: true,
        // dragX: 60,
        // dragY: 60,
    })

    playerObj = scene.add.circle(20, 20, 10, 0xff0000)

    playerPhysicsGroup.add(playerObj)
}

export const updatePlayerPosition = ({scene}) => {
    const leftKey  = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    const rightKey  = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

    if (leftKey.isDown) {
        playerPhysicsGroup.setVelocityX(-160);
    }

    if (rightKey.isDown) {
        playerPhysicsGroup.setVelocityX(160);
    }

    if(!leftKey.isDown && !rightKey.isDown) {
        playerPhysicsGroup.setVelocityX(0);
    }
}


export default player