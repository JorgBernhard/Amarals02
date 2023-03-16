import Prepair from '../../assets/kitchen.png';
import Decor from '../../assets/Decor.png';
import Chef from '../../assets/Chefe.png';
import Fisch from '../../assets/Fisch.png';
import './restaurant.css';

function Restaurant() {
  return (
    <div id='restaurant'>
    <div className="Restaurant">
      <div className="RestaurantContainerOben">
        <h3 className="Willkommen">Willkommen bei Amarals Internationaler Küche</h3>
        <h4 className="Explore">Explore the world through an eclectic fine-dining degustation menu & 1920’s inspired cocktail bar.</h4>
        <div className="Fotos">
        <img className="Prepair" src={Prepair} alt="prepair" />
        <img className="Chef" src={Chef} alt="chef" />
        <img className="Fisch" src={Fisch} alt="Fisch" />
        <img className="Decor" src={Decor} alt="Decor" />

        </div>
      </div>
      <div className="RestaurantContainerUnten">
     
      </div>
      </div>
    </div>
  );
}

export default Restaurant;
