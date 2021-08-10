export const addTocart = (graphic, quantity, varient) => (dispatch, getState) => {

    var cartItem = {

        name: graphic.name,
        _id: graphic.id,
        image: graphic.image,
        varient: varient,
        quantity: Number(quantity),
        prices: graphic.prices,
        price: graphic.prices[0][varient] * quantity

    }

    if (cartItem.quantity > 10) {
        alert('you cannot add more than 10 entities')
    }
    else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: graphic })

        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }

    }


    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems', JSON.stringify(cartItems))


}


export const deleteFromCart = (graphic) => (dispatch, getstate) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: graphic })


    const cartItems = getstate().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}