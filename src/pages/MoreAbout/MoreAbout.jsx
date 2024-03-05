import React from "react";
import Background from "../../components/Common/Background/Background";

import "./MoreAbout.css";
import TechStack from "../../components/Common/About/Techstack";

const MoreAbout = () => {
  return (
    <div>
      <Background></Background>
      <section className="about_me">
        <div className="container_about_me">
          <img
            className="photo"
            src="src\assets\images\photo\profile_image.jpg"
            alt="profile_image"
          />
          <p className="text">
            Sou formado em Automação Industrial, trabalhei dois anos como
            Projetista Mecânico e Analista Financeiro. Atualmente atuo como
            freelancer, oferecendo soluções completas em sistemas integrados,
            desktop, sistemas web, design gráfico e edições de vídeo. Costumo me
            esforçar ao máximo para extrair todo meu potêncial criativo enquanto
            estou desenvolvendo, me preocupo principalmente em entregar uma
            experiência agradável e acima de tudo prática ao usuário. Desenvolvo
            todas as etapas do projeto, desde seu rascunho, idealização,
            primeiras linhas de código, até a sua finalização e disponibilização
            para o usuário. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nihil totam vero consequatur consequuntur recusandae.
            Molestiae odit neque, qui impedit magni inventore quasi ullam enim
            todas as etapas do projeto, desde seu rascunho, idealização,
            primeiras linhas de código, até a sua finalização e disponibilização
            para o usuário. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nihil totam vero consequatur consequuntur recusandae.
            Molestiae odit neque, qui impedit magni inventore quasi ullam enim
            placeat
            elit. Nihil totam vero consequatur consequuntur recusandae.
            Molestiae odit neque, qui impedit magni inventore quasi ullam enim
            todas as etapas do projeto, desde seu rascunho, idealização,
            primeiras linhas de código, até a sua finalização e disponibilização
            para o usuário. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nihil totam vero consequatur consequuntur recusandae.
            Molestiae odit neque, qui impedit magni inventore quasi ullam enim
            placeat
          </p>
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
