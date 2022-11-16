const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let red = 0;
    let green = 0;
    let blue = 0;

        red = generateRandomNumber();
        green = generateRandomNumber();
        blue = generateRandomNumber();


    rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    color.textContent = rgb;
    document.body.style.backgroundColor = rgb;

});

function generateRandomNumber() {
    numbers = 0;
	return numbers = Math.floor(Math.random() * 256) + 1;
  }