const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const numbers = data.split('\n').map(Number).filter(n => !isNaN(n));
  numbers.sort((a, b) => a - b);

  const output = numbers.join('\n');
  fs.writeFile('output.txt', output, (err) => {
    if (err) throw err;
    console.log('Sorted numbers written to output.txt');
  });
});
