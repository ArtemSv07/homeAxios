const elements = document.querySelectorAll('.animations');
const covers = document.querySelector('.covers');


function checkIfCoversInView() {
    const bounding = covers.getBoundingClientRect();
    const coversInView = (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );



    if (coversInView) {
        if (window.innerWidth < 1440) {
            elements.forEach((element) => {
                console.log("on");
            element.classList.add('animations-mobile-tablet');
      
            
          });
        } 
    } else {
        elements.forEach((element) => {
            console.log("off");
        element.classList.remove('animations-mobile-tablet');
  
        
      });
}


}

window.addEventListener('scroll', checkIfCoversInView);
window.addEventListener('resize', checkIfCoversInView);