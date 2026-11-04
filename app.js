const url = "https://fakestoreapi.com/products?limit=8";

const listaProdutos = document.querySelector("#produtos");
const painelDetalhes = document.querySelector("#painel-detalhes");

function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

async function carregarProdutos() {
    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os produtos.");
        }

        const produtos = await resposta.json();

        exibirProdutos(produtos);
    } catch (erro) {
        console.error("Erro ao carregar os produtos:", erro);

        listaProdutos.innerHTML = `
            <p class="mensagem-erro">
                Não foi possível carregar os produtos.
            </p>
        `;
    }
}

function exibirProdutos(produtos) {
    listaProdutos.innerHTML = "";

    produtos.forEach(function (produto) {
        listaProdutos.innerHTML += `
            <div class="produto">

                <img
                    class="produto-imagem"
                    src="${produto.image}"
                    alt="${produto.title}"
                >

                <div class="produto-info">
                    <h3>${produto.title}</h3>

                    <p class="produto-preco">
                        ${formatarPreco(produto.price)}
                    </p>

                    <button
                        class="botao-detalhes"
                        data-id="${produto.id}"
                    >
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
    });

const botoesDetalhes =
    document.querySelectorAll(".botao-detalhes");

botoesDetalhes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const id = botao.dataset.id;

        const cardsProdutos =
            document.querySelectorAll(".produto");

        cardsProdutos.forEach(function (card) {
            card.classList.remove("selecionado");
        });

        const cardSelecionado =
            botao.closest(".produto");

        cardSelecionado.classList.add("selecionado");

        carregarDetalhes(id);
    });
});
}

async function carregarDetalhes(id) {
    try {
        painelDetalhes.innerHTML = `
            <h2>Detalhes do Produto</h2>
            <p>Carregando...</p>
        `;

        const resposta = await fetch(
            `https://fakestoreapi.com/products/${id}`
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os detalhes.");
        }

        const produto = await resposta.json();

        exibirDetalhes(produto);
    } catch (erro) {
        console.error("Erro ao carregar os detalhes:", erro);

        painelDetalhes.innerHTML = `
            <h2>Detalhes do Produto</h2>

            <p class="mensagem-erro">
                Não foi possível carregar os detalhes do produto.
            </p>
        `;
    }
}

function exibirDetalhes(produto) {
    painelDetalhes.innerHTML = `
        <h2>Detalhes do Produto</h2>

        <div class="detalhes-produto">

            <img
                class="detalhes-imagem"
                src="${produto.image}"
                alt="${produto.title}"
            >

            <h3>${produto.title}</h3>

            <p class="detalhes-preco">
                ${formatarPreco(produto.price)}
            </p>

            <p>
                <strong>Categoria:</strong>
                ${produto.category}
            </p>

            <p class="detalhes-descricao">
                <strong>Descrição:</strong>
                ${produto.description}
            </p>
        </div>
    `;
}

carregarProdutos();