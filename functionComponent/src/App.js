import Content from './Content';
import useTitle from './hooks/title';

function App() {

    const changeTitle = useTitle();

    return (
        <Content hello="Hello, World! hahaha" changeTitle={changeTitle} />
    )
}

export default App;