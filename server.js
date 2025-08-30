const myhttp1 = require("http");
const fs1 = require("fs").promises;

const requestListener1 = function( request1, response1 ) {
    console.log( request1.url );

    if ( request1.url === '/' ) {
        fs1.readFile(__dirname + "/pageXV.html")
            .then(
                contents1 => {
                    response1.setHeader("Content-Type", "text/html; charset=UTF-8");
                    response1.writeHead(200);
                    response1.end(contents1);
                }
            );
    } else {
        fs1.readFile(__dirname + "/dataXV.json")
            .then(
                contents1 => {
                    response1.setHeader("Content-Type", "application/json; charset=UTF-8");
                    response1.writeHead(200);
                    response1.end(contents1);
                }
            );
    }
};

let myserver1 = myhttp1.createServer(
    requestListener1
);

myserver1.listen( 8080, "127.0.0.1" );