
// Exemplo de dados de livros (você pode substituir por seus próprios dados)
const livros = [
    {nome: "Prosperidade a Maneira de Deus-Wilson Oliveira da Silva", imagem: "imagens/1.png"},
    {nome: "O homem do Céu-Irmão Yun", imagem: "imagens/2.png"},
    {nome: "O vinho novo é melhor-Robert Tom", imagem: "imagens/3.png"},
    {nome: "Heróis da fé-Orlando Boyer", imagem: "imagens/4.png"},
    {nome: "Autoridade Espiritual -Watchman Nee", imagem: "imagens/5.png"},
    {nome: "A quarta dimensão -David Yonggi Cho", imagem: "imagens/6.png"},
    {nome: "Como Fazer amigos e influenciar pessoas -Dale Carnegie", imagem: "imagens/7.png"},
    {nome: "Os caçadores de Deus -Tommy Tenney", imagem: "imagens/8.png"},
    {nome: "O mensageiro da Cruz -Watchman Nee", imagem: "imagens/9.png"},
    {nome: "O perfil de três reis-Gene Edwards", imagem: "imagens/10.png"},
    {nome: "O poder da Ação -Paulo Vieira", imagem: "imagens/11.png"},
    {nome: "Uma vida com propósito -Rick Warren", imagem: "imagens/12.png"},
    {nome: "A Recompensa da Honra -John Bevere", imagem: "imagens/13.png"},
    {nome: "Uma vida cheia do Espírito-Charles Finney", imagem: "imagens/14.png"},
    {nome: "O monge e o executivo-James C. Hunter", imagem: "imagens/15.png"},
    {nome: "Bom dia Espírito Santo -Benny Hinn", imagem: "imagens/16.png"},
    {nome: "Destinados a Reinar-Joseph Prince", imagem: "imagens/17.png"},
    {nome: "O poder do Hábito-Charles Duhigg", imagem: "imagens/18.png"},
    {nome: "A isca de satanás  -John Bevere", imagem: "imagens/19.png"},
    {nome: "A importância dos Pequenos Começos -Ricardo Landim", imagem: "imagens/20.png"},
    {nome: "Foco-Daniel Goleman", imagem: "imagens/21.png"},
    {nome: "Como convencer pessoas em 90 segundos-Nicholas Boothman", imagem: "imagens/22.png"},
    {nome: "Você nasceu para liderar-John Maxwell", imagem: "imagens/23.png"},
    {nome: "Fator de Enriquecimento-Paulo Vieira", imagem: "imagens/24.png"},
    {nome: "Oração: A chave do avivamento-Paul Y. Cho", imagem: "imagens/25.png"},
    {nome: "A estratégia do Oceano Azul -W.Chan Kim", imagem: "imagens/26.png"},
    {nome: "A marca da vitória -Phil Knight", imagem: "imagens/27.png"},
    {nome: "25 Leis bíblicas do sucesso-William Douglas", imagem: "imagens/28.png"},
    {nome: "0s 7 hábitos das pessoas altamente eficazes-Stephen R. Covey", imagem: "imagens/29.png"},
    {nome: "Mais esperto que o diabo-Napoleon Hill", imagem: "imagens/30.png"},
    {nome: "As 21 irrefutáveis leis da liderança  -John Maxwell", imagem: "imagens/31.png"},
    {nome: "Como ser dirigido pelo Espírito de Deus-Kennethy Hagin", imagem: "imagens/32.png"},
    {nome: "Não ameis o mundo -Watchman Nee", imagem: "imagens/33.png"},
    {nome: "As 17 Incontestáveis leis do trabalho em equipe  -John Maxwell", imagem: "imagens/34.png"},
    {nome: "Extraordinário -John Bevere", imagem: "imagens/35.png"},
    {nome: "Debaixo de suas asas -John Bevere", imagem: "imagens/36.png"},
    {nome: "Despertando iniciativas empreendedoras-Isaias Sardinha", imagem: "imagens/37.png"},
    {nome: "A celebração da Disciplina-Richard Foster", imagem: "imagens/38.png"},
    {nome: "As cinco linguagens do amor-Gary Chapman", imagem: "imagens/39.png"},
    {nome: "O vendedor de Sonhos-Augusto Cury", imagem: "imagens/40.png"},
    {nome: "Deus e o Dinheiro -John Cortines e Gregory Baumer", imagem: "imagens/41.png"},
    {nome: "10 livros que estragaram o mundo-Benjamin Wiker", imagem: "imagens/42.png"},
    {nome: "Pense e enriqueça -Napoleon Hill", imagem: "imagens/43.png"},
    {nome: "Mindset -Carol S. Dweck", imagem: "imagens/44.png"},
    {nome: "Consolidação de Empresas -Isaias Sardinha", imagem: "imagens/45.png"},
    {nome: "A arte de fazer acontecer-David Allen", imagem: "imagens/46.png"},
    {nome: "Em busca de Deus -John Pipper", imagem: "imagens/47.png"},
    {nome: "Os segredos da mente milionária -T. Harv Eker", imagem: "imagens/48.png"},
    {nome: "Lealdade e Deslealdade -Dag Mills", imagem: "imagens/49.png"},
    {nome: "A tríade do tempo-Christian Barbosa", imagem: "imagens/50.png"},
      
        
];

// Função para gerar os elementos HTML dinamicamente
function gerarLivros() {
    const livrosContainer = document.getElementById("livros");

    livros.forEach(livro => {
        const livroDiv = document.createElement("div");
        livroDiv.classList.add("livro");

        const imagem = document.createElement("img");
        imagem.src = livro.imagem;
        imagem.alt = livro.nome;

        const nomeLivro = document.createElement("p");
        nomeLivro.classList.add("nome-livro");
        nomeLivro.textContent = livro.nome;

        livroDiv.appendChild(imagem);
        livroDiv.appendChild(nomeLivro);

        livrosContainer.appendChild(livroDiv);
    });
}

// Chama a função para gerar os livros quando a página carregar
window.onload = gerarLivros;
