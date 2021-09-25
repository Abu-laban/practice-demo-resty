import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            requestParams: {},
        };
    }

    callApi = async (requestParams, apiData) => {
        // mock output
        const data = {
            count: apiData.data.count,
            headers: apiData.headers,
            results: apiData.data.results,
        };
        console.log(data);
        this.setState({ requestParams, data });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div data-testid='method'>Request Method: {this.state.requestParams.method}</div>
                <div data-testid='url'>URL: {this.state.requestParams.url}</div>
                <Form handleApiCall={this.callApi} />
                <Results data={this.state.data} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
