const items = [
    { name: 'Shirt', price: 25 },
    { name: 'Jeans', price: 50 },
    { name: 'Shoes', price: 80 }
  ];
var total = 0;

  for(i=0;i<items.length;i++){
   total += items[i].price-items[i].price*0.10;
  }

  console.log(total);