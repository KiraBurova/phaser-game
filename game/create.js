import player from './player'
import createAlien from './alien'
import { score } from './score'

function create() {
    const enemy = createAlien({scene: this})
    player({scene: this, enemy })
    score({scene: this})
}

export default create