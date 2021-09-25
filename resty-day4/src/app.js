import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/history';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';


const initialState = {
    data: null,
    requestParams: {},
    history: [],
    activeResult: {},

}

function reducer(state, action) {

    switch (action.type) {
        case 'API_REQUEST':
            return {
                ...state,
                requestParams: action.payload
            };
        case 'ADD_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'ADD_HISTORY':
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case 'ACTIVE_RESULT':
            return {
                ...state,
                activeResult: state.history.filter(
                    (data) => data.results === action.payload
                )[0]
            };
        default:
            return state;
    }
}

function App(props) {

    // const [data, setData] = useState(null);
    // const [requestParams, setRequestParams] = useState({});
    const [state, dispatch] = useReducer(reducer, initialState)

    const callApi = (requestParams) => {
        // mock output
        const action = {
            type: "API_REQUEST",
            payload: requestParams
        }
        dispatch(action)

    }

    function handleHistory() {
        return {
            type: 'ADD_HISTORY',
            payload: {
                url: state.requestParams.url,
                method: state.requestParams.method,
                results: state.data,
            },
        };
    }

    function handleActiveResult(result) {
        const action = {
            type: "ACTIVE_RESULT",
            payload: result,
        };
        dispatch(action);
    }


    useEffect(async () => {
        if (state.requestParams.url) {
            const apidata = await axios({ method: state.requestParams.method, url: state.requestParams.url, body: state.requestParams.body })
            const data = {
                count: apidata.data.count,
                headers: apidata.headers,
                results: apidata.data.results,
            };
            const action = {
                type: 'ADD_DATA',
                payload: data
            }
            dispatch(handleHistory())
            dispatch(action)

        }

        return () => {
            cleanup
        }
    }, [state.requestParams])

    return (
        <React.Fragment>
            <Header />
            {/* <div data-testid='method'>Request Method: {requestParams.method}</div>
            <div data-testid='url'>URL: {requestParams.url}</div> */}
            {state.history.length ? <History history={state.history} activeResult={handleActiveResult} /> : null}
            <Form handleApiCall={callApi} />
            <Results data={state.activeResult} />
            <Footer />
        </React.Fragment>
    );

}

export default App;
