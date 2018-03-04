import React from 'react';
import PropTypes from 'prop-types';

import http from '../../http';
import { API_BLOGS } from '../../api';

export default class AddBlog extends React.Component {
  postBlog = (blogFormData) => {
    const data = {};
    blogFormData.forEach((value, key) => { data[key] = value; });
    http.post(API_BLOGS, data)
      .then(() => this.props.getBlogs())
      .catch(e => console.error(e));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(this.blogForm);
    this.postBlog(data);
  };

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        ref={(blogForm) => { this.blogForm = blogForm; }}
      >
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">Add record</span>
            <input type="text" name="title" placeholder="Title" className="form-control" />
            <input type="text" name="author" placeholder="Author" className="form-control" />
            <span>
              <input type="text" name="description" placeholder="Description" className="form-control" />
            </span>
            <button className="btn btn-outline-secondary" type="submit">Add record</button>
          </div>
        </div>
      </form>
    );
  }
}

AddBlog.propTypes = {
  getBlogs: PropTypes.func.isRequired,
};
