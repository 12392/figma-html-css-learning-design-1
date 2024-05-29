const name_span = document.querySelector('.name');
const age_span = document.querySelector('.age')

// Not Recommended way 

// name_span.innerHTML = localStorage.myName;
// age_span.innerHTML = localStorage.age; 


// Recommended way

const inp_name = document.querySelector('.inp-name')

inp_name.addEventListener('input', (e) =>{

  // Not Recommended way 
  // localStorage.myName = e.target.value;

// Recommended way
 localStorage.setItem('myName', e.target.value)
  name_span.innerHTML = e.target.value
})

const inp_age = document.querySelector('.inp-age');

inp_age.addEventListener('input', (e) =>{
 localStorage.setItem('age', e.target.value)
  age_span.innerHTML = e.target.value
})

name_span.innerHTML = localStorage.getItem('myName');
age_span.innerHTML = localStorage.getItem('age');

// To clear all local storage
// localStorage.clear();


// To clear specific key data in local storage
// localStorage.removeItem('age');