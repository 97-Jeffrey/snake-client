const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  console.log('IP:',IP, PORT)
  const conn = net.createConnection({
     host:  IP,
     port: PORT

    
  })
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data)
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SYH");
  
  })

  return conn;
}

module.exports = { connect };