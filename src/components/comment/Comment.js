export default function Comment(props) {
    let{items}=props
        return(
            <div>
                {items.id}-{items.body}
            </div>
            )
  }