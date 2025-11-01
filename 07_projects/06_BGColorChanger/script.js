const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;    // In these we are overwritting the value of intervalId 
const startChangingColor = function() {
    if(!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)    // these condition will check if the intervalId value is null then these will work
    }
    function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null;   // these is used to flush out or de-reference(intervalId) the value stored in the intervalId 
}


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);




