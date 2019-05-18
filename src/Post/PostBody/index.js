import React from 'react';

import { PostText } from './style';

const PostBody = props => (
    <div>
        <PostText>{props.body}</PostText>
    </div>
);

export default PostBody;
