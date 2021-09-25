import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './app'

function Main() {
    return (
        <>
            <App />
        </>
    );
}
const rootElement = document.getElementById('root');

ReactDOM.render(<StrictMode><Main /></StrictMode>, rootElement)