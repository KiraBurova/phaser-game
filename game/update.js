import { updatePlayerPosition, shoot } from './player';

function update() {
  updatePlayerPosition({ scene: this });
  shoot({ scene: this });
}

export default update;
