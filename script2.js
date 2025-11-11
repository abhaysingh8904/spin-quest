/* ---------x-------------------------x-------------------------x----------------------------*/

                                     /*  Slot Machine  */
                          
                          
document.addEventListener('DOMContentLoaded', function () {
  const reels = document.querySelectorAll('.reels');
  const startButton = document.getElementById('start-btn');
  const resultModal1 = document.getElementById('result-modal1');
  const resultText1 = document.getElementById('result-text1');
  const resultModal2 = document.getElementById('result-modal2');
  const resultText2 = document.getElementById('result-text2');

  const spinSound = document.getElementById('spinSound');
    const winSound = document.getElementById('winSound');
    const loseSound = document.getElementById('loseSound');

  let spinning = false;

  function randomizeReelPositions() {
      for (const reel of reels) {
          const randomRotation = Math.floor(Math.random() * 360);
          reel.style.transform = `rotateX(${randomRotation}deg)`;
      }
  }

  function getRandomImage() {
      const images = [
          'images/1.png',
          'images/2.png',
          'images/3.png',
          'images/4.png',
          'images/5.png',
          'images/6.png',
          'images/7.png',
          'images/8.png',
          'images/9.png',
          'images/10.png',
      ];

      return images[Math.floor(Math.random() * images.length)];
  }

  function spinReel(reel) {
      const spinDuration = 5100; // Adjust the spin duration as needed
      const startTime = performance.now();

      return new Promise(resolve => {
          function spin(timestamp) {
              const elapsedTime = timestamp - startTime;

              if (elapsedTime < spinDuration) {
                  const rotation = (elapsedTime / spinDuration) * 4600; // Adjust the rotation speed
                  reel.style.transform = `rotateX(${rotation}deg)`;
                  requestAnimationFrame(spin);
              } else {
                  reel.querySelector('li img').src = getRandomImage();
                  reel.style.transform = 'rotateX(0deg)';
                  resolve();
              }
          }

          requestAnimationFrame(spin);
      });
  }

  async function spinAllReels() {
      if (spinning) return;

      spinning = true;
      randomizeReelPositions();

      spinSound.play();

      const promises = Array.from(reels, spinReel);
      await Promise.all(promises);

      showResult();
      spinning = false;
  }

  function showResult() {
      const symbols = Array.from(reels).map(reel => reel.querySelector('li img').src);

      // Change the win condition to require at least two reels with the same image
      const winCondition = symbols.some(symbol => symbols.filter(s => s === symbol).length >= 2);

      if (winCondition) {
          resultText1.style.animation = 
          resultText1.style.color = 'yellow';
          resultText2.style.color = 'yellow';
          resultText1.innerHTML = '<span class="blink">B I N G O ! !</span>';
          resultText2.innerHTML = '<span class="blink">B I N G O ! !</span>';
          winSound.play();
      } else {
          resultText1.style.color = 'red';
          resultText2.style.color = 'red';
          resultText1.textContent = 'L O O S E R !';
          resultText2.textContent = 'L O O S E R !';
          loseSound.play(); 
      }

      resultModal1.style.display = 'block';
      resultModal2.style.display = 'block';
  }

  function resetResultContent() {
    resultText1.innerHTML = '';
    resultText1.textContent = '';
    resultModal1.style.display = 'none';
}

  startButton.addEventListener('click', spinAllReels);
});