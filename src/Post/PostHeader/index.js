import React from 'react';
import PropTypes from 'prop-types';

import { Box, Column, Tumbnail, UserName, DatePost } from './style';

const PostHeader = props => (
    <Box>
        <Tumbnail src={props.avatar} alt="avatar"></Tumbnail>
        <Column>
            <UserName>{props.name}</UserName>
            <DatePost>{props.time}</DatePost>
        </Column>
    </Box>
);

PostHeader.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  };

export default PostHeader; 