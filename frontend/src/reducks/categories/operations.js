import API from "../../API"
import {fetchCategoriesAction, addCategoryAction} from "./actions";

const api = new API();

export const fetchCategories = () => {
    return async (dispatch) => {
        return api.getCategories()
            .then((categories) => {
                dispatch(fetchCategoriesAction(categories));
            }).catch((error) => {
                alert("Failed to connect API: /categories/");
            });
    };
};