import Logo from '../../assets/Amarals.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/Instagram.png';
import Blog from '../../assets/blogger.png';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className="HeaderContainer">
      <a className="Logo" href='#main'><img className="AmaralLogo" src={Logo} alt="logo" /></a>
      <div className="HeaderLinks">
            <a className="HeaderMenu" href='#restaurant'>Das Restaurant</a>
            <a className="HeaderBar" href='#bar'>Amaral's Bar</a>
            <a className="HeaderAbout"  href='#uns'>Über Uns</a>
            <a className="HeaderGalery"  href='#galerie'>Foto Galerie</a>
            <a className="HeaderVeranstaltungen" target="_blank" rel="noreferrer" href='https://www.amaralscatering.de/'>Veranstaltungen</a>
            <a className="HeaderReservation"  href='#reservirungen'>Reservierungen</a>
            <a className="HeaderContact"  href='#kontakt'>Kontakt</a>
      </div>
      <div className="HeaderDirections">
          <a className="Facebook" target="_blank" rel="noreferrer" href={"https://www.facebook.com/amaralscatering"} alt="facebook"><img className="Facebook" src={Facebook} alt="Facebook" /></a>
          <a className="Instagram" target="_blank" rel="noreferrer" href={"https://www.instagram.com/amarals.catering/"} alt="Instagram"><img className="Instagram" src={Instagram} alt="instagram" /></a>
          <a className="Blog" target="_blank" rel="noreferrer" href={"https://www.amaralscatering.de/blog/"} alt="Linked"><img className="Blog" src={Blog} alt="blog" /></a>
      </div>
      </div>
    </div>
  );
}

export default Header;
