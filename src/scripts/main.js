'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRek = spider.getBoundingClientRect();

  const relX = e.clientX - wallRect.left;
  const relY = e.clientY - wallRect.top;

  let left = relX - spiderRek.width / 2;
  let topy = relY - spiderRek.height / 2;

  left = Math.max(0, Math.min(left, wallRect.width - spiderRek.width));
  topy = Math.max(0, Math.min(topy, wallRect.height - spiderRek.height));

  spider.style.left = left + 'px';
  spider.style.top = topy + 'px';
});
