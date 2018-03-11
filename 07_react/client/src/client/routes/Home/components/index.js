import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = props => (
  <div className='home'>
    {props.user
      ? <Fragment>
          <h2 className='home__welcome'>Hi, {props.user.name}!</h2>
          <Link className='home__join-us' to='/feed'>Feed</Link>
        </Fragment>
      : <Fragment>
          <h2 className='home__welcome'>Hi, there!</h2>
          <Link className='home__join-us' to='/signup'>Register</Link>
        </Fragment>
    }

  </div>
);

export default Home;
