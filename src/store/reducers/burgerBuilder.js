import * as actionTypes from '../actions/actionTypes';
import { updateObject, } from '../../shared/utility';

const initialState = {
    ingredients: {},
    totalPrice: 4,
    error: false,
    building: false,
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

const addIngredient = (state, action) => {
    const addedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1, };
    const addedIngredients = updateObject(state.ingredients, addedIngredient);
    const updatedAddIngredientState = {
        ingredients: addedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
    };
    return updateObject(state, updatedAddIngredientState);
};

const removeIngredient = (state, action) => {
    const removedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1, };
    const removedIngredients = updateObject(state.ingredients, removedIngredient);
    const updatedRemovedIngredientState = {
        ingredients: removedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
    };
    return updateObject(state, updatedRemovedIngredientState);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            meat: action.ingredients.meat,
            cheese: action.ingredients.cheese,
            bacon: action.ingredients.bacon,
        },
        totalPrice: 4,
        error: false,
        building: false,
    });
};

// const fetchIngredientsFailed = state => updateObject(state, { error: true });
const fetchIngredientsFailed = (state, action) => {
    updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            // return fetchIngredientsFailed(state);
            return fetchIngredientsFailed(state, action);
        default:
            return state;
    };
};

export default reducer;