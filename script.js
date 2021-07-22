const cards = document.querySelectorAll('.card')

function moveToTheRight() {
    let rightCar = this.querySelector('#car-right')
    let leftCar = this.querySelector('#car-left')

    rightCar.setAttribute('id', 'car-right-move')
    leftCar.setAttribute('id', 'car-left-move')
}

function setDefaultPosition() {
    let rightCar = this.querySelector('#car-right-move')
    let leftCar = this.querySelector('#car-left-move')
    
    rightCar.setAttribute('id', 'car-right')
    leftCar.setAttribute('id', 'car-left')

}

cards.forEach((card) => {
    card.addEventListener('mouseover', moveToTheRight);
    card.addEventListener('mouseout', setDefaultPosition);
})


// function createRipple(event) {
//     const button = event.currentTarget;
  
//     const circle = document.createElement("span");
//     const diameter = Math.max(button.clientWidth, button.clientHeight);
//     const radius = diameter / 2;
  
//     circle.style.width = circle.style.height = `${diameter}px`;
//     circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
//     circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
//     circle.classList.add("ripple");
  
//     const ripple = button.getElementsByClassName("ripple")[0];
  
//     if (ripple) {
//       ripple.remove();
//     }
  
//     button.appendChild(circle);
//   }
  
//   const buttons = document.getElementsByTagName("button");
//   for (const button of buttons) {
//     button.addEventListener("click", createRipple);
//   }
  