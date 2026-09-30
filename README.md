# Portfólio

Aplicação de portfólio pessoal em Ruby, Sinatra e ERB. A página usa HTML e CSS nativos, sem dependências de frontend.

## Requisitos

- Ruby disponível no ambiente;
- Bundler.

## Executar localmente

```sh
BUNDLE_PATH=vendor/bundle bundle install
BUNDLE_PATH=vendor/bundle bundle exec ruby app.rb
```

A aplicação estará disponível em `http://127.0.0.1:4567`. Para mudar a porta ou o endereço de escuta, defina `PORT` ou `HOST` ao iniciar o processo.

## Personalizar

Edite `views/index.erb` para substituir nome, apresentação, projetos e e-mail. Ajustes visuais ficam em `public/css/site.css`.
