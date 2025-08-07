function Todo(props){
    const todo = props.todo;
    if(!todo || todo.length ===0){
        return(
            <h3>The list is empty</h3>
        );
    }
    else{
        return(
            <div>
                <ul>
                    {todo.map((task,index)=>{
                        return(<li key={index}>{task}</li>)
                    })}
                </ul>
            </div>
        );
    }

}

export default Todo;