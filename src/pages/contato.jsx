import iconeLocalizacao from '../assets/imgs/icone-localizacao.png';
function Contato() {
  return (
    <div className="contato">
      <header className="contato__topo">
        <h1 className="contato__titulo">
          Equipe do Projeto Tech
        </h1>
        <p className="contato__subtitulo">
          Equipe envolvida no projeto:
        </p>
        <img className="contato__icone" src={iconeLocalizacao} alt="Ícone de localização" />
      </header>
      <div className="contato__informacoes">
        <ul className="contato__lista">
            <li className="contato__integrante">Artur Iwasaki Lourenço - RM569149</li>
            <li className="contato__integrante">Rodrigo Arieira Alvarenga - RM572835</li>
            <li className="contato__integrante">Pedro Lopes Barros Batista - RM572324</li>
            <li className="contato__integrante">Lukas Farinchon - RM571512</li>      
        </ul>
        <p className="contato__descricao">
         Este e apenas um projeto acadêmico desenvolvido como parte do curso de Engenharia de Software, com o objetivo de aplicar os conhecimentos adquiridos em cada fase do curso. O projeto não tem fins comerciais e não representa uma solução oficial para problemas de saúde. A equipe envolvida no projeto é composta por estudantes do curso de Engenharia de Software, que se dedicaram a desenvolver uma solução inovadora para auxiliar na triagem e orientação de pacientes em áreas remotas.
        </p>
        <section className="contato__secao">
          <h2 className="contato__titulo-secundario">
            Duvidas ou sugestões
          </h2>
          <p className="contato__subtitulo-secundario">
            Caso tenha alguma dúvida ou sugestão, entre em contato conosco através deste formulario de contato. Estamos sempre abertos a ouvir feedbacks e melhorar nosso projeto.
          </p>
        </section>
      </div>
    </div>
  );
}
export default Contato;
