const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '127.0.0.1',
    port: 50541
  })
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data)
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SYH");
    
    // conn.write('Move: up');
    // setTimeout(()=>{
    //   conn.write('Move: left');
    // },1000);
    // setTimeout(()=>{
    //   conn.write('Move: right');
    // },3000);
    // setTimeout(()=>{
    //   conn.write('Move: left');
    // },5000);
  
  })

  return conn;
}

module.exports = { connect };