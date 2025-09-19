# pamii-ian-gonzalez
aula  05/08/2025

# Guia de Configuração e Uso do Projeto

---

## 📌 Requisitos

- **Git**
- **Node.js**
- **NPM**

---

## 📂 Como clonar o repositório

1. Abra o aplicativo de terminal  
   *(Windows Terminal no Windows)*

2. Navegue até o local onde deseja clonar o repositório:
   ```bash
   cd {Diretório desejado}
   # Exemplo:
   cd /home/ian/clone
   ```

3. Execute:
   ```bash
   git clone https://github.com/IrmaoDJorel/pamii-Ian-Gonzalez.git
   ```

---

## 🚀 Como criar um projeto em **EXPO**

1. No terminal, execute:
   ```bash
   npx create-expo-app@latest
   ```

2. Pressione **Enter** para confirmar.

3. Digite o nome do projeto.  
   - **Recomendação de nome:**  
     `Aula{número da aula}-{Nome do professor}`  
     **Exemplo:**  
     ```
     Aula02-Joao
     ```

---

## ▶️ Como executar o projeto em **EXPO**

1. Entre no diretório do projeto:
   ```bash
   cd Aula02-Joao
   ```

2. Instale as dependências:
   ```bash
   npm i
   ```
   > 💡 Não é necessário caso tenha acabado de criar seu projeto, pois o EXPO já instala automaticamente.

3. Inicie o servidor:
   ```bash
   npx expo start
   ```

4. Caso esteja no **Windows**, permita o acesso administrativo.

5. Para rodar o projeto:
   - Pressione **w** para abrir no navegador, **ou**
   - Escaneie o **QR Code** com o aplicativo **Expo GO** para visualizar no smartphone.

---

## ⬆️ Como subir as mudanças para o GitHub

1. Configure seu nome:
   ```bash
   git config --global user.name "{nome}"
   ```
   *(Substitua `{nome}` pelo seu nome.)*

2. Configure seu email:
   ```bash
   git config --global user.email "{email}"
   ```
   *(Substitua `{email}` pelo seu email.)*

3. No diretório raiz do repositório, adicione todas as mudanças:
   ```bash
   git add .
   ```

4. Faça o commit:
   ```bash
   git commit -m "{mensagem}"
   ```
   *(Substitua `{mensagem}` pela mensagem desejada.)*

5. Envie as modificações:
   ```bash
   git push
   ```

6. Clique para autenticar com código na janela que aparecer.

7. Em um dispositivo com GitHub logado, acesse:
   ```
   github.com/login/device
   ```
   e digite o código exibido na janela.
