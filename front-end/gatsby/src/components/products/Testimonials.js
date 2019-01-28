import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()}>
        {testimonial.quote}
        <br />
        <cite> – {testimonial.author}</cite>
      </article>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
