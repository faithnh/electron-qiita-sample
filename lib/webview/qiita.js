var ipc = require('ipc');

ipc.on('retrieveUnreadCount', function(){
  var unreadCount = document.getElementsByClassName("globalNotifications_count")[0].innerText;
  ipc.sendToHost('retrieveUnreadCount', unreadCount);
});

Notification = function(title, options) {
  ipc.send('notify', {title: title, options: options});
}
Notification.permission = 'granted'
