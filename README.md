# EasyTask - Gerenciamento de Tarefas Empresariais

## Sobre o Projeto

EasyTask é uma aplicação web desenvolvida em Angular que oferece um sistema de gerenciamento de tarefas. A aplicação permite que múltiplos usuários gerenciem suas tarefas de forma eficiente e intuitiva.

## Tecnologias Utilizadas

### Persistência de dados
• [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

### Frontend
• [Angular 19](https://angular.dev/overview) | • [TypeScript](https://www.typescriptlang.org/) | • [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) | • [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) | 

## Principais Funcionalidades

### 1. Gerenciamento de Usuários
- Exibição de lista de usuários com avatares
- Seleção de usuário para visualização de tarefas específicas
- Interface responsiva para visualização em diferentes dispositivos

### 2. Gerenciamento de Tarefas
- Visualização de tarefas por usuário
- Adição de novas tarefas
- Marcação de tarefas como concluídas

### 3. Componentes Principais

#### Header [`HeaderComponent`](src/app/components/header/header.component.ts)
- Logo da aplicação
- Título e descrição do sistema
- Arquivos: 
  - [Template](src/app/components/header/header.component.html)
  - [Estilos](src/app/components/header/header.component.css)

#### User [`UserComponent`](src/app/components/user/user.component.ts)
- Exibição de avatar do usuário
- Nome do usuário
- Seleção interativa de usuários
- Arquivos:
  - [Template](src/app/components/user/user.component.html)
  - [Estilos](src/app/components/user/user.component.css)

#### Tasks [`TasksComponent`](src/app/components/tasks/tasks.component.ts)
- Lista de tarefas do usuário selecionado
- Botão para adicionar novas tarefas
- Visualização organizada das tarefas
- Arquivos:
  - [Template](src/app/components/tasks/tasks.component.html)
  - [Estilos](src/app/components/tasks/tasks.component.css)

#### Task [`TaskComponent`](src/app/components/task/task.component.ts)
- Exibição detalhada de cada tarefa
- Data de vencimento
- Botão para marcar como concluída
- Arquivos:
  - [Template](src/app/components/task/task.component.html)
  - [Estilos](src/app/components/task/task.component.css)

#### NewTask [`NewTaskComponent`](src/app/components/new-task/new-task.component.ts)
- Formulário modal para adicionar novas tarefas
- Campos para título, descrição e data de vencimento
- Arquivos:
  - [Template](src/app/components/new-task/new-task.component.html)
  - [Estilos](src/app/components/new-task/new-task.component.css)

#### Shared Components
- Card [`CardComponent`](src/app/components/shared/card/card.component.ts)
  - [Template](src/app/components/shared/card/card.component.html)
  - [Estilos](src/app/components/shared/card/card.component.css)


## Recursos Técnicos

### Serviços

#### TaskService [TaskService](src/app/services/task/task.service.ts)
- Gerenciamento de estado das tarefas
- Operações CRUD para tarefas
- Integração com localStorage

### Modelos de Dados

- [ITask](src/app/components/task/task-module.ts) - Interface para estrutura de tarefas
- [IUser](src/app/components/user/user-module.ts) - Interface para estrutura de usuários 

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute o servidor de desenvolvimento:
```bash
ng serve
```
4. Acesse http://localhost:4200 no navegador

