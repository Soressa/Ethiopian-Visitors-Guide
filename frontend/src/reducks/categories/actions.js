export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const fetchCategoriesAction = (categories) => {
    return {
        type: FETCH_CATEGORY,
        payload: categories
    }
}