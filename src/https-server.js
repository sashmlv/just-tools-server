import https from 'https';

class HttpsServer {

   /**
    * Create a https server
    * @param {string|string[]|Buffer|Buffer[]} key
    * @param {string|string[]|Buffer|Buffer[]|Object[]} cert
    * @param {function} clientError
    * @param {function} close
    * @param {function} connect
    * @param {function} connection
    * @param {function} request
    */
   constructor( params ){

      const {

         key,
         cert,
         clientError,
         close,
         connect,
         connection,
         request,

      } = params || {};

      const server = https.createServer({
         key,
         cert,
      });

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

export default HttpsServer;
