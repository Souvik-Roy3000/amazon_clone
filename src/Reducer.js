export const initialState = {
    basket: [],
};

export const BasketTotalAmount = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id === action.id
            );
            let newbasket = [...state.basket];
            if (index >= 0) {
                newbasket.splice(index, 1);
            }
            else {
                console.warn(`cant remove product (id:${action.id} as its not in the basket)`);
            }
            return {
                ...state,
                basket: newbasket
            }
        default:
            return state;
    }
};
export default reducer;
