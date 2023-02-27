import './story.css';
import React, { useState, useEffect } from 'react';

export const TestimonialSlider = () => {
   const [testimonials, setTestimonials] = useState([
     {
       name:'pushpalatha a',
       message: 'great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred.',
     },
     {
         name:'jagadeeswar reddy singam',
       message: 'this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"',
     },
     {
     name:"ranesh bhattacharya",
       message: 'i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that s really cool. thanks for all the awesomeness. keep inventing !!.',
     }
   ]);
 
   const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
 
   const incrementIndex = () => {
     setActiveTestimonialIndex(activeTestimonialIndex === testimonials.length - 1 ? 0 : activeTestimonialIndex + 1);
   };
 
   useEffect(() => {
     const interval = setInterval(incrementIndex, 3000);
     return () => clearInterval(interval);
   }, [activeTestimonialIndex]);
 
   return (
     <div className="testimonial-slider" style={{textAlign:"center",padding:"0px 10rem"}}>
       <div className="testimonial">
         <div className="testimonial-details">
           <p>{testimonials[activeTestimonialIndex].message}</p>
           <h3>{testimonials[activeTestimonialIndex].name}</h3>
         </div>
       </div>
     </div>
   );
 };

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
      <p style={{marginTop:"-12rem",color:"white",paddingBottom:"5rem",marginLeft:"10rem;",marginRight:"10rem"}}>
           <TestimonialSlider />
         </p>
     </div>
    );
}
export default Story;