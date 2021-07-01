import Post from "../post/Posts"
export default function Posts(props) {
    let {items}= props;
    console.log(items);
    return(
            <div>
                {
                    items.map(p=><Post key={p.id} item={p}/>)
                }

            </div>
            )
  }