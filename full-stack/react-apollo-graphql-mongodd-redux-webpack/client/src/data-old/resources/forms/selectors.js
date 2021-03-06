import { getFormValues } from 'redux-form';

export const getThingsForm = state => getFormValues('things')(state);

export const getItemsForm = state => getFormValues('items')(state);

export const getSignupForm = state => getFormValues('signup')(state);
