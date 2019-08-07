export const getCatalogInfo = (list, categories, formSettings) => {
    return {
        type: "GET_CATALOG_SETTINGS",
        payload: {
            products: list,
            category: categories,
            settings: formSettings
        }
    }
}