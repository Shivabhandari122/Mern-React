function Button(hello){
    return(
        <button style = {{backgroundColor: 'green', color: 'white', padding: '20px'}}>{hello.text}{hello.num}</button>

    )
}
export default Button