export default function CommentDetails(props) {
let {location: {state}} = props
        return(
            <div>
                <p>{state.id}</p>
                <p>{state.name}</p>
                <p>{state.email}</p>
                <p>{state.body}</p>

            </div>
            )
  }