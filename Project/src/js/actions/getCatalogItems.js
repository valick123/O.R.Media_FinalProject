export const getItems = (catalogItems, catalogSettings) => {
    return {
        type: 'GET_CATALOG_ITEMS',
        payload: {
            items: catalogItems,
            settings: catalogSettings
        }
    }
}