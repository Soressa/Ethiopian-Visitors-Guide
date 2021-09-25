import { createSelector } from "reselect";

const postsSelector = (state) => state.posts;

export const getPlaces = createSelector(
    [postsSelector],
    state => state.list
);