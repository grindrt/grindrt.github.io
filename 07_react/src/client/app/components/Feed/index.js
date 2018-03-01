import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import SubmitForm from '../SubmitForm';

class Feed extends React.Component {
  static propTypes = {
    fetch: PropTypes.func
  };

  componentWillMount(){
    this.props.fetch();
  }

  onFilterChange = (e) =>{
    this.props.filter(e.target.value);
  }

  renderFeed = () => (
    this.props[this.props.filtering ? 'filtered' : 'posts'].map((item, i) => {
      return <Item item={item} key={i} remove={this.props.remove} />
    })
  )

  render(){
    const {item, createItem} = this.props;
    return(
      <div>
        <h2>Blog app</h2>
        <input type='text' onChange={this.onFilterChange} placeholder='Filter' />
        <SubmitForm createItem={createItem} />
      </div>
    );
  }
}
