import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ThingForm = ({ handleSubmit }) => {

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
      <button type="submit">Create new thing</button>
    </form>
  );
};

const Indexed = reduxForm({ form: 'things' });

export default Indexed(ThingForm);
