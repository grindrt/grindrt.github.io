import React from 'react';
import PropTypes from 'prop-types';

class Item ({item, remove}) => (
  <div>
    <p>By: <em>{item.author}</em></p>
    <p>{item.text}</p>
    <button onClick={(e) => remove(item._id)}>Delete</button>
  </div>
);

Item.items = {
  item: PropTypes.object,
  remove: PropTypes.func
};

export default Item;
