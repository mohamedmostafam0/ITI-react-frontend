function openTypingWindow() {
    var input = "Typing message...";
    var typingWindow = window.open('', '_blank', 'width=300,height=150');

    typingWindow.document.open();
    typingWindow.document.write('<div id="message"></div>');

    function typeMessage(index) {
        if (index < input.length) {
            typingWindow.document.getElementById('message').innerHTML += input.charAt(index);
            setTimeout(function() {
                typeMessage(index + 1);
            }, 300); 
        } else {
            setTimeout(function() {
                typingWindow.close();
            }, 3000);
        }
    }

    typeMessage(0);
}
