export const editProductInCatalog = (productId, newProductInfo) => {
    return {
        type: 'EDIT_PRODUCT_IN_CATALOG',
        payload: {
            id: productId,
            info: newProductInfo
        }
    }
}