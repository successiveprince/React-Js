
function Message(){
    //JSX : JavaScript XML

    const name = 'Prince';
    if(name)
        return <h1>Hello {name}</h1>
    else
        return <h1>Hello Devs</h1>
}

export default Message;