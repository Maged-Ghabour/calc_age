let calcBtn = document.getElementById('calc');
let birthday = document.getElementById('birthday');
birthday.value = new Date().toISOString().split('T')[0];
birthday.max = new Date().toISOString().split('T')[0];
let years = document.getElementById('years');
let monthes = document.getElementById('monthes');
let days = document.getElementById('days');



calcBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Birthday

  let d1 = new Date(birthday.value).getDate(); 
  let m1 = new Date(birthday.value).getMonth() + 1;
  let y1 = new Date(birthday.value).getFullYear();
  

  // Date Now

  let d2 = new Date().getDate(); 
  let m2 = new Date().getMonth() + 1;
  let y2 = new Date().getFullYear();



  let d3, m3, y3; 

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else { 
    m3--;
    console.log(getDaysInMontn(y1, m1));
    d3 = getDaysInMontn(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11
    y3--;
  }


  years.innerHTML = y3;
  monthes.innerHTML = m3;
  days.innerHTML = d3;

  document.querySelector('.result').style.display = 'block'

})


function getDaysInMontn(years, months) {
  return new Date(years,months,0).getDate()
}



window.addEventListener('load', () => {
      document.querySelector('.preloader').style.display = 'none';
})
