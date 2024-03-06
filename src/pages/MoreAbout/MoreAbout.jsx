// Styles
import "./MoreAbout.css";

// Components
import Background from "../../components/Common/Background/Background";
import TechStack from "../../components/Common/Techstack/Techstack";

const MoreAbout = () => {
  return (
    <div>
      <Background></Background>
      <section className="about_me">
        <div className="container_about_me">
          <div className="column_about_photo">
            <h1>Sobre mim</h1>
            <img
              className="photo"
              src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1709732536/images/photo/een3qruu65vsmt6yhoni.jpg"
              alt="profile_image"
            />
          </div>
          <div className="column_about_description">
            <div className="about_me_description">
              <h1>Olá, sou o Henrique!</h1>
              <p className="text">
                Um entusiasta apaixonado por tecnologia, sempre em busca das
                últimas novidades e tendências do mundo digital. Busco
                compreender a diversidade de formas as quais a tecnologia
                influencia nossa vida contidiana, estou sempre explorando novas
                maneiras de usar a inovação para criar um impacto positivo. Com
                uma mente curiosa e um amor pela aprendizagem contínua, estou
                sempre pronto para mergulhar de cabeça em novos desafios e
                encontrar soluções criativas para qualquer problema.
              </p>
              <p className="text">
                Sempre encarei a programação como uma parte indispensável da
                minha vida. Me tornei tecnólogo em Automação Industrial pois
                buscava compreender o funcionamento da indústria em relação à
                fabricação dos produtos os quais utilizamos diariamente. Foi
                assim que descobri minha paixão por ser um desenvolvedor: alguém
                que busca resolver problemas com assertividade e criatividade.
              </p>
            </div>
            <p className="phrase">
              "Faça ou não faça. Tentativa não há" <br></br>- Yoda, Mestre
            </p>
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="row">
          <div className="column">
            <div className="block">
              <div className="block_title">Educação e Soft-Skills</div>
              <div className="timeline">
                <div className="timeline_item">
                  <h4 className="item_title">Programação em Python</h4>
                  <span className="item_period">2022</span>
                  <span className="item_small">Geek University</span>
                  <ul className="timeline_re">
                    <li>Orientação a Objetos</li>
                    <li>Python Concorrente e Assíncrono</li>
                    <li>Testes</li>
                    <li>Multiprocessamento</li>
                    <li>Cython</li>
                  </ul>
                </div>
                <div className="timeline_item">
                  <h4 className="item_title">Programação em JavaScript</h4>
                  <span className="item_period">2022</span>
                  <span className="item_small">Geek University</span>
                  <ul className="timeline_re">
                    <li>Orientação a Objetos</li>
                    <li>Manipulação de DOM</li>
                    <li>JavaScript ES6+</li>
                    <li>JavaScript Assíncrono</li>
                  </ul>
                </div>
                <div className="timeline_item">
                  <h4 className="item_title">SQL e NOSQL</h4>
                  <span className="item_period">2022</span>
                  <span className="item_small">Geek University</span>
                  <ul className="timeline_re">
                    <li>Relacionais (MySQL, PostGreSQL e SQLite)</li>
                    <li>
                      Não Relacionais (MongoDB, CouchDB, Redis e Firebase)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="block">
              <div className="block_title">Tragetória Profissional</div>
              <div className="timeline">
                <div className="timeline_item">
                  <h4 className="item_title">Full-Stack Developer</h4>
                  <span className="item_period">2020 - Atual</span>
                  <span className="item_small">Freelancer</span>
                  <ul className="timeline_re">
                    <li>Aplicações para Desktop</li>
                    <li>Manipulações de Banco de Dados</li>
                    <li>Teste e Melhorias de Performance</li>
                    <li>Aplicações Web</li>
                  </ul>
                </div>
                <div className="timeline_item">
                  <h4 className="item_title">Web Designer</h4>
                  <span className="item_period">2022 - Atual</span>
                  <span className="item_small">Freelancer</span>
                  <ul className="timeline_re">
                    <li>Designs Responsivos (HTML5 e CSS3)</li>
                    <li>Designs Dinâmicos (JavaScript)</li>
                    <li>Consumo de APIs</li>
                  </ul>
                </div>
                <div className="timeline_item">
                  <h4 className="item_title">Edição</h4>
                  <span className="item_period">2015 - Atual</span>
                  <ul className="timeline_re">
                    <li>Edição de Vídeos (Sony Vegas)</li>
                    <li>Edição de Imagens (Photoshop, Illustrator)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="technologies">
        <div className="title">
          <h1>Tecnologias</h1>
        </div>
        <div className="container_title">
          <h1>Linguagens</h1>
        </div>
        <div className="container_skills">
          <TechStack type="languages"></TechStack>
        </div>
        <div className="container_title">
          <h1>Bibliotecas e Frameworks</h1>
        </div>
        <div className="container_skills">
          <TechStack type="lib-framework"></TechStack>
        </div>
        <div className="container_title">
          <h1>Bancos de Dados</h1>
        </div>
        <div className="container_skills">
          <TechStack type="data_banks"></TechStack>
        </div>
        <div className="container_title">
          <h1>Plataformas</h1>
        </div>
        <div className="container_skills">
          <TechStack type="platforms"></TechStack>
        </div>
      </section>
    </div>
  );
};

export default MoreAbout;
