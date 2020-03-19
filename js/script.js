document.getElementById('print').onclick = function() {
    var yourMesseg = document.getElementById('yourText').value;
    var userName = document.getElementById('userName').value;
    var message = yourMesseg + '<br>' + 'Сообщение от пользователя: ' + '<b>' + userName + '</b>';

    document.getElementById('out').innerHTML =  message;
};

document.getElementById('clear').onclick = function() {
    document.getElementById('yourText').value = '';
    document.getElementById('userName').value = '';
};

// Thx for watching!