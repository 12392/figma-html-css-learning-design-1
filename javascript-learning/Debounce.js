const inpValue = document.querySelector('.inp-name-deb');
// console.log(inpValue); 

const debounce = (func, waitingTime) =>{
  let timerId;
  return (...args) =>{
    clearTimeout(timerId);
    // console.log(timerId)
    timerId = setTimeout(() => {
      return func(...args);
    }, 1000)
  }
}

const apiCall = (e)=>{
  console.log('Api Calling', e.target.value)
}

const debounceApiCall = debounce(apiCall, 1000);

inpValue.addEventListener('input', debounceApiCall);

