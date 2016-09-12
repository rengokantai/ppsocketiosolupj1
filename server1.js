var http =require('http'),
socketIO = require('socket.io'),
fs = require('fs'),
server,io;

server = http.createServer((req,res)=>{
	fs.readFile(__dirname+'/index1.html',(err,data)=>{
		res.writeHead(200);
		res.end(data);
	})
})
server.listen(5000);
io=socketIO(server);
io.on('connection',(socket)=>{
	socket.emit('servertoclient',{
		greet:'send to client!'
	});
	socket.on('clienttoserver',(message)=>{
		console.log(message);
	})
})