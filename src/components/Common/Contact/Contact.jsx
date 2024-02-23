// Css
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container_contact">
        <div className="contact_image">
          <img src="src\assets\images\photo\Astronaut.gif" alt="astrounaut" />
        </div>
        <div className="contact_description">
          <h1>Entre em contato!</h1>
          <span>
            Tenho aprofundado os meus estudos em desenvolvimento de experiências
            e estou sempre em busca de novos desafios. Caso queira conversar,
            tirar dúvidas, propor um projeto ou apenas dizer oi, a minha caixa
            de entrada está sempre aberta. Farei o possível para responder!
          </span>
          <div className="contact_buttons">
            <a href="#contact" className="btn_more_about">
              Email
            </a>
            <a href="#contact" className="btn_more_about">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <a href="#">
        <div className="scroll"></div>
      </a>
    </section>
  );
};

export default Contact;
