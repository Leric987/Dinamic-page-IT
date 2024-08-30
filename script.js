 document.getElementById('main-btn').onclick = function(){
  document.getElementById('service').scrollIntoView({behavior: 'smooth'});
 }

const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');

 showButton.addEventListener('click', function(){
     dialog.showModal()
 })

 closeButton.addEventListener('click', function(){
     dialog.close()
 })

