

function History(props) {
    return (
        <>
            <div>
                <h2>History:</h2>
                <ul>
                    {props.history.map((data, idx) => {
                        return (
                            <>
                                <li key={idx} onClick={() => props.activeResult(data.results)}>{data.method} \ {data.url}</li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default History;