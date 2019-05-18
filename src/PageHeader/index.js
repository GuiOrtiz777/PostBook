import React from 'react';

import { Header, H1 } from './style';

const PageHeader = (props) => (
    <Header>
        <H1>{props.children}</H1>
    </Header>
);

export default PageHeader;