export default function Header() {
    return(
      <div className="header-background">
        <img className="header-stamp" src="/Stamp.png" />
        <div className="header-contents">
          <span>About</span>
          <span>Integrations</span>
          <span>Pricing</span>
          <span>Contacts</span>
        </div>  
        <img className="header-icon" src="/Icon.png" />
      </div>
    );
}