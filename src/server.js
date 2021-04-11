import HttpServer from './http-server.js';
import HttpsServer from './https-server.js';
import Http2Server from './http2-server.js';
import Http2sServer from './http2s-server.js';
import ServerProtocol from './server-protocol.js';

/** Server */
class Server {

   /**
    * Create a server
    * @param {ServerProtocols} protocol - Server protocol
    * @param {function} clientError - http callback
    * @param {function} close - http callback
    * @param {function} connect - http callback
    * @param {function} connection - http callback
    * @param {function} request - http callback
    */
   constructor( params ){

      const {

         protocol,

      } = params || {};

      if( ServerProtocol.http === protocol ){

         return new HttpServer( params );
      }
      else if( ServerProtocol.https === protocol ){

         return new HttpsServer( params );
      }
      else if( ServerProtocol.http2 === protocol ){

         return new Http2Server( params );
      }
      else if( ServerProtocol.http2s === protocol ){

         return new Http2sServer( params );
      }

      return new HttpServer( params );
   }
}

export default Server;
