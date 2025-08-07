function Fruits(props){
    const fruit = [{name:"apple",calories:90},
                    {name:"banana",calories:50},
                    {name:"papaya",calories:45},
                    {name:"coconut",calories:30}
    ]
    fruit.sort((a,b)=>a.name.localeCompare(b.name))//CHARACTER SORTING
    //fruit.sort((a,b) => a.calories - b.calories) //NUMARICAL SORTING
    return(
        <>
            <ol>
                {fruit.map((fruit)=>{
                   return( <li >{fruit.name}: &nbsp;
                                {fruit.calories}  </li>);
                })}
            </ol>
        </>
    )
}
export default Fruits;