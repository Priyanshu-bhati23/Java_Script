// Generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID;

// Function to start changing background color
const startChangingColor = function () {
    intervalID = setInterval(changeBgColor, 1000);
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

// Function to stop changing background color
const stopChangingColor = function () {
    clearInterval(intervalID);
};

// Add event listeners to buttons
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
