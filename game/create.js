import player from './player'
import createAlien from './alien'

function create() {
    player({scene: this})
    createAlien({scene: this})
}

export default create