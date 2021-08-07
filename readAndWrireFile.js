const {readFile, writeFile} = require('fs')

readFile('./anotherContent/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
  console.log(result);
  const first = result;
  readFile('./anotherContent/second.txt', 'utf8', (err, result) => {
      if(err){
          console.log(err);
          return
      }
   console.log(result);
  const second = result

  setInterval(() =>{
    writeFile('./anotherContent/iDoNotWrite.txt', 
    `Here is the result: ${first} ${second} \n\t`, {flag: 'a'}, (err, result) => {
        if(err){
            return;
        }
  
      //   console.log(result);
    })
  }, 1000)


  })

})

console.log('This is event loop');
