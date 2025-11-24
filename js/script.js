// ===== Scroll Reveal Animation =====
function reveal() {
  const reveals = document.querySelectorAll('.about-card, .feature-item, .tutorial-card, .step-card');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('reveal-active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();

// ===== 3D Tilt Effect for Cards =====
function initTiltEffect() {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', handleTiltReset);
  });
}

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
}

function handleTiltReset(e) {
  const card = e.currentTarget;
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
}

// ===== Header Scroll Effect =====
function handleHeaderScroll() {
  const header = document.querySelector('.header');

  if (window.scrollY > 100) {
    header.style.background = 'rgba(10, 14, 26, 0.95)';
    header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(10, 14, 26, 0.8)';
    header.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', handleHeaderScroll);

// ===== Smooth Scroll for Anchor Links =====
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== Animated Background Particles =====
function createParticles() {
  const bgAnimation = document.querySelector('.bg-animation');

  if (!bgAnimation) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 10;

    particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 245, 255, 0.6);
            border-radius: 50%;
            left: ${left}%;
            bottom: -10px;
            animation: particleRise ${duration}s linear ${delay}s infinite;
            box-shadow: 0 0 10px rgba(0, 245, 255, 0.8);
        `;

    bgAnimation.appendChild(particle);
  }

  const style = document.createElement('style');
  style.textContent = `
        @keyframes particleRise {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
}

// ===== Button Glow Effect =====
function initButtonGlow() {
  const buttons = document.querySelectorAll('.cta-button');

  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const glow = button.querySelector('.button-glow');
      if (glow) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = `${x - glow.offsetWidth / 2}px`;
        glow.style.top = `${y - glow.offsetHeight / 2}px`;
      }
    });
  });
}

// ===== Floating Animation for Hero Cards =====
function initFloatingCards() {
  const cards = document.querySelectorAll('.floating-card');

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 2}s`;
  });
}

// ===== Copy Code Block =====
function initCodeBlockCopy() {
  const codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.textContent = 'Copiar';
    button.className = 'copy-button';
    button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0.5rem 1rem;
            background: rgba(0, 245, 255, 0.2);
            color: var(--color-primary);
            border: 1px solid var(--color-primary);
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        `;

    block.style.position = 'relative';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copiado!';
        button.style.background = 'rgba(0, 255, 136, 0.2)';
        button.style.borderColor = 'var(--color-secondary)';
        button.style.color = 'var(--color-secondary)';

        setTimeout(() => {
          button.textContent = 'Copiar';
          button.style.background = 'rgba(0, 245, 255, 0.2)';
          button.style.borderColor = 'var(--color-primary)';
          button.style.color = 'var(--color-primary)';
        }, 2000);
      });
    });

    button.addEventListener('mouseenter', () => {
      button.style.background = 'rgba(0, 245, 255, 0.3)';
      button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
      if (button.textContent === 'Copiar') {
        button.style.background = 'rgba(0, 245, 255, 0.2)';
        button.style.transform = 'scale(1)';
      }
    });
  });
}

// ===== Progress Bar for Tutorial Pages =====
function initProgressBar() {
  const article = document.querySelector('.tutorial-content');

  if (!article) return;

  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
        position: fixed;
        top: 60px;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        z-index: 1000;
        transition: width 0.2s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;
  });
}

// ===== Initialize All Functions =====
function init() {
  initTiltEffect();
  initSmoothScroll();
  createParticles();
  initButtonGlow();
  initFloatingCards();
  initCodeBlockCopy();
  initProgressBar();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===== Easter Egg: Konami Code =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(',') === konamiSequence.join(',')) {
    document.body.style.animation = 'rainbow 2s ease-in-out';

    const style = document.createElement('style');
    style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
    document.head.appendChild(style);

    setTimeout(() => {
      document.body.style.animation = '';
    }, 2000);
  }
});
