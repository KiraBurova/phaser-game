let scoreText = null;
let initialScore = 0;

export const score = ({scene}) => {
  scoreText = scene.add.text(16, 16, `score: ${initialScore}`, { fontSize: '32px', fill: '#fff' });
}

export const updateScore = (score) => {
    initialScore = initialScore + score;
    scoreText.setText('Score: ' + initialScore);
}