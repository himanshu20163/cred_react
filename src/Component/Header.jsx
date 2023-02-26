import './Header.css';
function Header() {
  return(
    <div className="header">
        <div className="logo">
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" height="50px;" width="40px;">
            </img>
        </div>
        <div className="menu">
          <h4>credit score check</h4>
          <h4>CRED pay</h4>
        </div>
    </div>
  ); 
}
export default Header;