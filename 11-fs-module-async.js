const { readFile, writeFile } = require('fs');
// isto kao
//const fs = require('fs');
//fs.readFile;

readFile('./content/first.txt', 'utf8', (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = result;

   readFile('./content/second.txt', 'utf-8', (err, result) => {
      if (err) {
         console.log(err);
         return;
      }
      const second = result;
      writeFile(
         './content/result-async.txt',
         `Here is the result : ${first}, ${second}`
         , (err, result) => {
            if (err) {
               console.log(err);
               return;
            }
            console.log(result);
         })
   })
});