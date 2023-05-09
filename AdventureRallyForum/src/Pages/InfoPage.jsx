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
            Bienvenidos y bienvenidas. Esta página web se ha creado para los amantes del offroad. 
          </p>
          <p>Construida por byNach, desarrollador web y aficionado al trail, reune la información realativa a los diferentes eventos, filtrarlos, y también poder tener un lugar de reunión (el foro) para comentar sobre los mismos y lo que los rodea (pilotos, navegación, preparación).</p>
        </div>
        <div className="Card-info">
          <h1>Legal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ea.
            Veritatis ducimus earum asperiores excepturi labore odit eveniet,
            consequatur dolorem commodi tempore tempora cumque accusantium eius,
            itaque, architecto ea fuga!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam recusandae consectetur nobis quae molestias modi ea consequatur totam saepe aliquid dolores, deleniti provident aut animi exercitationem labore at excepturi non.</p>
        </div>
        <div className="Card-info">
          <h1>Contacto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            recusandae unde cumque sunt ipsam corporis ipsum est vero ducimus!
            Esse aspernatur omnis vitae voluptatum veritatis sed ad aut ipsam
            architecto.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;
