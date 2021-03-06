import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div
        style={{
          background: 'linear-gradient(-45deg,#fff, #8e44ad',
          padding: 20,
        }}
      >
        <div className='container' style={{ marginTop: 130 }}>
          <Link to='/posts' className='btn btn-outline-warning'>
            Back
          </Link>
          <PostItem post={post} showActions={false} />

          <CommentForm postId={post._id} />

          <div>
            {post.comments.map(comment => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
