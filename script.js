const cardapio = {
    /*Estruturarisação da section entrada*/
    /*Informações
    Imagem e seu caminho
    texto alternativo presente na imagem
    nome do prato
    descrição para desktops
    descriçao para mobiles
    preço
    */
    entradas: [
        {
            imagem: "style/img/empada.jpg",
            alt: "Esmpadas",
            nome: "Mini Empanadas Argentinas de Carne",
            descricao: "Viaje para a Argentina com as nossas Mini Empanadas de Carne. Deliciosas massas folhadas recheadas com carne moída temperada com especiarias argentinas, azeitonas picadas e ovo cozido. Assadas até ficarem douradas e irresistíveis!",
            descricaoMobile: "Deliciosas miniaturas de empanadas recheadas com carne suculenta e temperos argentinos.",
            preco: "R$10.00"
        },
        {
            imagem: "style/img/Croquetes de Carne com Aioli de Limão.jpg",
            alt: "Croquetes",
            nome: "Croquetes de Carne com Aioli de Limão",
            descricao: "Experimente os nossos Croquetes de Carne, uma explosão de sabor e textura.  Bolinhos de carne macia e temperada, empanados e fritos até ficarem dourados e crocantes.  Servidos com um delicioso aioli de limão para um toque cítrico e refrescante.",
            descricaoMobile: "Crocantes croquetes de carne com um toque fresco de aioli de limão.",
            preco: "R$8.00"
        },
        {
            imagem: "style/img/Bruschetta Caprese.jpg",
            alt: "Bruschetta",
            nome: "Bruschetta Caprese",
            descricao: "Desfrute da simplicidade e frescor da nossa Bruschetta Caprese.  Fatias de pão italiano torrado, cobertas com tomates cereja frescos, mussarela de búfala cremosa, manjericão fresco e um fio de azeite extra virgem.   Uma explosão de sabores mediterrâneos em cada mordida!",
            descricaoMobile: "Pão italiano crocante com tomate fresco, mussarela de búfala e manjericão.",
            preco: "R$12.00"
        }
    ],
    /*Estruturarisação da section pratosprincipal*/
    pratosprincipal: [
        {
            imagem: "style/img/images.jpg",
            alt: "Bolonhesa",
            nome: "Bolonhesa",
            descricao: "Delicie-se com nosso autêntico Macarrão à Bolonhesa,  um clássico reconfortante com um toque especial. O molho à bolonhesa, rico e saboroso, é preparado com carne moída selecionada, legumes frescos e um blend de temperos que realça cada ingrediente. Servido sobre uma generosa porção de espaguete cozido al dente, este prato é a pedida perfeita para um almoço ou jantar em família. Polvilhado com queijo parmesão ralado para finalizar, é pura nostalgia em cada garfada.",
            descricaoMobile: "Clássico italiano com molho de carne encorpado e massa fresca.",
            preco: "R$23.99"
        },
        {
            imagem: "style/img/Pf.jpg",
            alt: "PratoFeito",
            nome: "Prato feito",
            descricao: "Explore a riqueza de sabores do nosso Prato Feito, uma explosão de cores e aromas que celebram a culinária brasileira. Saboreie a combinação perfeita de arroz branco, feijão carioca, uma suculenta picanha preparada com temperos autênticos, salada fresca e batatas fritas para complementar a sua refeição. Um prato completo e nutritivo, ideal para quem busca uma experiência gastronômica genuinamente brasileira.",
            descricaoMobile: "Arroz, feijão, carne e acompanhamentos frescos e saborosos.",
            preco: "R$20.99"
        },
        {
            imagem: "style/img/strong on off.jpg",
            alt: "Strogonoff",
            nome: "Strogonoff",
            descricao: "Saboreie nosso delicioso Strogonoff de Frango, um clássico reconfortante com o toque especial da nossa cozinha. Cubos suculentos de frango macio, cozidos em um molho cremoso à base de creme de leite fresco, cogumelos selecionados e um toque de mostarda dijon, que garante um sabor irresistível. Servido com arroz branco soltinho e batata palha extra fina e crocante, é a pedida perfeita para um almoço ou jantar especial",
            descricaoMobile: "Cremoso strogonoff com carne macia e cogumelos.",
            preco: "R$23.50"
        }
    ],
    /*Estruturarisação da section sobrimesas*/
    sobremesas: [
        {
            imagem: "style/img/Tortadelimap.jpg",
            alt: "TortadeLimao",
            nome: "Torta de Limão",
            descricao: "Delicie-se com a nossa Torta de Limão, uma explosão cítrica que equilibra doçura e acidez em perfeita harmonia. Uma base crocante de biscoito amanteigado recebe um recheio cremoso e levemente azedo de limão siciliano, coberto por um suspiro dourado e macio. Uma sobremesa perfeita para refrescar o paladar e adoçar o seu dia.",
            descricaoMobile: "Doce e azedinha na medida certa, com base crocante e recheio cremoso.",
            preco: "R$15.99"
        },
        {
            imagem: "style/img/mousse de morango.jpg",
            alt: "MoussedeMaracuja",
            nome: "Mousse de Maracujá",
            descricao: "Refresque o seu paladar com a nossa Mousse de Maracujá, uma sobremesa leve e exótica que te transporta para os trópicos. A textura aerada e cremosa combina perfeitamente com o sabor doce e levemente ácido do maracujá fresco. Finalizada com sementes de maracujá para um toque crocante e visualmente atraente.",
            descricaoMobile: "Leve e refrescante, com sabor intenso de maracujá.",
            preco: "R$14.00"
        },
        {
            imagem: "style/img/boulodemolango.jpg",
            alt: "BoulodeMolango",
            nome: "Bolo de morango",
            descricao: "Saboreie o nosso Bolo de Morango, uma sinfonia de sabores e texturas que celebram a fruta da estação. Uma massa fofinha e úmida, recheada com creme delicado e morangos frescos fatiados, coberta por uma camada generosa de chantilly e morangos inteiros. Uma sobremesa perfeita para celebrar momentos especiais.",
            descricaoMobile: "Massa fofinha com recheio cremoso de morango.",
            preco: "R$20.00"
        }
    ]
};

// Função para criar um item do cardápio em HTML
function criarItemCardapio(item) {
    /*Cria as tags dentro do html*/
    return `
        <div class="menu-item"> <!-- Adicionei a classe menu-item para estilização -->
            <img src="${item.imagem}" alt="${item.alt}">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p id="descMobile">${item.descricaoMobile}</p>
            <strong><p>${item.preco}</p></strong>
        </div>
    `;
}

// Função para injetar os itens do cardápio no HTML
function popularCardapio() {
    for (const categoria in cardapio)/*Localisa o conteiner onde sera criado o conteudo do cardapio*/ {
        const containerId = `${categoria}-container`;
        const container = document.getElementById(containerId);

        if (container) {
            /*Cria no html o conteudo*/
            let itensHTML = "";
            cardapio[categoria].forEach(item => {
                itensHTML += criarItemCardapio(item);
            });
            container.innerHTML = itensHTML;
        } else /*Sinalisa erro caso o conteiner nao for encontrado*/ {
            console.error(`Container com ID "${containerId}" não encontrado no HTML.`);
        }
    }
}

// Chama a função para popular o cardápio quando a página carrega
window.onload = popularCardapio;