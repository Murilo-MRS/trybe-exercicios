# Boas-vindas ao repositório do exercício Classe Quadra


Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ (PR) para colocar seus códigos.

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
  
Este exercício ajudará você a expandir e sedimentar seus conhecimentos sobre um dos pilares da Programação Orientada a Objetos: __Abstração__. Esse tema é amplamente popular no mundo do desenvolvimento e irá auxiliar você não só na forma de organizar código, mas também na forma de pensar e escrever códigos mais legíveis, seguros e escaláveis.

Compreender e aplicar esse conceito fará diferença na sua vida como pessoa programadora, especialmente na escrita de códigos de melhor qualidade e criação de aplicações de software mais fáceis de se compreender e manter ao longo do tempo, habilidades muito bem vistas no mercado de trabalho.

Vamos fazer um exercício para construir uma Classe Abstrata que possua um método abstrato.

</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar uma classe abstrata;

- Criar um método abstrato;

- Definir os tipos do parâmetro do método abstrato e do retorno do método abstrato (assinatura do método);

</details>

## Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `classe_quadra`.
  - A partir daqui você pode rodar o container `classe_quadra` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it classe_quadra bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:betrybe/sd-024-a-exercise-classe-quadra.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-024-a-exercise-classe-quadra`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-sd-024-a-exercise-classe-quadra`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-024-a-exercise-classe-quadra`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/sd-024-a-exercise-classe-quadra/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-024-a-exercise-classe-quadra/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício o linter `ESLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-lo localmente, execute o comando abaixo:

```bash
  npm run lint
```

⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Para executar os testes localmente, digite no terminal o comando `npm test`.

  ### Dica: Execução de um teste específico

  Para executar um único teste localmente, digite no terminal o comando `npm test exerciseNN`, onde NN é o número do teste que deseja executar.
  
  Exemplo:
  
  `npm test exercise01`
  
  ⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. **Testes ignorados serão tratados como testes falhando**. ⚠️

  ⚠️ **Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório**. ⚠️

</details><br />

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

## Requisitos

## 1 - Pre-requisitos

<details>
  <summary>Estrutura inicial dos arquivos</summary><br />

A estrutura inicial dos arquivos deve ser mantida.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Os arquivos `IAgenda.ts`, `normasDeUso.ts`, `Clube.ts`, `Quadra.ts` devem ser existir;

- O arquivo `IAgenda.ts` deve estar na pasta `src/interfaces`;

- O arquivo `normasDeUso.ts` deve estar na pasta `src/normas`;

- O arquivo `Clube.ts` deve estar na pasta `src/`;

- O arquivo `Quadra.ts` deve estar na pasta `src/`;

- O arquivo `Quadra.ts` deve exportar uma classe;

</details>

<!-- </details><br> -->

 ## 2 - Classe Quadra

<details>
  <summary>Classe Quadra não pode ser instânciado </summary><br />

- Altere a classe Quadra de forma que ela não possa ser instanciada.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Ao tentar instanciar a classe Quadra o código não deve ser compilado.

</details>



## 3 - Método Reservar

<details>
  <summary>Método Reservar deve ser implementado </summary><br />

- Crie na classe Quadra um método `reservar` que deve ser implementado quando alguma classe extender da classe Quadra.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A classe Quadra existe.

- O método `reservar` da classe Quadra não deve ser compilado caso não seja implementado.

- O método `reservar` da classe Quadra deve ser possível de ser usado apenas nela ou em classes filhas.

</details>


## 4 - Método Reservar compila ao ser implementado

<details>
  <summary>Método Reservar ao ser implementado compila </summary><br />

- Altere na classe Quadra o método `reservar` para que compile corretamente ao receber um parâmetro do tipo `Date` e deve retornar um `IAgenda`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- A classe Quadra existe.

- O método `reservar` da classe Quadra deve ser compilado quando implementado em uma classa que extende da classe Quadra.

</details>

