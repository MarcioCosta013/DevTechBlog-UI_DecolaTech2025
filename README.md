[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[ANGULAR__BADGE]: https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular

<h1 align="center" id="portuguese">Bem-Vindo ao DEV TECH BLOG 👋</h1>


<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  
</p>

![angular][ANGULAR__BADGE]
![typescript][TYPESCRIPT__BADGE]

> Um Blog feito em Angular como um projeto do Bootcamp DecolaTech 2025 da Avanade + DIO.

#### 🏠 [Homepage](https://github.com/MarcioCosta013/DecolaTech2025-angular-blog)

#### 🔗 [Visualizar site](https://decola-tech2025-angular-blog.vercel.app)

**English version**: [Click here](#english).

## Estrutura do Projeto

```
src/
├── app/
│ ├── app.component.ts # Componente principal da aplicação
│ ├── app.module.ts # Módulo principal da aplicação
│ ├── components/
│ │ ├── big-card/
│ │ │ ├── big-card.component.ts # Componente de cartão grande
│ │ │ └── big-card.component.html # Template HTML do componente de cartão grande
│ │ ├── contribua-form/
│ │ │ ├── contribua-form.component.ts # Componente de formulário de contribuição
│ │ │ └── contribua-form.component.html # HTML do componente de formulário de contribuição
│ │ ├── footer/
│ │ │ ├── footer.component.ts # Componente de rodapé
│ │ │ └── footer.component.html # Template HTML do componente de rodapé
│ │ ├── menu-bar/
│ │ │ ├── menu-bar.component.ts # Componente de barra de menu
│ │ │ └── menu-bar.component.html # Template HTML do componente de barra de menu
│ │ └── ...
│ ├── pages/
│ │ ├── content/
│ │ │ ├── content.component.ts # Componente de conteúdo
│ │ │ └── content.component.html # Template HTML do componente de conteúdo
│ │ ├── home/
│ │ │ ├── home.component.ts # Componente de página inicial
│ │ │ └── home.component.html # Template HTML do componente de página inicial
│ │ ├── quizz/
│ │ │ ├── quizz.component.ts # Componente de quiz
│ │ │ └── quizz.component.html # Template HTML do componente de quiz
│ │ └── ...
│ ├── services/
│ │ ├── contribuidor.service.ts # Serviço de contribuidores
│ │ └── ...
│ └── ...
├── assets/
│ ├── data/
│ │ ├── dataFake.ts # Dados fake para teste
│ │ └── quizz_questions.json # Dados de perguntas do quiz
│ └── ...
├── environments/
│ ├── environment.ts # Configurações de ambiente
│ └── environment.prod.ts # Configurações de ambiente para produção
└── ...
```

## Instalação

1. Clone o repositório: `git clone https://github.com/MarcioCosta013/DecolaTech2025-angular-blog.git`
2. Instale as dependências: `npm install`
3. Configure o ambiente de desenvolvimento: `ng serve`

## Instruções para usar o projeto com Docker

1. Certifique-se de ter o Docker instalado e configurado em sua máquina.
2. Clone o repositório do projeto e navegue até o diretório raiz do projeto.
3. Execute o comando `docker build -t "meu-projeto"` . para criar a imagem do Docker.
4. Execute o comando `docker-compose up` para iniciar o container e executar a aplicação.
5. Acesse a aplicação em `http://localhost:4200` no seu navegador.

### Observações

- Certifique-se de ter o `Node.js` e o `npm` instalados em sua máquina para executar o comando `npm install`.
- O comando docker-compose up irá iniciar o container e executar a aplicação em modo de desenvolvimento.
- Para executar a aplicação em modo de produção, você precisará criar um novo arquivo `docker-compose.yml` com as configurações de produção e executar o comando `docker-compose up` com o arquivo de produção.

## 🖥  Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação recarregará automaticamente se você alterar qualquer um dos arquivos de origem.

## 😎 Autor

 **Marcio Costa**

* Github: [MarcioCosta013](https://github.com/MarcioCosta013)
* LinkedIn: [linkedin.com\/in\/marcio-jcosta\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/marcio-jcosta\/)
* Instagran: [@marcio_costa013](https://www.instagram.com/marcio_costa013/)

## 🙏🏿 Mais Ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a [documentação oficial do Angular CLI](https://angular.io/cli).

## 🤝 Contribuição

Contribuições, problemas e solicitações de recursos são bem-vindos!<br />Fique à vontade para conferir [issues page](https://github.com/MarcioCosta013/DecolaTech2025-angular-blog/issues). 

## 🤩 Mostre seu apoio

Dê uma ⭐️ se este projeto te ajudou!


</br></br></br></br></br></br></br>



[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[ANGULAR__BADGE]: https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular

<h1 align="center" id="english">Welcome to Angular-Blog 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
</p>

![angular][ANGULAR__BADGE]
![typescript][TYPESCRIPT__BADGE]

> A blog made with Angular as a project from the DecolaTech 2025 Bootcamp by Avanade + DIO.

#### 🏠 [Homepage](https://github.com/MarcioCosta013/DecolaTech2025-angular-blog)

#### 🔗 [View site](https://decola-tech2025-angular-blog.vercel.app)

**Versão em Portuguese**: [Click aqui](#portuguese).

## Project Structure

```
src/
├── app/
│ ├── app.component.ts # Main application component
│ ├── app.module.ts # Main application module
│ ├── components/
│ │ ├── big-card/
│ │ │ ├── big-card.component.ts # Large card component
│ │ │ └── big-card.component.html # Large card component HTML template
│ │ ├── contribua-form/
│ │ │ ├── contribua-form.component.ts # Contribution form component
│ │ │ └── contribua-form.component.html # Contribution form component HTML template
│ │ ├── footer/
│ │ │ ├── footer.component.ts # Footer component
│ │ │ └── footer.component.html # Footer component HTML template
│ │ ├── menu-bar/
│ │ │ ├── menu-bar.component.ts # Menu bar component
│ │ │ └── menu-bar.component.html # Menu bar component HTML template
│ │ └── ...
│ ├── pages/
│ │ ├── content/
│ │ │ ├── content.component.ts # Content component
│ │ │ └── content.component.html # Content component HTML template
│ │ ├── home/
│ │ │ ├── home.component.ts # Home page component
│ │ │ └── home.component.html # Home page component HTML template
│ │ ├── quizz/
│ │ │ ├── quizz.component.ts # Quiz component
│ │ │ └── quizz.component.html # Quiz component HTML template
│ │ └── ...
│ ├── services/
│ │ ├── contribuidor.service.ts # Contributor service
│ │ └── ...
│ └── ...
├── assets/
│ ├── data/
│ │ ├── dataFake.ts # Fake data for testing
│ │ └── quizz_questions.json # Quiz question data
│ └── ...
├── environments/
│ ├── environment.ts # Environment configurations
│ └── environment.prod.ts # Production environment configurations
└── ...
```
## Install

1. Clone the repository: `git clone https://github.com/MarcioCosta013/DecolaTech2025-angular-blog.git`
2.  Install dependencies: `npm install`
3.  Set up the development environment: `ng serve`

## Instructions for Using the Project with Docker

1. Make sure you have Docker installed and configured on your machine.
2. Clone the project repository and navigate to the project's root directory.
3. Run the command `docker build -t "my-project"` . to create the Docker image.
4. Run the command `docker-compose up` to start the container and run the application.
5. Access the application at `http://localhost:4200` in your browser.

### Notes

- Make sure you have `Node.js` and `npm` installed on your machine to run the `npm install` command.
- The `docker-compose up` command will start the container and run the application in development mode.
- To run the application in production mode, you will need to create a new `docker-compose.yml` file with production settings and run the `docker-compose up` command with the production file.


## 🖥 Development Server

Run `ng serve` to start a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 😎 Author

 **Marcio Costa**

* Github: [MarcioCosta013](https://github.com/MarcioCosta013)
* LinkedIn: [linkedin.com\/in\/marcio-jcosta\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/marcio-jcosta\/)
* Instagran: [@marcio_costa013](https://www.instagram.com/marcio_costa013/)

## 🙏🏿 More Help

For more help with the Angular CLI, use `ng help` or check the [official Angular CLI documentation](https://angular.io/cli).

## 🤝 Contribution
Contributions, issues, and feature requests are welcome!<br />Feel free to check out the [issues page](https://github.com/MarcioCosta013/DecolaTech2025-angular-blog/issues).

## 🤩 Show your support
Give a ⭐️ if this project helped you!
