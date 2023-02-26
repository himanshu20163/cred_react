import './footer.css';
function Footer(props) {
    return(
        <div style={{backgroundColor:"#D3D3D3"}}>
            <span style={{padding:"10px",textAlign:"left"}}>
            <h3 style={{marginLeft:"10rem",marginRight:"10rem"}}>{props.heading}</h3>
            <p style={{marginLeft:"10rem",marginRight:"10rem"}}>{props.para}</p>
            <br/>
            </span>  
        </div>
    );
}
function Main_Footer() {
    return(
        <div >
            <div style={{backgroundColor:"lightgray",marginTop:"-10px"}}>
            <hr style={{marginLeft:"10rem",marginRight:"10rem"}}/>
            <p style={{marginLeft:"10rem",marginRight:"10rem"}}>
            <b>calculators</b>:SIP calculatorEMI calculatorPPF calculatorhome loan calculatorcar loan calculatorfixed deposit calculatorrecurring deposit calculatorsimple loan calculatorcompound interest calculator
<br/><br/><b>credit card bill payment</b>:American Express Standard Chartered HSBC HDFCICICISBI AXISRBLPNBYES Bank
            </p>
            </div>
           
        </div>
    )
}
export {Footer,Main_Footer};