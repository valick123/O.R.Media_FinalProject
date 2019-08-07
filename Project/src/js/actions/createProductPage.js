export const createProductPage = (product) => {
    return {
        type: 'SET_PRODUCT_PAGE_INFO',
        payload: product
    }
}