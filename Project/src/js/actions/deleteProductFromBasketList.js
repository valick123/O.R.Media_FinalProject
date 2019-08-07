export const deleteProductFromBasketList = (productId) => {
    return {
        type: 'DELETE_FROM_BASKET',
        payload: productId
    }
}