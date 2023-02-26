import './Cards.css';
function Cards(props) {
    return(
     <div className="bills">
        <div className="content" style={{backgroundImage:`url(${props.img})`}}>
            <h2 style={{marginTop:"5rem",marginLeft:"7rem",fontSize:"64px",color:"white",width:"55%"}}>{props.heading}</h2>
            <h4 style={{marginTop:"-2rem",marginLeft:"7rem",fontSize:"24px",color:"white",width:"45%"}}>{props.subtitle}</h4>
            <p style={{marginTop:"1rem",marginLeft:"9rem",fontSize:"14px",color:"white",width:"45%",fontWeight:"bold",textAlign:"justify"}}>{props.para}</p>
            <button className='erwds' style={{width:"auto",padding:"20px"}}>{props.btn_title}</button>
        </div>
     </div>
    );
}
export default Cards;