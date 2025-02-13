# 🐾 Gerenciador de Animais

> Um sistema completo para cadastrar e gerenciar animais de forma eficiente e organizada.

## 🚀 Sobre o Projeto

O **Gerenciador de Animais** é uma aplicação backend desenvolvida com **Node.js**, utilizando **Express**, **Handlebars** e **MySQL**. O projeto oferece um CRUD completo para cadastrar, editar, visualizar e excluir informações sobre animais, além de ser altamente eficiente e fácil de usar.

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Handlebars**
- **MySQL**

## 📌 Funcionalidades

✅ Cadastro de animais  
✅ CRUD completo de animais
✅ Uso de uma **template engine Handlebars** para renderizar páginas de forma dinâmica  
✅ Integração com banco de dados **MySQL** para persistência de dados

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório  
```sh
git clone https://github.com/caiohrmm/Projeto-Gerenciador-de-animais.git
```
### 2️⃣ Instalar as dependências
```sh
npm install
```

### 3️⃣ Criar um arquivo .env com as credenciais do banco
```ini
DB_NAME=animals
DB_USER=root
DB_PASS=sua_senha
DB_HOST=localhost
DB_DIALECT=mysql
```

### 4️⃣ Criar a tabela no banco de dados
```sh
CREATE TABLE animals (
    idanimal SERIAL PRIMARY KEY,
    animalname VARCHAR(255),
    race VARCHAR(255),
    ownername VARCHAR(255),
    descri VARCHAR(255)
);
```

### 5️⃣ Iniciar o servidor
```sh
npm start
```

### 🎨 Layout

O front-end utiliza Handlebars como template engine, proporcionando uma interface dinâmica e interativa.

### 💡 Curtiu o projeto? Deixe uma ⭐ no repositório!





