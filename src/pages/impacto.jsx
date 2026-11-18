import heroCyberpun from "../assets/imgs/hero-cyberpunk.png";
import iconeLista from "../assets/imgs/icone-lista.png";

function Impacto() {
  return (
    <div className="impacto">
      <header className="impacto__topo">
        <h1 className="impacto__titulo">
          Os impactos do Projeto 
        </h1>
        <p className="impacto__subtitulo">
          Os impactos do Projeto tech na vida de quem vive longe dos centros urbanos
        </p>
        <img className="impacto__icone" src={iconeLista} alt="" />
      </header>
      <section className="terminal__conteudo2" aria-label="Apresentação do projeto">
        <div className="terminal__corpo2">
          <p>
            <span className="terminal__prompt2" aria-hidden="true">
              PS C:\WINDOWS\system32&gt;
            </span>{" "}
            A triagem e orientação foi pensada para quem vive a horas ou dias do atendimento mais próximo.
          </p>
          <p>
            Ao indicar o nível de urgência, os cuidados iniciais e o caminho até a unidade de saúde, a ferramenta ajuda a família a decidir com mais segurança e mais cedo.O impacto esperado é reduzir deslocamentos desnecessários e antecipar a busca por atendimento nos casos graves, contribuindo para os ODS 3 e 10.
            </p>
            <p>
            Esse impacto pode ser acompanhado pelo tempo até a decisão, pelo número de orientações realizadas e pela proporção de casos urgentes identificados. A solução não faz diagnóstico: ela apoia a decisão, e o profissional de saúde continua sendo a referência.
          </p>
          <p>
            Este projeto foi feito como um desadio de inovação social, entregando uma solução de baixo custo, de fácil acesso e que pode ser replicada em diferentes contextos. A ideia é que a tecnologia seja uma aliada da saúde, especialmente para quem mais precisa.
          </p>

        </div>
      </section>
      <img className="impacto__cidade" src={heroCyberpun} alt="" />
    </div>
  );
}
export default Impacto;