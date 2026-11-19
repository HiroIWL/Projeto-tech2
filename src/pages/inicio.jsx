import { Link } from "react-router-dom";
import iconeConexao from "../assets/imgs/icone-conexao.png";
import heroCidade from "../assets/imgs/hero-cidade.png";
import botaoSolucao from "../assets/imgs/botao-solucao.png";
import Terminal from "../components/terminal";

const paragrafos = [
  "Para quem vive em uma comunidade remota, uma emergência de saúde pode significar horas, ou até dias, de viagem até o atendimento mais próximo.",
  [
    { t: "Tendo em vista que mais de 196 povos indígenas isolados vivem hoje sem contato permanente com a sociedade, a principal ameaça à saúde das comunidades isoladas é a " },
    { t: "vulnerabilidade imunológica a doenças infecciosas trazidas de fora", c: "destaque-ciano" },
    { t: ", que podem causar epidemias devastadoras e dizimar grupos inteiros em pouco tempo." },
  ],
  [
    { t: "A pergunta que faço a você é: " },
    { t: "“O que você faria se o posto de saúde mais próximo ficasse a horas de distância e a internet não chegasse até você?”", c: "destaque-rosa" },
  ],
  "Claro que muitas aldeias têm uma Starlink, mas imagine ter internet na sua comunidade e, ainda assim, não saber quantas horas de viagem separam você do atendimento de saúde. A conexão chegou. A informação para decidir, não.",
  "O Projeto tech, por meio da tecnologia, leva orientação de saúde e acesso a serviços para quem vive longe dos centros urbanos.",
];

function Inicio() {
  return (
    <div className="inicio">
      <header className="inicio__topo">
        <h1 className="inicio__titulo">
          Saúde e direitos ao alcance de quem vive longe
        </h1>
        <p className="inicio__subtitulo">
          Orientação de saúde e acesso a serviços, mesmo com internet limitada
        </p>
        <img className="inicio__icone" src={iconeConexao} alt="" />
      </header>

      <Terminal paragrafos={paragrafos} velocidade={20}>
        <Link className="botao-solucao" to="/solucao">
          <img src={botaoSolucao} alt="Testar a simulação" />
        </Link>
      </Terminal>

      <img className="inicio__cidade" src={heroCidade} alt="" />
    </div>
  );
}

export default Inicio;