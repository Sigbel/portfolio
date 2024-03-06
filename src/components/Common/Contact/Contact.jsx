// Css
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container_contact">
        <div className="contact_image">
          <img src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1709732537/images/photo/frha4ifj66eklt1xwsid.gif" alt="astrounaut" />
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
            <a href="mailto:hb.belgamo@gmail.com" className="btn_more_about">
              Email
            </a>
            <a href="https://www.linkedin.com/in/henrique-belgamo/" target="_blank" className="btn_more_about">
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
