export const addProductToCatalog = (newItem) => {
    return {
        type: "ADD_PRODUCT_TO_CATALOG",
        payload: newItem
    }
}