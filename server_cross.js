var io = require('socket.io')(5000),sockets=[];

io.on('connection',(socket)=>{
	sockets.push(socket);
	socket.on('message',(message)=>{
		for(var i =0;i<sockets.length;i++){
			sockets[i].send(message);//a shorthand version of socket.emit
		}
	});
	socket.on('disconnect',()=>{
		for(var i =0;i<sockets.length;i++){
			if(sockets[i].id===socket.id){
				sockets.splice(i,1);
			}
		}
		console.log('disconnect')
	})
})