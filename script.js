document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado e DOM pronto!");

    // ============================================
    //      1. DADOS E GERAÇÃO DO CARDÁPIO
    // ============================================

    const cardapio = {
        entradas: [
             { id: "ent-emp", imagem: "style/img/empada.jpg", alt: "Mini empanadas argentinas assadas", nome: "Mini Empanadas Argentinas", descricao: "Viaje para a Argentina com as nossas Mini Empanadas. Deliciosas massas folhadas recheadas com carne moída temperada, azeitonas e ovo cozido. Assadas até ficarem douradas!", descricaoMobile: "Mini empanadas de carne argentinas.", preco: 10.00 },
             { id: "ent-cro", imagem: "style/img/Croquetes de Carne com Aioli de Limão.jpg", alt: "Croquetes de carne fritos com molho aioli", nome: "Croquetes de Carne c/ Aioli", descricao: "Experimente os nossos Croquetes de Carne, uma explosão de sabor. Bolinhos de carne macia, empanados e fritos até dourarem. Servidos com aioli de limão refrescante.", descricaoMobile: "Croquetes de carne com aioli de limão.", preco: 8.00 },
             { id: "ent-bru", imagem: "style/img/Bruschetta Caprese.jpg", alt: "Fatia de pão torrado com tomate, mussarela e manjericão", nome: "Bruschetta Caprese", descricao: "Desfrute da simplicidade e frescor da nossa Bruschetta Caprese. Pão italiano torrado, coberto com tomates cereja, mussarela de búfala, manjericão e azeite.", descricaoMobile: "Bruschetta com tomate e mussarela.", preco: 12.00 }
        ],
        pratosprincipal: [
            { id: "pp-bol", imagem: "style/img/images.jpg", alt: "Prato de espaguete com molho à bolonhesa e queijo ralado", nome: "Macarrão à Bolonhesa", descricao: "Nosso autêntico Macarrão à Bolonhesa. Molho rico com carne selecionada, legumes frescos e temperos especiais sobre espaguete al dente. Finalizado com parmesão.", descricaoMobile: "Espaguete com molho bolonhesa clássico.", preco: 23.99 },
            { id: "pp-pf", imagem: "style/img/Pf.jpg", alt: "Prato feito com arroz, feijão, picanha, salada e fritas", nome: "Prato Feito da Casa (Picanha)", descricao: "Explore a riqueza de sabores do nosso Prato Feito. Arroz, feijão, picanha suculenta com temperos autênticos, salada fresca e batatas fritas crocantes.", descricaoMobile: "PF com picanha, arroz, feijão e fritas.", preco: 20.99 },
            { id: "pp-str", imagem: "style/img/strong on off.jpg", alt: "Strogonoff de frango cremoso com arroz e batata palha", nome: "Strogonoff de Frango", descricao: "Nosso delicioso Strogonoff de Frango. Cubos suculentos em molho cremoso com cogumelos e toque de mostarda. Servido com arroz e batata palha fininha.", descricaoMobile: "Strogonoff de frango com arroz e palha.", preco: 23.50 }
        ],
        sobremesas: [
             { id: "sob-lim", imagem: "style/img/Tortadelimap.jpg", alt: "Fatia de torta de limão com merengue dourado", nome: "Torta de Limão", descricao: "Nossa Torta de Limão equilibra doçura e acidez. Base crocante, recheio cremoso de limão siciliano e cobertura de suspiro dourado e macio.", descricaoMobile: "Torta de limão com suspiro.", preco: 15.99 },
             { id: "sob-mar", imagem: "style/img/mousse de morango.jpg", alt: "Taça de mousse de maracujá com sementes", nome: "Mousse de Maracujá", descricao: "Refresque-se com nossa Mousse de Maracujá. Textura aerada e cremosa com sabor doce e ácido do maracujá fresco, finalizada com sementes.", descricaoMobile: "Mousse de maracujá leve e saborosa.", preco: 14.00 }, // Verificar imagem
             { id: "sob-mor", imagem: "style/img/boulodemolango.jpg", alt: "Fatia de bolo de morango com chantilly e morangos frescos", nome: "Bolo de Morango", descricao: "Celebre com nosso Bolo de Morango. Massa fofinha recheada com creme delicado e morangos frescos, coberta com chantilly e mais morangos.", descricaoMobile: "Bolo fofo com creme e morangos.", preco: 20.00 } // Verificar imagem
        ]
    }; // Fim do objeto cardapio

    // Função para criar um item do cardápio em HTML
    function criarItemCardapio(item) {
        // console.log(`Criando HTML para: ${item.nome}`); // Log de depuração
        const precoFormatado = `R$ ${item.preco.toFixed(2).replace('.', ',')}`;
        // Acessibilidade: aria-label no botão para mais contexto
        const ariaLabelComprar = `Comprar ${item.nome} por ${precoFormatado}`;
        return `
            <div class="menu-item">
                <img src="${item.imagem}" alt="${item.alt}" loading="lazy">
                <h5>${item.nome}</h5>
                <p class="descricao-desktop">${item.descricao}</p>
                <p class="descricao-mobile">${item.descricaoMobile}</p>
                <span class="price" aria-label="Preço: ${precoFormatado}">${precoFormatado}</span>
                <button class="buy-button"
                        data-id="${item.id}"
                        data-nome="${item.nome}"
                        data-preco="${item.preco}"
                        aria-label="${ariaLabelComprar}">
                    Comprar
                </button>
            </div>
        `;
    } // Fim criarItemCardapio

    // Função para injetar os itens do cardápio no HTML
    function popularCardapio() {
        console.log("Populando cardápio...");
        for (const categoria in cardapio) {
            const containerId = `${categoria}-container`;
            // console.log(`Procurando container com ID: ${containerId}`);
            const container = document.getElementById(containerId);

            if (container) {
                // console.log(`Container ${containerId} encontrado!`);
                let itensHTML = "";
                cardapio[categoria].forEach(item => {
                    try {
                        itensHTML += criarItemCardapio(item);
                    } catch (e) {
                        console.error(`Erro ao criar item ${item.nome}:`, e);
                    }
                });
                // console.log(`HTML gerado para ${categoria} (primeiros 100 chars):`, itensHTML.substring(0,100));
                container.innerHTML = itensHTML; // Insere o HTML gerado
            } else {
                console.error(`ERRO: Container com ID "${containerId}" NÃO foi encontrado no HTML.`);
            }
        }
    } // Fim popularCardapio


    // ============================================
    //      2. LÓGICA DO CARRINHO DE COMPRAS
    // ============================================

    // --- Elementos do DOM (Carrinho) ---
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalValue = document.getElementById('cart-total-value');
    const clearCartButton = document.getElementById('clear-cart-button');
    const mainContent = document.querySelector('main'); // Para delegação de eventos 'Comprar'

    // --- Estado do Carrinho ---
    let cart = JSON.parse(localStorage.getItem('bocadinhasShoppingCart')) || []; // Nome específico para localStorage

    // --- Funções do Carrinho ---

    function saveCart() {
        localStorage.setItem('bocadinhasShoppingCart', JSON.stringify(cart));
    }

    function renderCart() {
        cartItemsList.innerHTML = ''; // Limpa antes de renderizar

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p>Seu carrinho está vazio.</p>';
            cartTotalValue.textContent = '0,00';
            clearCartButton.style.display = 'none';
            return;
        }

        let total = 0;
        const ul = document.createElement('ul');
        ul.setAttribute('aria-label', 'Itens no seu carrinho de compras'); // Acessibilidade

        cart.forEach(item => {
            const li = document.createElement('li');
            const subtotal = item.price * item.quantity;
            const precoUnitFormatado = item.price.toFixed(2).replace('.', ',');
            const subtotalFormatado = subtotal.toFixed(2).replace('.', ',');
            // Acessibilidade: aria-label no botão remover
            const ariaLabelRemover = `Remover ${item.quantity} ${item.name} do carrinho`;

            li.innerHTML = `
                <span>${item.name} (${item.quantity} x R$ ${precoUnitFormatado})</span>
                <span>
                    R$ ${subtotalFormatado}
                    <button class="remove-item-button" data-id="${item.id}" aria-label="${ariaLabelRemover}">×</button>
                </span>
            `;

            ul.appendChild(li);
            total += subtotal;
        });

        cartItemsList.appendChild(ul);
        cartTotalValue.textContent = total.toFixed(2).replace('.', ','); // Exibe total formatado
        clearCartButton.style.display = 'block'; // Ou 'inline-block' dependendo do CSS
    }

    function addToCart(id, name, price) {
        const priceNumber = parseFloat(price);
        if (isNaN(priceNumber)) {
            console.error("Preço inválido ao adicionar ao carrinho:", price);
            return;
        }

        const existingItemIndex = cart.findIndex(item => item.id === id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity++;
        } else {
            cart.push({ id, name, price: priceNumber, quantity: 1 });
        }

        // console.log("Carrinho atualizado:", cart);
        saveCart();
        renderCart();

        // Feedback para leitores de tela (opcional mas bom)
        announceToScreenReader(`${name} adicionado ao carrinho.`);
    }

    function removeFromCart(id) {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            const itemName = cart[itemIndex].name; // Pega o nome antes de remover
            cart = cart.filter(item => item.id !== id);
            saveCart();
            renderCart();
            // Feedback para leitores de tela
             announceToScreenReader(`${itemName} removido do carrinho.`);
        }
    }

    function clearCart() {
        cart = [];
        saveCart();
        renderCart();
         // Feedback para leitores de tela
        announceToScreenReader("Carrinho esvaziado.");
    }

    // Função auxiliar para anunciar mudanças para leitores de tela
    function announceToScreenReader(message) {
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'assertive'); // Muda para assertive para garantir anúncio
        announcer.classList.add('visually-hidden'); // Esconde visualmente
        document.body.appendChild(announcer);
        announcer.textContent = message;
        // Remove o elemento após um tempo para não poluir o DOM
        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 1000);
    }

    // CSS para esconder visualmente o anunciador ARIA
    const style = document.createElement('style');
    style.textContent = `
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    `;
    document.head.appendChild(style);


    // --- Event Listeners ---
    mainContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-button')) {
            const button = event.target;
            const id = button.dataset.id;
            const name = button.dataset.nome;
            const price = button.dataset.preco;

            if (id && name && price !== undefined) {
                addToCart(id, name, price);
                // Feedback visual
                button.textContent = 'Adicionado!';
                button.disabled = true;
                setTimeout(() => {
                    button.textContent = 'Comprar';
                    button.disabled = false;
                }, 1500); // Tempo um pouco maior
            } else {
                console.error("Dados incompletos no botão de compra:", button.dataset);
            }
        }
    });

    cartItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item-button')) {
            const itemIdToRemove = event.target.dataset.id;
            removeFromCart(itemIdToRemove);
        }
    });

    clearCartButton.addEventListener('click', clearCart);

    // --- Inicialização ---
    popularCardapio(); // Cria os itens do menu no HTML
    renderCart();      // Renderiza o estado inicial do carrinho

}); // Fim do DOMContentLoaded