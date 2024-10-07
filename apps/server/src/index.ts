import http from 'http'; 
import SocketService from './services/socket';


async function init() {  

const socketService = new SocketService(); // yk 

 const httpServer = http.createServer(); 
 const PORT = process.env.PORT? process.env.PORT:8000; 

socketService.io.attach(httpServer); // attach madadhu http server ge


httpServer.listen(PORT, () => {
    console.log(`HTTP server started at PORT: ${PORT}`);
});

socketService.initListeners(); // adhe socket listeners idhu 

}




init(); 

