const marbles = document.querySelectorAll('.marble');
var currentIndex = 0;
var interval = 1000; 
var animationInterval;

function moveMarble() {
    marbles.forEach((marble, index) => {
        if (index === currentIndex) {
            marble.src = 'marble3.jpg';
           
        } else {
            marble.src = 'marble1.jpg';
        }
    });
    currentIndex = (currentIndex + 1) % marbles.length;
}

function startAnimation() {
    animationInterval = setInterval(moveMarble, interval);
}

function stopAnimation() {
    clearInterval(animationInterval);
}

marbles.forEach((marble, index) => {
    marble.addEventListener('mouseenter', () => {
        stopAnimation();
        
    });
    marble.addEventListener('mouseleave', () => {
        startAnimation();
    });
    marble.addEventListener('hover', () => {
        interval = 1000 
        stopAnimation();
        startAnimation();
    });
});

startAnimation();