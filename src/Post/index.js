import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader/index'
import PostBody from './PostBody/index'
import { Box } from './style';

const Post = props => (
  <Box>
    <PostHeader avatar={props.data.avatar} name={props.data.name} time={props.data.time} ></PostHeader>
    <PostBody body={props.data.body}></PostBody>
  </Box>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;