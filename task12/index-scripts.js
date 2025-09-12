let lastFetchTime = localStorage.getItem('carts-last-fetch');
//console.log('**** lastFetchTime::', lastFetchTime);

if (lastFetchTime != null) {
    let now = new Date();
    let lastFetchDt = new Date(lastFetchTime);
    let diff = now - lastFetchDt;
    let diffMinutes = Math.floor(diff / 60000);
    //console.log('****  diff', diff, 'diffMinutes::', diffMinutes);

    if (diffMinutes > 5) {
        localStorage.removeItem('carts');
        localStorage.removeItem('carts-last-fetch');
    }
}

let jsonStr = localStorage.getItem('carts');
//console.log('**** cached carts::', jsonStr);

if (jsonStr != null) {
    handleCarts(JSON.parse(jsonStr));
}
else {
    fetch('https://dummyjson.com/carts')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        else {
            let r = confirm(`Fetch error: ${res.status} ${res.statusText}, retry?`);
            if (r === true) window.location.reload();
        }
    })
    .then(data => {
        console.log('**** data::', typeof data, ' ---- ', data.carts);
        localStorage.setItem('carts', JSON.stringify(data.carts));
        localStorage.setItem('carts-last-fetch', new Date().toUTCString());
        handleCarts(data.carts);
    })
    .catch(err => {
        alert(`Fetch error: ${err}, retry?`);
        window.location.reload();
    });
}


function handleCarts(carts) {
    let main = document.querySelector('main');

    let h1 = document.createElement('h1');
    h1.innerHTML = `Carts`;
    h1.className = 'title';
    main.prepend(h1);
    
    carts.forEach(cart => {
        //console.log('-> cart', ' total::', cart.total, ' discountedTotal::', cart.discountedTotal, ' totalProducts::', cart.totalProducts, ' totalQuantity::', cart.totalQuantity );
        
        let cartIcon = document.createElement('p');
        cartIcon.className = 'cart-icon';
        cartIcon.innerHTML = `🛒`;

        let cartId = document.createElement('p');
        cartId.innerHTML = `Cart ID: <span class='cart-id'>${cart.id}</span>`;

        let total = document.createElement('p');
        total.innerHTML = `Total: <span class='mony'>${cart.total}$</span>`;

        let discount = document.createElement('p');
        discount.innerHTML = `Discount: <span class='discount'>${cart.discountedTotal}$</span>`;

        let products = document.createElement('p');
        products.innerHTML = `Products: <span class='products'>${cart.totalProducts} <i>items</i></span>`;

        let arrow = document.createElement('p');
        arrow.className = 'cart-arrow';
        // arrow.style.position = 'absolute';
        // arrow.style.right = '1px';
        arrow.style.width = '25px !important';
        arrow.style.textAlign = 'right';
        arrow.innerHTML = '➚';

        let cartDiv = document.createElement('div');
        cartDiv.className = 'cart';
        cartDiv.onclick = () => onCartSelected(cart);
        cartDiv.appendChild(cartIcon);
        cartDiv.appendChild(cartId);
        cartDiv.appendChild(total);
        cartDiv.appendChild(discount);
        cartDiv.appendChild(products);
        cartDiv.appendChild(arrow);


        main.appendChild(cartDiv);

        // cart.products.forEach(product => {
        //     console.log('**** product::', product);
        //     console.log('**** product id::', product.id);
        //     console.log('**** product title::', product.title);
        //     console.log('**** product quantity::', product.quantity);
        //     console.log('**** product total::', product.total);
        //     console.log('**** product discountPercentage::', product.discountPercentage);
        //     console.log('**** product discountedPrice::', product.discountedPrice);
        // });
    });
}

function onCartSelected(cart) {
    console.log('>>> selected cart:', cart);
    //localStorage.setItem('selectedCart', JSON.stringify(cart));

    window.open("products.html?cartId=" + cart.id, "_blank");
}
