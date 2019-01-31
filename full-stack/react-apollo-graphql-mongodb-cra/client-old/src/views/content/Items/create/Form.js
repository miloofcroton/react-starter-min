import React from 'react';
// import { Field, reduxForm } from 'redux-form';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorMessage from '../../../lib/Error';


const ItemForm = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <Field name="description" component="input" type="text" />
      </div>
      <button type="submit">Create new item</button>
    </form>
  );
};

const Indexed = reduxForm({ form: 'items' });

export default Indexed(ItemForm);
