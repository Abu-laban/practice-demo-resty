import React from 'react';
import Content from './Content';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTitle = (title) => {
        document.title = title;
    }

    render() {
        return (
            <Content hello='hello world!' changeTitle={this.changeTitle} />
        );
    }
}

export default App;