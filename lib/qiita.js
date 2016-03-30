var webview = document.getElementById('mainWebview');

webview.addEventListener("dom-ready", function() {
  webview.openDevTools();
});

var checkScheduleTimer = setInterval(function() {
  webview.send("retrieveUnreadCount");
}, 1000);

webview.addEventListener('ipc-message', function(event) {
 switch(event.channel){
   case "retrieveUnreadCount":
     var unreadCount = event.args[0];
     document.getElementById("unread-count").innerText = unreadCount;
     break;
 }
});
