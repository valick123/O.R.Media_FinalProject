export const addProductToBasketList = (product) => {
    return {
        type: 'ADD_TO_BASKETLIST',
        payload: product
    }
}