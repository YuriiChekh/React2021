export default function User(props) {
    let{items}=props
        return(
            <div>
                {items.id}-{items.name}
            </div>
            )
  }