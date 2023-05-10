import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/Styles/Styled-pages/InfoPage-style.css";

const Legal = () => {
  return (
    <div className="Info">
      <Header />
      <div className="Central-info">
        <div className="Card-info">
          <h1>Sobre AdventureRallyForum</h1>
          <p>
            Bienvenidos y bienvenidas. Esta página web se ha creado para reunir
            a los amantes del offroad.
          </p>
          <p>
            Construida por byNach, aficionado al trail y desarrollador web,
            reune la información relativa a los diferentes eventos alrededor del mundo, un buscador para poder filtrar-los según el país, el tipo de
            vehículo, el tipo de navegación, etc... y también poder tener un
            lugar común para comentar sobre los própios eventos y todo lo que
            los rodea (pilotos, navegación, preparación).
          </p>
          <p>Poneros el casco, los guantes y nos vemos por allí fuera.</p>
        </div>
        <div className="Card-info">
          <h1>Legal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ea.
            Veritatis ducimus earum asperiores excepturi labore odit eveniet,
            consequatur dolorem commodi tempore tempora cumque accusantium eius,
            itaque, architecto ea fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            recusandae consectetur nobis quae molestias modi ea consequatur
            totam saepe aliquid dolores, deleniti provident aut animi
            exercitationem labore at excepturi non.
          </p>
        </div>
        <div className="Card-info">
          <h1>Contacto</h1>
          <div className="Contact-box">
            <div className="Mail-box"></div>
            <div className="LinkedIn-box"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;
