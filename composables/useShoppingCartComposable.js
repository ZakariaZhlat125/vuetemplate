export const useShoppingCartComposable = () => {
  const shoppingCart = useCart().value;
  const { $awn } = useNuxtApp()

  const addToCart = (item,price,qty) => {
    let storedItem = reactive({
      id: item.id,
      qty: qty,
      price:price,
      item: item,
      photo: item.productImageUrl
    })
    // check if this stored item inside the cart is the same item we currently add
    if ( !shoppingCart.items.hasOwnProperty(item.id) && !shoppingCart.items[item.id] ) {
      Object.assign(shoppingCart.items, {
        [item.id]: storedItem
      });
      shoppingCart.totalQty += qty+1
         // increase the qunatity by one every time we add new item to cart
      shoppingCart.totalPrice += (qty+1) * price;
    } 
    else {
      shoppingCart.totalQty += 1;
      shoppingCart.totalPrice += price;
    }

    if (shoppingCart.items[item.id]) {
      shoppingCart.items[item.id]['qty'] += 1;
    }
    resetCartToStorage(shoppingCart)
    $awn.success('Product has been added to the cart')
  }

  const addToCartWithQty = (item, qty) => {
    console.log('itim ', item)
    // debugger;
    if (shoppingCart.items.hasOwnProperty(item.id) && shoppingCart.items[item.id]) {
      updateQty(item.id, qty)
    } else {
      addToCart(item)
      updateQty(item.id, qty)
    }
  }

  const updateQty = (id, qty) => {
      // check if this stored item inside the cart is the same item we currently add
      if ( shoppingCart.items.hasOwnProperty(id) && shoppingCart.items[id]) {
        // remove item quantity from main cart array
        shoppingCart.totalQty -= shoppingCart.items[id]['qty'];
        // remove item price from main cart array
        shoppingCart.totalPrice -= shoppingCart.items[id]['qty'] * shoppingCart.items[id]['price'];
        // dd(shoppingCart.totalQty);
        // add this new quantity to main array cart
        shoppingCart.items[id]['qty'] = qty;
        // update items qunatity and price with new value
        shoppingCart.totalQty += qty;
        shoppingCart.totalPrice += qty * shoppingCart.items[id]['price'];
        resetCartToStorage(shoppingCart)
      }
  }

  const removeItemFromCart = (id) => {
    // check if this stored item inside the cart is the same item we currently add
    if ( shoppingCart.items.hasOwnProperty(id) && shoppingCart.items[id]) {
        // descrease the quantity of the items inside the cart
        shoppingCart.totalQty -= shoppingCart.items[id]['qty'];
        // descrease the total price after delete the price for deleted items
        shoppingCart.totalPrice -= shoppingCart.items[id]['qty'] * shoppingCart.items[id]['price'];
        // delete the item it self from the 'items' array (from cart)
        delete shoppingCart.items[id];
        resetCartToStorage(shoppingCart)
        $awn.success('Product has been removed from cart')
    }
  }

  const resetCartToStorage = (value) => {
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(value))
    } else {
      localStorage.setItem('cart', JSON.stringify(value))
    }
  }

  return {
    addToCart,
    addToCartWithQty,
    updateQty,
    removeItemFromCart
  }

}
