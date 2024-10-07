import { Server } from 'socket.io'; 


class SocketService { 
    private _io: Server; 

    constructor() {  
        console.log("Initializing socket service...");
        this._io = new Server();
    }

    public initListeners() {
        const io = this.io; 
        console.log("Initializing socket listeners..."); // namge gothagutthe everything is working good 
        io.on("connect", (socket) => { 
            console.log(`New Socket connected`, socket.id);

            socket.on('event:message', async ({message}: {message: string}) => {
                // name client event emit madthare i.e, message 
                      // message na destructure madadhu , adhu string antha 
              console.log("new message ", message); 
              // adhe message na console log madadh aste 
      
        });
    });
    }

    get io() { 
        return this._io;
    }
}


// when a client connect aadhaga , illi nav a client na handle madthivi



export default  SocketService;