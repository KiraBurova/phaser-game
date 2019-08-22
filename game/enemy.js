let enemyPhysicsGroup = null
let enemyObj = null

const enemy = ({scene}) => {
    enemyPhysicsGroup = scene.add.group({
        // angularDrag: 5,
        // bounceX: 1,
        // bounceY: 0.2,
        // collideWorldBounds: true,
        // dragX: 60,
        // dragY: 60,
    })

    enemyObj = scene.add.circle(20, 20, 10, 0x03f)

    enemyPhysicsGroup.add(enemyObj)
}

export default enemy