var EventEmitter=require('events');
console.log("Welcome to world of event creation and emitting")
var e=new EventEmitter();
e.on('overflow',function(){
console.log('this is overflow emitter')
})
e.emit('overflow');

e.on('underflow',function(a,b){
console.log(a,b,this);
});

e.emit('underflow','a','b');
e.emit('underflow','c','d');

e.on('underflow',function(a,b){
    setImmediate(()=>{
        console.log("this happens asynchronously");
    })
})

e.emit('underflow','a','b');

var m=0;
e.on('overflow',()=>{
    console.log(++m);
})

e.emit('overflow');
e.emit('overflow');
console.log("GAME OVER");