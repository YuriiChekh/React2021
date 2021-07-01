import User from "../User/User";

export default function Users(props) {
    let {items, selectuser}= props;
    console.log(items);

    return(
        <div>
            {items.map(u=><User key={u.id} item={u} selectuser={selectuser}/>)}
        </div>
    )
}