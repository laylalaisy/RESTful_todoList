var Http = require( 'http' ),
    Router = require( 'router' ),
    server,
    router;
var BodyParser = require('body-parser');
var counter = 0,
    todoList = {};

/* router */   
router = new Router();

/* server */
server = Http.createServer( function( request, response ) {
  router( request, response, function( error ) {
    if ( !error ) {
      response.writeHead( 404 );
    } else {
      // Handle errors
      console.log( error.message, error.stack );
      response.writeHead( 400 );
    }
    response.end( 'RESTful API Server is running!\n' );
  });
});

server.listen( 3000, function() {
  console.log( 'Listening on port 3000' );
});

/* create item */
function createItem(request, response){
  var id = counter += 1,
      item = request.body;

  console.log('Create item', id, item);
  todoList[id] = item;
  response.writeHead(201, {
    'Content-Type' : 'text/plain',
    'Location' : '/todo/' + id
  });
  response.end('Item');
}

// GET: read item content
function readItem(request, response){
  var id = request.params.id,
      item = todoList[id];
  if(typeof item !== 'string'){
    console.log('Item not found', id);
    response.writeHead(404);
    response.end('\n');
    return;
  }
  console.log('Read item', id, item);
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end(item + '\n');
}


router.use(BodyParser.text());
router.post('/todo', createItem);
router.get('/todo/:id', readItem);