export const FETCH_PLACES = "FETCH_PLACE";
export const fetchPlacesAction = (places) => {
    return {
        type: FETCH_PLACES,
        payload: places
    }
}