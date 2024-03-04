import React from "react";
import Background from "../../components/Common/Background/Background";
import MoreProjects from "../../components/Common/MoreProjects/MoreProjects";

import { DiMysql } from "react-icons/di";

import "./MoreAbout.css";
import TechStack from "../../components/Common/About/Techstack";

const MoreAbout = () => {
  return (
    <div>
      <Background></Background>
      <section className="about_me">
        <div className="container_about_me left">
          <div className="description">
            <span>
              Sou formado em Automação Industrial, trabalhei 2 anos como
              Projetista Mecânico e Analista Financeiro. Atualmente atuo como
              freelancer, oferecendo soluções completas em sistemas integrados,
              desktop, sistemas web, design gráfico e edições de vídeo.
            </span>
            <span>
              Costumo me esforçar ao máximo para extrair todo meu potêncial
              criativo enquanto estou desenvolvendo, me preocupo principalmente
              em entregar uma experiência agradável e acima de tudo prática ao
              usuário. Desenvolvo todas as etapas do projeto, desde seu
              rascunho, idealização, primeiras linhas de código, até a sua
              finalização e disponibilização para o usuário.
            </span>
            <div className="container_tech"></div>
          </div>
          <div className="photo">
            <img
              src="src\assets\images\photo\profile_image.jpg"
              alt="profile_image"
            />
          </div>
        </div>
        <div className="container_about_me right">
          <div className="description">
            <span>
              Sou formado em Automação Industrial, trabalhei 2 anos como
              Projetista Mecânico e Analista Financeiro. Atualmente atuo como
              freelancer, oferecendo soluções completas em sistemas integrados,
              desktop, sistemas web, design gráfico e edições de vídeo.
            </span>
            <span>
              Costumo me esforçar ao máximo para extrair todo meu potêncial
              criativo enquanto estou desenvolvendo, me preocupo principalmente
              em entregar uma experiência agradável e acima de tudo prática ao
              usuário. Desenvolvo todas as etapas do projeto, desde seu
              rascunho, idealização, primeiras linhas de código, até a sua
              finalização e disponibilização para o usuário.
            </span>
            <span className="highlight_text">
              Desenvolvedor de Software com habilidades diversas:
            </span>
            <div className="container_tech"></div>
          </div>
          <div className="photo">
            <img
              src="src\assets\images\photo\profile_image.jpg"
              alt="profile_image"
            />
          </div>
        </div>
        <div></div>
      </section>
      <section className="experience">
        <div className="row">
          <div className="column">
            <div className="block_title"></div>
            <div className="timeline">
              <div className="timeline_item">
                <h4 className="item_title">SQL e NOSQL</h4>
                <span className="item_period">2022</span>
                <span className="item_small">Geek University</span>
                <ul className="timeline_re">
                  <li>Relacionais (MySQL, PostGreSQL e SQLite)</li>
                </ul>
              </div>
              <div className="timeline_item">
                <h4 className="item_title">SQL e NOSQL</h4>
                <span className="item_period">2022</span>
                <span className="item_small">Geek University</span>
                <ul className="timeline_re">
                  <li>Relacionais (MySQL, PostGreSQL e SQLite)</li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="column">
          <div className="timeline">
              <div className="timeline_item">
                <h4 className="item_title">SQL e NOSQL</h4>
                <span className="item_period">2022</span>
                <span className="item_small">Geek University</span>
                <ul className="timeline_re">
                  <li>Relacionais (MySQL, PostGreSQL e SQLite)</li>
                </ul>
              </div>
              <div className="timeline_item">
                <h4 className="item_title">SQL e NOSQL</h4>
                <span className="item_period">2022</span>
                <span className="item_small">Geek University</span>
                <ul className="timeline_re">
                  <li>Relacionais (MySQL, PostGreSQL e SQLite)</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="technologies">
        <h1>Tecnologias</h1>
        <TechStack></TechStack>
      </section>
    </div>
  );
};

export default MoreAbout;
