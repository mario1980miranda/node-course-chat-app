var socket = io();
socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        to: 'ozzy@osbourne',
        text: 'Hey. This is Mario'
    });
});
socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});