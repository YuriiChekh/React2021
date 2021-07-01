export default function User(props) {
    let {item, selectuser}=props
        return(
            <div>
                {item.id} - {item.name}
                - <button onClick={() =>{
                selectuser(item.id)
            }
            }>Click me</button>
            </div>
        )
  }