let scoreText = null;
let initialScore = 0;
let winText = null;

export const score = ({ scene }) => {
  scoreText = scene.add.text(16, 16, `score: ${initialScore}`, {
    fontSize: '32px',
    fill: '#fff',
  });
};

export const updateScore = score => {
  initialScore = initialScore + score;
  scoreText.setText('Score: ' + initialScore);
};

export const gameWon = ({ scene }) => {
  winText = scene.add.text(16, 16, 'You won!!!', {
    fontSize: '32px',
    fill: '#fff',
  });
  scoreText.visible = false;
};
