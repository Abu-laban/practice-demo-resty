import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App(props) {

    const [data, setData] = useState(null);
    const [requestParams, setRequestParams] = useState({});

    const callApi = (requestParams,) => {
        // mock output
        setRequestParams(requestParams)

    }

    useEffect(async () => {
        if (requestParams.url) {
            const apidata = await axios({ method: requestParams.method, url: requestParams.url, body: requestParams.body })
            const data = {
                count: apidata.data.count,
                headers: apidata.headers,
                results: apidata.data.results,
            };
            setData(data)
        }

        return () => {
            cleanup
        }
    }, [requestParams])

    return (
        <React.Fragment>
            <Header />
            <div data-testid='method'>Request Method: {requestParams.method}</div>
            <div data-testid='url'>URL: {requestParams.url}</div>
            <Form handleApiCall={callApi} />
            <Results data={data} />
            <Footer />
        </React.Fragment>
    );

}

export default App;
