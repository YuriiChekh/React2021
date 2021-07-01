export default function Posts(props) {
    let{item}=props;
        return(
            <div>
                {item.id} - {item.title}

            </div>
        )
  }