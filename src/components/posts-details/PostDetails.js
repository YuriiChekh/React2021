export default function PostDetails(props) {
    let{location:{state}}=props
    console.log(props);
    return(
            <div>
               <p>{state.id}</p>
                <p>{state.title}</p>
                <p>{state.body}</p>
            </div>
            )
  }