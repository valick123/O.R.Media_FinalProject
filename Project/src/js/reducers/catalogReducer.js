const initialState = {
    catalogItems: [],
    formSettings: {},
    basketList: [],
    selectedProduct: {},
    searchResult: []
}
export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATALOG_ITEMS':
            return { ...state, catalogItems: action.payload.items, formSettings: action.payload.settings }
        case 'ADD_TO_BASKETLIST':
            return { ...state, basketList: [...state.basketList, action.payload] }
        case 'DELETE_FROM_BASKET':
            state.basketList.splice(action.payload, 1);
            return { ...state, basketList: [...state.basketList] }
        case 'SET_PRODUCT_PAGE_INFO':
            return { ...state, selectedProduct: action.payload }
        case 'GET_SEARCH_RESULT':
            return { ...state, searchResult: action.payload }
        default: return state
    }

}