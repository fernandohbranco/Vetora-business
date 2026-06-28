export interface Case {
  slug: string;
  setor: string;
  nome: string;
  situacao: string;
  resultado: string;
  tags: string[];
}

export const cases: Case[] = [
  {
    slug: "frbranco",
    setor: "Papelaria Afetiva · DTC · Autoridade Criativa",
    nome: "FRBranco Personalizados",
    situacao: "Marca afetiva sem identidade estruturada.",
    resultado:
      "Identidade verbal + visual + presença digital alinhada ao produto e ao público.",
    tags: ["Branding", "Identidade Visual", "Copy"],
  },
  {
    slug: "rancho517",
    setor: "Eventos Premium · Local",
    nome: "Rancho 517",
    situacao: "Reputação local consolidada mas identidade visual sem coerência.",
    resultado:
      "Posicionamento + identidade visual + site que justifica o posicionamento premium.",
    tags: ["Branding", "Identidade Visual"],
  },
  {
    slug: "prezaro",
    setor: "Barbearia Premium · Assinatura · Local",
    nome: "Prezaro Barbearia",
    situacao:
      "Maior clube de barbearia de Joinville com 700+ membros — mas conteúdo digital sem estratégia para comunicar o nível do serviço.",
    resultado:
      "Estratégia de conteúdo + presença digital construída para comunicar a experiência premium do clube de assinatura.",
    tags: ["Conteúdo", "Estratégia Digital", "Analytics"],
  },
  {
    slug: "cantinho",
    setor: "Plantas e Decoração Verde · B2C · Local",
    nome: "Cantinho das Raízes",
    situacao:
      "Negócio com identidade genuína mas sem estrutura visual ou presença digital.",
    resultado:
      "Branding completo + sistema de identidade visual + site com galeria de produtos.",
    tags: ["Branding", "Identidade Visual", "Site"],
  },
];
