console.log(__dirname);
// console.log(__fileName);
setInterval(()=> {
    console.log('Hello Bangladesh');
}, 1000)

console.log('Hello WORLD');


/* So this is called Single threated.....setInterval() allows asynchronous, 
finally filled up event loop!(javascript execute line by line)*/ 


const john = 'john';
const peter = 'peter';


const sayHi = (name) => {
   console.log(`Hello dear ${name}`);
}

sayHi(john);
sayHi(peter);