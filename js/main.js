$(function(){

  var name = document.querySelector('.nameItem');
  var source = document.querySelector('.sourceItem');
  var price = document.querySelector('.priceItem');


  name.addEventListener('input', changeBackground);
  source.addEventListener('input', changeBackground);
  price.addEventListener('input', changeBackground);

  function changeBackground() {
    if (name.value !== '' && source.value !== '' && price.value !== '') {
      document.querySelector('button').style.background = 'green';
    } else {
      document.querySelector('button').style.background = 'red';
    }
  }
};