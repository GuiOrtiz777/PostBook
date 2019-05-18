import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import PageHeader from './PageHeader/index';
import Post from './Post/index';





class App extends Component {

  
    state = {
        posts: [
            {
            id: 1,
            name: 'Hernandes Gonzales',
            avatar: 'data:image/jpeg;base64,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',
            time: 'há 5 min',
            body:
                ' Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
            },
            {
            id: 2,
            name: 'Ganso',
            avatar: 'https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG',
            time: 'há 30 min',
            body:
                'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
            },
        ],
    };

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <Fragment>
                <PageHeader>RocketBook</PageHeader>
                {this.state.posts && this.state.posts.map(post => <Post key={post.id} data={post} />)}
            </Fragment>
        )
    };
}

render(<App />, document.getElementById('app'));

