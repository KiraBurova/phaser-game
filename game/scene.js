import player from './player'
import enemy from './enemy'

function create() {
    player({scene: this})
    enemy({scene: this})
}

export default create