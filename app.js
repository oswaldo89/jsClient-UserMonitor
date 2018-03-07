var socket = io.connect('http://localhost:8890', { 
  query: 'token=hg6-82hs-8n26-jsgt'
});

socket.on('prueba', function (data) {
  var obj = JSON.parse(data);
  $("#messages").append("<label>"+obj.message+"</label> <br>");
});
