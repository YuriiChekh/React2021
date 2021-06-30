export  default  function Post({item}){
    return(
        <div>
           <h2> {item.title}</h2>
           <p>{item.body}</p>
        </div>
    )
}