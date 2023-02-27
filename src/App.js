import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Rewards from './Component/First_part';
import Mobile_shorts from './Component/Allmobilesimages';
import Cards  from './Component/Rewardscards';
import Brand from './Component/Brand';
import Banner from './Component/Banner';
import Story from './Component/Story';
import {Footer,Main_Footer,Lastfooter}  from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Rewards />
      <Mobile_shorts />
      <Cards heading = "feel special more often." img="https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg"
      subtitle="exclusive rewards for paying your bills" para="every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good." 
      btn_title="Explore Rewards"
      />
      <Brand img="https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png"/>
      <Cards heading = "we take your money matters seriously." img="https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg"
      subtitle="so that you don’t have to." para="never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always." 
      btn_title="Experience the upgrade"
      />
      <Banner />
      <Cards heading = "security first. and second." img="https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg"
      subtitle="what’s yours remains only yours." para="CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any." 
      btn_title="Become a member"
      />
      <Story />
      <div className='app_footer' style={{marginTop:"-5rem",paddingBottom:"5rem"}}>
      <Footer heading="about CRED" para="CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED."/>
      <Footer heading="how does CRED reward their users?" para="CRED partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit card bill payment cycle."/>
      <Footer heading="how to earn rewards on CRED?" para="members can earn rewards in two different ways. CRED coins & gems.

CRED Coin Rewards:

- when you pay your credit card bill on CRED, for every rupee cleared on your bill you earn a CRED coin.

- you can then use earned CRED coins to claim exclusive rewards from different brands.

CRED Gem Rewards:

- for every person that you refer to CRED who makes a bill payment, you earn 10 gems." />

<Footer heading="what do you get as a CRED Member?" para="as a CRED member, you instantly make your credit card payment experience hassle-free by unlocking several perks only available to CRED members.

- seamless bill payment experience through modes like upi, net banking and debit cards

- timely credit card bill payment reminders

- automate your credit card bill payments

- expose hidden charges on your credit card with cred protect

- get real-time alerts on duplicate transactions on your credit card

- manage multiple credit cards on a single portal

- keep a realtime check on your credit score" />
<Main_Footer />
<Lastfooter />
      </div>
      
    </div>
  );
}

export default App;
