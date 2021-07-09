var elsHeader = document.querySelector('.header');
var elsHeaderNavBtn = elsHeader.querySelector('.header-nav__btn');

if (elsHeaderNavBtn){
  elsHeaderNavBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('header-nav--open');
  });
}