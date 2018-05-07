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

router.use(BodyParser.text());

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

router.post('/todo', createItem);

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

router.get('/todo/:id', readItem);

/* delete item */
function deleteItem(request, response){
  var id = request.params.id;

  if(typeof todoList[id] !=='string'){
    console.log('Item not found', id);
    response.writeHead(404);
    response.end('\n');
    return;
  }
  console.log('Delete item', id);
  todoList[id] = undefined;   // delete item
  response.writeHead(204, {
    'Content-Type' : 'text/plain'
  });
  response.end('');           // response nothing
}

router.delete('/todo/:id', deleteItem);

/* read items list */
function readList(request, response){
  var item,
      itemList = [],
      listString;

  for(id in todoList){
    if(!todoList.hasOwnProperty(id)){   // test if this id is existed
      continue;
    }
    item = todoList[id];
    if(typeof item !== 'string'){       // test if this id is valid
      continue;
    }
    itemList.push(item);
  }
  console.log('Read List: \n', JSON.stringify(
    itemList,
    null,
    ' '
  ));
  listString = itemList.join('\n');
  response.writeHead(200, {
    'Content-Type' : 'text/plain'
  });
  response.end(listString + '\n');
}
router.get('/todo', readList);








