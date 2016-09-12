var http =require('http'),
socketIO = require('socket.io'),
express = require('express'),
app = express(),
server,io;

//replave http.createServer, fs.readFile
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index1.html');
})


//for express server, add this line
server=http.Server(app);

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