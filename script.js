// const btn = document.querySelector('button.menu-button');
// const menu = document.querySelector('.mobile-menu');

// btn.addEventListener('click',()=> {
//     menu.classList.toggle('hidden');
// });



  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mainContent = document.querySelector('.h-full');
  const footer = document.querySelector('.footer');  // Select the footer element

  function toggleMenu() {
      if (window.innerWidth < 1024) {  // Adjust breakpoint as needed (e.g., Tailwind lg: 1024px)
          if (mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden');
              mainContent.classList.add('hidden');
              footer.classList.add('hidden');  // Hide the footer as well
          } else {
              mobileMenu.classList.add('hidden');
              mainContent.classList.remove('hidden');
              footer.classList.remove('hidden');  // Show the footer when menu is hidden
          }
      } else {
          mobileMenu.classList.remove('hidden'); // Ensure it's always visible on larger screens
          mainContent.classList.remove('hidden');
          footer.classList.remove('hidden');
      }
  }

  menuButton.addEventListener('click', toggleMenu);

  // Ensure correct visibility when resizing the window
  window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
          mobileMenu.classList.remove('hidden');
          mainContent.classList.remove('hidden');
          footer.classList.remove('hidden');
      } else {
          mobileMenu.classList.add('hidden');
          mainContent.classList.remove('hidden');
          footer.classList.remove('hidden');
      }
  });

