# Portfólio pessoal em Ruby + Sinatra

Este projeto é um portfólio pessoal desenvolvido com Ruby, Sinatra e ERB. A interface responsiva usa HTML, CSS e JavaScript nativos, com uma identidade editorial inspirada em cadernos de campo, tons naturais e ilustrações orgânicas.

## Visão geral

A aplicação expõe uma única página com seções como:

- apresentação inicial;
- trajetória pessoal;
- interesses de estudo;
- projetos em destaque;
- contato;
- alternância entre temas claro e escuro.

Ela serve como base para apresentar sua trajetória, trabalhos e forma de contato de forma elegante e minimalista.

## Tecnologias

- Ruby
- Sinatra
- ERB
- Rack
- CSS nativo

## Estrutura do projeto

```text
.
├── app.rb              # Aplicação Sinatra
├── config.ru           # Entrada para Rack
├── Gemfile             # Dependências do projeto
├── Gemfile.lock        # Lock do bundle
├── public/
│   ├── css/
│   │   └── site.css    # Estilos do site
│   ├── js/
│   │   ├── projects-carousel.js # Controles acessíveis do carrossel
│   │   └── theme-toggle.js      # Alternância de tema
│   └── images/
│       └── projects/            # Capturas dos projetos
├── data/
│   └── projects.yml    # Conteúdo dos projetos
├── views/
│   └── index.erb       # Página principal do portfólio
├── vendor/
│   └── bundle/         # Dependências instaladas localmente
└── README.md           # Documentação do projeto
```

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Ruby
- Bundler

## Instalação

No diretório do projeto, execute:

```bash
BUNDLE_PATH=vendor/bundle bundle install
```

Esse comando instala as dependências dentro da pasta `vendor/bundle`, evitando poluição do ambiente global.

## Executando localmente

Você pode iniciar a aplicação com:

```bash
BUNDLE_PATH=vendor/bundle bundle exec ruby app.rb
```

Ou, alternativamente:

```bash
BUNDLE_PATH=vendor/bundle bundle exec rackup
```

A aplicação ficará disponível em:

```text
http://127.0.0.1:4567
```

### Alterando host e porta

Você pode definir variáveis de ambiente antes de iniciar:

```bash
HOST=0.0.0.0 PORT=3000 BUNDLE_PATH=vendor/bundle bundle exec ruby app.rb
```

## Personalização

O site oferece modo claro e escuro pelo botão de tema no cabeçalho. A preferência inicial acompanha o sistema; uma escolha manual fica salva neste navegador. O conteúdo pessoal está no template `views/index.erb`; mantenha datas, experiências e resultados alinhados à sua trajetória real.

### Conteúdo do portfólio

Edite `data/projects.yml` para adicionar ou atualizar projetos. Cada item usa estes campos:

- `name`: nome do projeto;
- `description`: resumo;
- `category`: tecnologias ou área;
- `image`: caminho da captura dentro de `public/`, ou vazio enquanto não houver imagem;
- `image_alt`: descrição da imagem para leitores de tela;
- `github` e `deploy`: endereços dos links, que podem ficar vazios se não forem aplicáveis.

Para exibir uma captura, copie a imagem para `public/images/projects/` e informe o caminho a partir de `public`, por exemplo: `image: "/images/projects/meu-projeto.webp"`. Prefira imagens WebP ou AVIF otimizadas e capturas em proporção 16:9. Quando `image` estiver vazio, o cartão mostra uma indicação de onde adicionar a captura.

Para incluir outro projeto, copie o bloco existente em `data/projects.yml`, cole no final da lista e altere os campos. Com dois ou mais projetos, o carrossel avança continuamente e volta ao início ao chegar ao fim. Use o botão **Pausar/Reproduzir**, as setas ou a rolagem por toque e teclado. Com apenas um projeto, os controles são ocultados. A reprodução automática começa pausada se o sistema estiver configurado para reduzir animações.

Edite `views/index.erb` para alterar textos gerais, nome e e-mail de contato. Os links de exemplo para GitHub e deploy em `data/projects.yml` devem ser substituídos pelos destinos reais.

### Estilo visual

A aparência do site fica em `public/css/site.css`.

Você pode ajustar cores, espaçamento, tipografia e layout conforme o estilo desejado.

## Dica

Revise os textos de apresentação e os links antes de publicar. Projetos sem imagem ou sem links reais continuam identificados como conteúdo a preencher, em vez de apontarem para endereços demonstrativos.

## Licença

Este projeto não possui uma licença específica definida no momento. Caso queira reutilizar ou adaptar o código, fique à vontade para modificar conforme sua necessidade.
