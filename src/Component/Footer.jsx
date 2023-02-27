import './footer.css';
function Footer(props) {
    return (
        <div style={{ backgroundColor: "#D3D3D3" }}>
            <span style={{ padding: "10px", textAlign: "left" }}>
                <h3 style={{ marginLeft: "10rem", marginRight: "10rem" }}>{props.heading}</h3>
                <p style={{ marginLeft: "10rem", marginRight: "10rem" }}>{props.para}</p>
                <br />
            </span>
        </div>
    );
}
function Main_Footer() {
    return (
        <div >
            <div style={{ backgroundColor: "lightgray", marginTop: "-10px", paddingBottom: "2rem" }}>
                <hr style={{ marginLeft: "10rem", marginRight: "10rem" }} />
                <p style={{ marginLeft: "10rem", marginRight: "10rem" }}>
                    <b>calculators</b>:SIP calculatorEMI | calculatorPPF | calculatorhome | loan calculatorcar  | loan calculator fixed deposit | calculator | recurring deposit calculator | simple loan calculator | compound interest calculator
                    <br /><br /><b>credit card bill payment</b>: American Express | Standard Chartered | HSBC  | HDFC | ICICI | SBI | AXIS | RBL | PNB | YES Bank
                </p>
            </div>
        </div>
    )
}
function Lastfooter() {
    return (
        <div >
            <div className='lastft'>
                <div className='left'>
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png' style={{ width: "40%" }}></img>
                    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png' style={{ width: "70%" }}></img>
                    <h2>complete security. no asterisks.</h2>
                    <p>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
                </div>
                <div className='main_right'>
                <div className='right'>
                    <div className='right_first'>
                        <h1>Products </h1>
                        <span>CRED pay</span>
                        <span>credit score </span><span>check</span>
                    </div>
                    <div className='right_second'>
                        <h1>resources </h1>
                        <span>About </span>
                        <span>Career </span><span>IPL</span>
                        <span>customer care</span>
                    </div>
                </div>
                <div className='right'>
                    
                    <div className='right_second'>
                        <h1>articles </h1>
                        <span>blogs </span>
                        <span>calculators </span><span>credit card payment guide</span>
                        <span>credit score guide</span>
                    </div>
                    <div className='right_first'>
                        <h1>Products </h1>
                        <span>CRED pay</span>
                        <span>credit score </span><span>check</span>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    );
}
export { Footer, Main_Footer, Lastfooter };