let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    // console.log('key:', key)
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
    
      connection.write('Move: up');
    }
    if (key === 's') {

      connection.write('Move: down');
    }
    if (key === 'a') {

      connection.write('Move: left');
    }
    if (key === 'd') {

      connection.write('Move: right');
    }
    if (key === 'm') {
      connection.write('Say: good job!!');
    }
    if (key === 'k') {
      connection.write('Say: haha, I \'m the boss');
    }
    if (key === 'n') {
      connection.write('Say: ')
    }

  })

  return stdin;
}

module.exports = { setupInput };