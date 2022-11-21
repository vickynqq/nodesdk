const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// app.get('/', (req, res) => {        //get requests to the root ("/") will route here
//   res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
//                                                       //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });


// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});