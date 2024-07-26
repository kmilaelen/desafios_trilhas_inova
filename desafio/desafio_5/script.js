class Destino {
    constructor(nome, descricao, imagem, atrativos) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.atrativos = atrativos;
    }
}

class Atrativo {
    constructor(nome, tipo, descricao, dicas) {
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao;
        this.dicas = dicas;
    }
}

// coloca os dados e imagens
const destinos = [
    new Destino(
        'Lençóis Maranhenses',
        'Parque Nacional com dunas e lagoas.',
        'imagens/lencois.jpg', // nome das imagenm  que estão na pastan "imagens"
        [
            new Atrativo('Lagoa Azul', 'Lagoa', 'Uma das mais famosas lagoas dos Lençóis.', 'Visite no pôr do sol para uma experiência incrível.'),
            new Atrativo('Dunas', 'Dunas', 'Dunas de areia branca formadas pelo vento.', 'Use protetor solar e leve água.')
        ]
    ),
    new Destino(
        'São Luís',
        'Capital do Maranhão, conhecida por sua arquitetura colonial.',
        'imagens/saoluis.jpg',
        [
            new Atrativo('Centro Histórico', 'Monumento', 'Área com edifícios coloniais.', 'Visite o Museu Histórico para aprender mais sobre a cidade.'),
            new Atrativo('Praia de Ponta d\'Areia', 'Praia', 'Praia popular entre os turistas.', 'Ótimo lugar para relaxar e aproveitar a vista.')
        ]
    ),
    new Destino(
        'Alcântara',
        'Casarões Coloniais (Casarões): Edifícios históricos que refletem a riqueza da cidade no século XIX.',
        'imagens/alcantra.jpg',
        [
            new Atrativo('Centro Histórico', 'Monumento', 'Área com edifícios coloniais.', 'Visite o Museu Histórico para aprender mais sobre a cidade.'),
            new Atrativo('Praia de Ponta d\'Areia', 'Praia', 'Praia popular entre os turistas.', 'Ótimo lugar para relaxar e aproveitar a vista.')
        ]
    ),
    new Destino(
        'Açailândia',
        'Cidade com rica história e belezas naturais.',
        'imagens/acailandia.jpg',
        [
            new Atrativo('Lagoa do Joaquim', 'Lagoa', 'Lagoa popular para recreação.', 'Perfeita para nadar e passar o dia.'),
            new Atrativo('Praça do Pioneiro', 'Praça', 'Principal praça da cidade.', 'Local de encontro e eventos culturais.')
        ]
    ),
    new Destino(
        'Imperatriz',
        'Segunda maior cidade do estado, com várias atrações naturais.',
        'imagens/imperatriz.jpg',
        [
            new Atrativo('Praia do Cacau', 'Praia', 'Praia de rio popular entre os moradores.', 'Ótimo lugar para lazer e diversão.'),
            new Atrativo('Parque Ambiental', 'Parque', 'Área verde para atividades ao ar livre.', 'Ideal para caminhadas e piqueniques.')
        ]
    ),
    new Destino(
        'Tutóia',
        'Porta de entrada para o Delta das Américas.',
        'imagens/tutoia.jpg',
        [
            new Atrativo('Praia da Barra', 'Praia', 'Praia famosa pela tranquilidade e beleza.', 'Aproveite para relaxar e apreciar a vista.'),
            new Atrativo('Dunas do Funil', 'Dunas', 'Formações de dunas impressionantes.', 'Ótimo lugar para aventuras e fotos.')
        ]
    ),
    new Destino(
        'Raposa',
        'Cidade famosa pelo artesanato de renda e belas praias.',
        'imagens/raposa.jpg',
        [
            new Atrativo('Praia de Carimã', 'Praia', 'Praia tranquila e pouco explorada.', 'Perfeita para quem busca tranquilidade.'),
            new Atrativo('Ilha de Curupu', 'Ilha', 'Ilha com praias paradisíacas.', 'Ideal para um passeio de barco e um dia relaxante.')
        ]
    ),
    new Destino(
        'Riachão',
        'Conhecida pelas belas paisagens naturais.',
        'imagens/riachao.jpg',
        [
            new Atrativo('Cachoeira de Santa Bárbara', 'Cachoeira', 'Uma das mais belas cachoeiras da região.', 'Faça uma trilha até a cachoeira e aproveite o visual.'),
            new Atrativo('Poço Azul', 'Lagoa', 'Lagoa de águas cristalinas.', 'Ideal para um mergulho refrescante.')
        ]
    ),
];

function criarDestinoCard(destino) {
    const card = document.createElement('a');
    card.className = 'destino';
    card.href = `destino.html?nome=${encodeURIComponent(destino.nome)}`;
    card.style.textDecoration = 'none'; // Remove underline from link

    const img = document.createElement('img');
    img.src = destino.imagem;
    card.appendChild(img);
    
    const nome = document.createElement('h2');
    nome.textContent = destino.nome;
    card.appendChild(nome);
    
    const descricao = document.createElement('p');
    descricao.textContent = destino.descricao;
    card.appendChild(descricao);
    
    destino.atrativos.forEach(atrativo => {
        const atrativoInfo = document.createElement('p');
        atrativoInfo.innerHTML = `<strong>${atrativo.nome}</strong> (${atrativo.tipo}): ${atrativo.descricao}<br><em>Dicas: ${atrativo.dicas}</em>`;
        card.appendChild(atrativoInfo);
    });

    return card;
}

function mostrarDestinos(destinos) {
    const container = document.getElementById('destinos-container');
    container.innerHTML = '';
    destinos.forEach(destino => {
        const card = criarDestinoCard(destino);
        container.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const destinosFiltrados = destinos.filter(destino => 
        destino.nome.toLowerCase().includes(searchTerm) || 
        destino.atrativos.some(atrativo => atrativo.nome.toLowerCase().includes(searchTerm))
    );
    mostrarDestinos(destinosFiltrados);
});

// Mostrar todos os destinos ao carregar a página
mostrarDestinos(destinos);

const mysql = require('mysql');

// Configurações de conexão com o banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
};

// Função de login
function login(email, senha, callback) {
  // Criar conexão com o banco de dados
  const connection = mysql.createConnection(dbConfig);

  // Conectar ao banco de dados
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      callback(err, null);
      return;
    }

    // Consulta SQL para verificar o usuário e a senha
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    connection.query(query, [email, senha], (err, results) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        callback(err, null);
        return;
      }

      // Verificar se o usuário foi encontrado
      if (results.length > 0) {
        callback(null, 'Login bem-sucedido');
      } else {
        callback(null, 'Email ou senha incorretos');
      }

      // Fechar a conexão com o banco de dados
      connection.end();
    });
  });
}
