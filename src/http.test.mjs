import Server from './server.js';

describe( 'http', () => {

   it( 'callbacks', async () => {

      const server1 = new Server({

         protocol: 'http'
      });

      const events1 = Object.keys( server1._events );

      expect( events1 ).not.toContain( 'clientError' );
      expect( events1 ).not.toContain( 'close' );
      expect( events1 ).not.toContain( 'connect' );
      expect( events1 ).not.toContain( 'request' );

      const server2 = new Server({

         protocol:    'http',
         clientError: () => null,
         close:       () => null,
         connect:     () => null,
         request:     () => null,
      });

      const events2 = Object.keys( server2._events );

      expect( events2 ).toContain( 'clientError' );
      expect( events2 ).toContain( 'close' );
      expect( events2 ).toContain( 'connect' );
      expect( events2 ).toContain( 'request' );
   });
});
