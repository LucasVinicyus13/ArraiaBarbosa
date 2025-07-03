  function launchConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff0', '#f00', '#0f0', '#0ff', '#00f', '#f0f', '#fff'];
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = Math.random() * 20 + 'vh';
      confetti.style.animationDelay = (Math.random() * 0.5) + 's';
      container.appendChild(confetti);

      // Remover após a animação
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }

  window.addEventListener('load', launchConfetti);
