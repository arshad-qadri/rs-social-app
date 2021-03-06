import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div
        style={{
          background: 'linear-gradient(45deg,skyblue,#fff) ',
          minHeight: '100vh',
          padding: '20px 0',
        }}
      >
        <div className='container ' style={{ marginTop: 100 }}>
          <h1 className='text-primary'>Add Posts Here...</h1>
          <p className='lead'>
            <i className='fa fa-user'></i>

            <strong>Welcome User</strong>
          </p>

          <PostForm />

          <div className='posts'>
            {posts.map(post => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
