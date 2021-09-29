import API from "../../API"
import {fetchPlacesAction} from "./actions";

const api = new API();

export const fetchPlaces = (search) => {
    return async (dispatch) => {
        return api.getPlaces(search)
            .then((places) => {
                dispatch(fetchPlacesAction(places))
            }).catch((error) => {
                alert("Failed to connect API: /places/")
            })
    }
}