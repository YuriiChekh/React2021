import Post from "../post/Post"
export default function Posts(props) {
    let {items, selectPost}= props;
    console.log(items);
    return(
            <div>
                {
                    items.map(p=><Post key={p.id} item={p} selectPost={selectPost}/>)

                }

            </div>
            )
  }