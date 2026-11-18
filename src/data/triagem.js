const acoes = {
  alta: "Procure atendimento agora. Se possível, acione o SAMU (192) ou o apoio de saúde da sua comunidade.",
  media: "Procure o posto de saúde assim que possível.",
  baixa: "Faça os cuidados em casa e observe por 24 horas. Se piorar, procure atendimento.",
};

export function avaliar(comunidade, situacao, sinaisMarcados) {
  // qualquer sinal de alerta marcado sobe a urgência para alta
  const urgencia = sinaisMarcados.length > 0 ? "alta" : situacao.urgenciaBase;

  return {
    urgencia,
    acao: acoes[urgencia],
    orientacao: situacao.orientacao,
    viagem: `${comunidade.horasAtePosto}h de ${comunidade.transporte.toLowerCase()} até o posto de saúde`,
    viagemLonga: comunidade.horasAtePosto >= 6,
    comunidade: comunidade.nome,
    situacao: situacao.nome,
  };
}