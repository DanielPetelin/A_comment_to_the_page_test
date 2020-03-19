document.getElementById('print').onclick = function() {
    var yourMesseg = document.getElementById('yourText').value;
    var userName = document.getElementById('userName').value;
    var message = yourMesseg + '<br>' + userName;

    document.getElementById('out').innerHTML = message;
};