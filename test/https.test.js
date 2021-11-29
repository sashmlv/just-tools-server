import Server from '../src/server.js';

describe( 'https', () => {

   it( 'certs', async () => {

      expect(() => new Server({

         protocol: 'https',
         key: 'key',

      })).toThrowMatching(

         thrown => thrown.code === 'ERR_OSSL_PEM_NO_START_LINE'
      );
   });

   it( 'not contain callbacks', async () => {

      const server = new Server({

         protocol: 'https'
      });

      const events = Object.keys( server._events );

      expect( events ).not.toContain( 'clientError' );
      expect( events ).not.toContain( 'close' );
      expect( events ).not.toContain( 'connect' );
      expect( events ).not.toContain( 'request' );
   });

   it( 'contain callbacks', async () => {

      const server = new Server({

         protocol: 'https',
         clientError: () => null,
         close:   () => null,
         connect: () => null,
         request: () => null,
      });

      const events = Object.keys( server._events );

      expect( events ).toContain( 'clientError' );
      expect( events ).toContain( 'close' );
      expect( events ).toContain( 'connect' );
      expect( events ).toContain( 'request' );
   });
});
