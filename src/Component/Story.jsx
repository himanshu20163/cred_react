import './story.css';
function Story() {
    return(
     <div className="story">
        <div className='first_part'>
            <h1>The story of <br/>
CRED begins<br/>
with trust.</h1>
<p>Trust as a virtue has consistently played an essential role in every great human achievement. and consistently, its importance has been overlooked. not just by individuals, but by entire societies. we felt it was time someone gave it the spotlight it deserves. especially for the ones who live by this virtue: the trustworthy.
so we thought of creating a system that rewards its members for doing good and being trustworthy. this way, trust as a virtue becomes something to aspire to, just the way it should be. then we went one step ahead: we built it. we know we are on the right track because here you are.
if you make it to CRED, congratulations and welcome. we have a lot of things planned for you.</p>
        </div>
      <div className='second_part'>
         <div className='app'>
            <h2>4.8 app store</h2>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png' style={{width:"20%",height:"20px",paddingBottom:"50px"}}></img>
            <button style={{width:"50%",color:"black"}}><img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" style={{width:"30px"}}></img>Download the app</button>
         </div>
         <div className='playstore'>
             <h2>4.7 play store</h2>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png' style={{width:"20%",height:"20px",paddingBottom:"50px"}}></img>
            <button style={{width:"50%",color:"black"}}><img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" style={{width:"30px"}}></img>Download the app</button>
         </div>
        
      </div>
      <p style={{marginTop:"-5rem",color:"white",}}>
         "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"

           <center>ranesh bhattacharya</center>
         </p>
     </div>
    );
}
export default Story;