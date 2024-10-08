import { Server } from 'socket.io'; 
import Redis from 'ioredis';

// 2 connections from redis : one for publishing messages and one for subscribing to messages
// pubsub in scale chatapp


class SocketService { 
    private _io: Server; 

    constructor() {  
        console.log("Initializing socket service...");
        this._io = new Server({
            cors: { 
                allowedHeaders: ["*"], 
                origin: "*",
            }
      
        });
        sub.subscribe("MESSAGES");
    }


    public initListeners() {
        const io = this.io; 
        console.log("Initializing socket listeners..."); 
        io.on("connect", (socket) => { 
            console.log(`New Socket connected`, socket.id);

            socket.on('event:message', async ({message}: {message: string}) => {

                console.log("new message ", message); 

                await pub.publish("MESSAGES", JSON.stringify({message}));
  
            });
        });

        // whenever message comes , which channel gets which messages 
        sub.on('message', (channel, message) => {
            if (channel === "MESSAGES") {
              console.log("new message from redis", message); // for scale 
                io.emit("message", message);
            }
        // when message comes on the channel , all clients should get the message
        });
    }

    get io() { 
        return this._io;
    }
}



export default SocketService;