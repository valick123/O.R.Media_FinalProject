const initialState = {
    productList: [],
    categoryList: [],
    formSettings: {}
}
export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATALOG_SETTINGS':
            return { ...state, productList: action.payload.products, categoryList: action.payload.category, formSettings: action.payload.settings };
        case 'ADD_PRODUCT_TO_CATALOG':
            return { ...state, productList: [...state.productList, action.payload] }
        case 'DELETE_PRODUCT_FORM_CATALOG':
            state.productList.forEach((item, index) => {
                if (item.id == action.payload) {
                    state.productList.splice(index, 1)
                }
            })
            return { ...state, productList: [...state.productList] }
        default: return state
    }
}