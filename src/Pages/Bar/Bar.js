import Drink from "../../assets/Mohito.png";
import './bar.css';

function Bar() {
  return (
    <div id='bar'>
    <div className="Bar">
      <div className="BarContainerOben">
        <h2 className="Herzlich">Sei Herzlich Willkommen</h2>
        <div className="Bar01">
          <h3 className="Garantierter">Garantierter Erfolg</h3>
          <h4 className="GarantiertText">Caipirinha ist so populär geworden, weil es einfach erfrischend 
          ist und diesen Vitamin-C Kick gibt. Caipirinha fließen in fast allen Bars und Restaurants dieser 
          Welt. Und das Ansehen des Caipirinha-Cocktails wächst stetig weiter: Bereits jetzt steht es auf 
          der offiziellen Getränkekarte der renommierten International Bartenders Association (IBA), die 
          1951 in England gegründet wurde. <br></br><br></br>Durch die Verwendung von anderen Früchten, 
          entstehen laufend neue Mischungen von Aromen und Abwandlungen des Caipirinha-Drinks.</h4>
        </div>
        <div className="Bar02">
          <h3 className="Garantierter2">Geschmack</h3>
          <h4 className="GarantiertText2">Das Originalrezept besteht aus Cachaça, Limão und Açúcar (Zuckerrohr). 
          Klingt einfach, oder? Ganz so ist es leider nicht. Beim Mischen dieser drei Zutaten muss das richtige 
          Verhältnis getroffen werden, um den Geschmack der Aromen auszubalancieren. Ansonsten verliert das 
          Getränk die angenehme und typische Essenz von Caipirinha.</h4>
        </div>
        <div className="Bar03">
          <img className='Drink' src={Drink}  alt="drink" />
        </div>
        <div className="Bar04">
          <h3 className="Garantierter4">Gourmet Caipirinha</h3>
          <h4 className="GarantiertText4">Es ist eine wahre Kunst aus Früchten und anderen Zutaten Gourmet-Caipirinhas 
          herzustellen. Verzaubern Sie Ihre Gäste mit unserem hochprozentigen, fruchtigen Klassiker und genießen 
          Sie Ihre Feier in vollen Zügen. Selbstverständlich bieten wir auch andere kühle Alternativen und 
          übernehmen den allgemeinen Barservice mit Bier-, Wein- und alkoholfreien Getränken.</h4>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Bar;
