const inpValue = document.querySelector('.inp-name-thr');
const span = document.querySelector('#thr-span')


const throttle = (func, waitingTime = 1000) =>{
  let timerId = null;
  return (...args) =>{
    if (timerId) return
    timerId = setTimeout(() => {
      timerId = null;
      return func(...args);
    }, waitingTime)
  }
}


const inpthrottle = (func, waitingTime = 1000) =>{
  let firstCall = true;
  let timerId = null;
  let lastAgrs = [];
  return function(...args){
    console.log('above', this);
    lastAgrs = args
    if (firstCall) {
      func.apply(this,lastAgrs)
      firstCall = false
      return
    }
    if (timerId) return
    timerId = setTimeout(() => {
      timerId = null;
      return func.apply(this,lastAgrs);
    }, waitingTime)
  }
}



const apiCall = function(value){
  console.log('down',this)
  console.log('Api Calling', value)
}

const logInput = inpthrottle(apiCall, 500)

inpValue.addEventListener('input', (e)=>{
  logInput.call({name: 'suryansh'},e.target.value)
});


const updateNumber = throttle(()=>{
  span.innerText = ++span.innerText
})

document.addEventListener('mousemove', () =>{
  updateNumber();
} )



