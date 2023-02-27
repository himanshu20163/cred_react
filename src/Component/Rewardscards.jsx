import './Cards.css';
function Cards(props) {
    return(
     <div className="bills">
        <div className="content" style={{backgroundImage:`url(${props.img})`}}>
            <h2 style={{}}>{props.heading}</h2>
            <h4 >{props.subtitle}</h4>
            <p >{props.para}</p>
            <br/>
            <button className='erwds' style={{}}>{props.btn_title}</button>
        </div>
     </div>
    );
}
export default Cards;