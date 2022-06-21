function Characters(props) {
    let {name, desk, foto} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>{desk}</p>
            <img src={foto} alt={name}/>
        </div>
    )
}





export default Characters;
