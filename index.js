
  
    const menuClick = document.querySelector('.nav'); // Select the whole navbar element
    const menuButton = document.getElementById('menuButton');
    const CloseMenu=document.querySelector('#close')

    menuButton.addEventListener('click', () => {
      menuClick.classList.add('active'); // Use toggle instead of add to enable class toggling
    });
    CloseMenu.addEventListener('click', () => {
        menuClick.classList.remove('active'); // Use toggle instead of add to enable class toggling
    });
    function nextPage(){
      window.location.href='sproduct.html'
   }



