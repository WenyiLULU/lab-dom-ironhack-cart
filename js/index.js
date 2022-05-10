// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal =  parseFloat((price * quantity).toFixed(2));

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;

  return subtotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct = document.querySelectorAll('.product')
  let sum = 0;
  for (let i = 0; i < allProduct.length; i+=1){
    sum += updateSubtotal(allProduct[i]);
  }
  // ITERATION 3
  const totalAll = document.querySelector('#total-value span')
  totalAll.innerHTML = sum;
  return sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  console.log(calculatePricesBtn)

  const removePricesBtn = document.getElementsByClassName('btn btn-remove')
  for (let i = 0; i < removePricesBtn.length; i+=1){
    removePricesBtn[i].addEventListener('click', removeProduct);
  }
  

  //... your code goes here
});
