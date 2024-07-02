import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducers";


//for displaying the error message
const authSelectorFeature = createFeatureSelector<AuthInterface>('auth')

export const errorSelector = createSelector (authSelectorFeature,
    (state) => state.loginErrorMessage
)