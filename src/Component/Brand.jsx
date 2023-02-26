import './brand_items.css';
function Brand(props) {
    return(
      <div className='brand'>
        <h2>rewards from the brands you love</h2>
        <div className="brand_logo">
            <img src={props.img} style={{width:"90%",height:"80%"}}></img>
        </div>
      </div>
    );
}
export default Brand;