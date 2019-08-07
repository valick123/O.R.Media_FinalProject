export const deleteProductFromCatalog = (productId) => {
    return {
        type: 'DELETE_PRODUCT_FORM_CATALOG',
        payload: productId
    }
}