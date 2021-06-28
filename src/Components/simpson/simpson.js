import './simpson.css'


export default function Simpson ({item: { name, surname, photo, info}}) {

    // let{item:name, surname, photo, info}=props;
    let c1 = 'target';
    let c2 = 'point'
    let clslist =['jack','black','door'];
    return(

        <div class={c1 + ' ' +c2}>
            <h2 className={clslist.join(' ')}>{name}{surname}</h2>
            <img src={photo} alt=""/>
            <div>{info}</div>
        </div>
    )
}
