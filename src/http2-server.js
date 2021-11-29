import http2 from 'http2';

class Http2Server {

   /**
    * Create a http2 server
    * @param {function} clientError
    * @param {function} close
    * @param {function} connect
    * @param {function} connection
    * @param {function} request
    */
   constructor( params ){

      const {

         clientError,
         close,
         connect,
         connection,
         request,

      } = params || {};

      const server = http2.createServer();

      if( clientError ){

         server.on( 'clientError', clientError );
      }

      if( close ){

         server.on( 'close', close );
      }

      if( connect ){

         server.on( 'connect', connect );
      }

      if( connection ){

         server.on( 'connection', connection );
      }

      if( request ){

         server.on( 'request', request );
      }

      return server;
   }
}

export default Http2Server;
