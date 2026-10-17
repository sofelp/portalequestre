const events = [
  { title: 'Prova dos 3 Tambores', category: 'Categoria: Feminina' },
  { title: 'Circuito Regional de Saltos', category: 'Categoria: Aberta' },
  { title: 'Festival Equestre de Verão', category: 'Categoria: Aberta' },
];

const carousel = document.querySelector('[data-carousel]');

if (carousel) {
  const title = carousel.querySelector('[data-event-title]');
  const category = carousel.querySelector('[data-event-category]');
  const count = document.querySelector('[data-carousel-count]');
  const dots = [...document.querySelectorAll('[data-carousel-dots] button')];
  let activeIndex = 0;
  let touchStartX = null;

  const showEvent = (index) => {
    activeIndex = (index + events.length) % events.length;
    title.textContent = events[activeIndex].title;
    category.textContent = events[activeIndex].category;
    count.textContent = `${activeIndex + 1} de ${events.length}`;

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      if (isActive) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
      dot.setAttribute('aria-label', `Mostrar evento ${dotIndex + 1}: ${events[dotIndex].title}`);
    });
  };

  document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => showEvent(activeIndex - 1));
  document.querySelector('[data-carousel-next]')?.addEventListener('click', () => showEvent(activeIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showEvent(index)));

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showEvent(activeIndex - 1);
    if (event.key === 'ArrowRight') showEvent(activeIndex + 1);
  });

  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showEvent(activeIndex + (distance < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
}
