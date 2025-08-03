

const colorPallete = document.querySelector('.color-palette');
// console.log(colorPallete);
const output = document.querySelector('.output');
// console.log(output);

const createPalletItems = function(){
    const array = [];
for( let i = 0; i < 36; i += 1){
    const button = document.createElement('button');
    const buttonColor = getRandomHexColor();
    button.style.backgroundColor = buttonColor;
    button.classList.add('item');
    button.dataset.color = buttonColor;
    array.push(button);
    // console.log(button);
}
colorPallete.append(...array);
}
createPalletItems()

let activeButton;

const colorPickerAction = event => {
    if(event.target.nodeName !== 'BUTTON'){
        return ;
    }
    // console.log(event.target)
    // console.log(event.target.nodeName)
    // console.log(event.target.dataset.color)
    const color = event.target.dataset.color;
    output.textContent = `Selected color: - ${color}`;
    output.style.color = color;
    if(activeButton){
        activeButton.classList.remove('active')
    }
    event.target.classList.add('active');
    activeButton = event.target;
}


colorPallete.addEventListener('click' , colorPickerAction);








function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
