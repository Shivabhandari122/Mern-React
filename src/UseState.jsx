function UseState(){
    var count = 0
    const increaseCount = () =>{
        count ++
    }
    const decreaseCount = () =>{
        count --
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </>
    )
}

export default UseState  