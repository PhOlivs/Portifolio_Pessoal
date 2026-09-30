# Portfólio pessoal em Ruby + Sinatra

Este projeto é uma landing page de portfólio pessoal desenvolvida com Ruby, Sinatra e ERB. A interface é simples, responsiva e usa HTML/CSS puro, sem necessidade de frameworks frontend.

## Visão geral

A aplicação expõe uma única página com seções como:

- apresentação inicial;
- descrição pessoal;
- projetos em destaque;
- contato;
- rodapé com ano atual dinâmico.

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
│   └── css/
│       └── site.css    # Estilos do site
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

### Conteúdo do portfólio

Edite o arquivo `views/index.erb` para alterar:

- nome;
- descrição pessoal;
- projetos;
- e-mail de contato;
- textos gerais da página.

### Estilo visual

A aparência do site fica em `public/css/site.css`.

Você pode ajustar cores, espaçamento, tipografia e layout conforme o estilo desejado.

## Dica

Como este projeto é um modelo inicial, muitos textos e dados aparecem no formato de placeholders, como "Seu Nome" e "seu-email@exemplo.com". Substitua esses valores para adaptar o portfólio ao seu perfil.

## Licença

Este projeto não possui uma licença específica definida no momento. Caso queira reutilizar ou adaptar o código, fique à vontade para modificar conforme sua necessidade.
