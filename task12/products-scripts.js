let jsonStr = localStorage.getItem('carts');
let json = JSON.parse(jsonStr);

let quertyString = window.location.search;
let urlParams = new URLSearchParams(quertyString);
let cartIdStr = urlParams.get('cartId');
let cartId = parseInt(cartIdStr);
let cart = json.find(item => item.id == cartId);
console.log('cart', cart);

document.getElementById('cart-id').innerText = cart.id;
document.getElementById('cart-total').innerText = cart.total.toFixed(2) + ' $';
document.getElementById('cart-discount').innerText = cart.total.toFixed(2) + ' $';
document.getElementById('cart-products-count').innerText = cart.totalProducts;
document.getElementById('cart-total-quantity').innerText = cart.totalQuantity;

let products = cart.products;
// console.log('products', products[0]);

products.forEach(item => {
    /*  
        id: 168
        thumbnail: "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
        title: "Charger SXT RWD"
        quantity: 3
        total: 98,999.97
        discountPercentage: 13.39
        discountedTotal: 85,743.87
        price: 32,999.99
        */

     /*
          /////////////////////////////
          // Qty |                   //
          // ----     IMAGE          //
          //                         //
          /////////////////////////////
          Title of the product
          Total: 00.00            Price
          Discount: 00.00 (10%)   00.00 
        
     */
    let image = document.createElement('img');
    image.src = item.thumbnail;
    image.alt = item.title;
    image.className = 'product-image';
    image.style.borderTopLeftRadius = '10px';
    image.style.borderTopRightRadius = '10px';
    image.style.objectFit = 'fill';
    image.style.width = '100%';
    image.style.height = '290px';

    let quantity = document.createElement('h2');
    quantity.innerHTML = `<span>QTY</span><br>${item.quantity}`;
    quantity.className = 'product-quantity';
    quantity.style.textAlign = 'center';
    quantity.style.position = 'absolute';
    quantity.style.backgroundColor = '#6b9ef7';
    quantity.style.color = 'white';
    quantity.style.padding = '5px 10px';
    quantity.style.borderRadius = '50%';
    quantity.style.top = '10px';
    quantity.style.left = '10px';
    quantity.style.fontSize = '25px';
    quantity.style.fontWeight = '600';
    quantity.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    quantity.style.minWidth = '60px';

    let title = document.createElement('h2');
    title.innerHTML = item.title;
    title.className = 'product-title';
    title.style.padding = '10px';

    let total = document.createElement('p');
    total.innerHTML = `Total: <span class='total'>${item.total.toFixed(2)} $</span>`;
    total.className = 'product-total';

    let discount = document.createElement('p');
    discount.innerHTML = `Discount: <span class='discount'>${item.discountedTotal.toFixed(2)} $</span> <span class='discount-percent'>(${item.discountPercentage}%)</span>`;
    discount.className = 'product-discount';

    let price = document.createElement('p');
    price.innerHTML = `Price: <span class='price'>${item.price.toFixed(2)} $</span>`;
    price.className = 'product-price';
    price.style.display = 'flex';
    price.style.flexDirection = 'column';
    price.style.width = '20%';
    // price.style.color = 'green'; 


    //contains: [Total, Discount], [Price]
    let priceInfoContainer = document.createElement('div');
    priceInfoContainer.className = 'product-price-info-container';
    priceInfoContainer.style.display = 'flex';
    priceInfoContainer.style.padding = '0 10px 10px 10px';
    priceInfoContainer.style.justifyContent = 'space-between';
    priceInfoContainer.style.fontSize = '13px';
    priceInfoContainer.style.fontWeight = 'bold';
    
    //contains: [Total, Discount]
    let priceInfoColContainer = document.createElement('div');
    priceInfoColContainer.className = 'product-price-info-col-container';

    //card
    let card = document.createElement('div');
    card.className = 'product-card';
    card.style.border = '1px solid lightgray';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.width = '48.3%';
    card.style.position = 'relative';

    

    //append children ----------------------------------------------------------
    card.appendChild(image);
    card.appendChild(quantity);
    card.appendChild(title);

    priceInfoColContainer.appendChild(total);
    priceInfoColContainer.appendChild(discount);
    priceInfoContainer.appendChild(priceInfoColContainer);
    priceInfoContainer.appendChild(price);
    card.appendChild(priceInfoContainer);

    card.onmouseover = function() {
        card.style.boxShadow = '0 8px 24px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)';
        card.style.transform = 'scale(1.02)';
        card.style.transition = 'all 0.3s ease-in-out';
    }
    card.onmouseout = function() {
        card.style.boxShadow = '0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        card.style.transform = 'scale(1)';
        card.style.transition = 'all 0.3s ease-in-out';
    }

    //append to products container
    let productsContainer = document.querySelector('.products-container');
    productsContainer.appendChild(card);
});