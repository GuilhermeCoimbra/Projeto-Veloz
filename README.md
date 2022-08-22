#  <h1 align="left"> Projeto Veloz </h1>

<h1 align="left"> Sobre o Projeto </h1>
Projeto Voltado para o Processo Seletivo Veloz, Aplicação produzida através do Ionic com intuito de Receber dados de uma API e organizá-los em seguida.

<h1 align="left"> Instalando Componentes Necessários </h1>
<h4> 1 - Instalação do NodeJS com o nvm (Node Version Manager). </h4>

Vamos usar o nvm para Windows, que está disponível no endereço: https://github.com/coreybutler/nvm-windows/releases

Procure pela última versão do arquivo "nvm-setup.zip" e execute o arquivo "exe" que está dentro deste compactado.

Quando pedir o diretório para o NVM, digite C:\Apps\nvm

Quando pedir o diretório para o NODEJS, digite C:\Apps\nodejs

Instalação e configuração das duas versões atuais LTS do NodeJS.

Cada linha abaixo é um comando que deverá ser executado no terminal.

nvm list available

nvm install 14.19.0

nvm ls

nvm use 14.19.0

<h4> 2 - Abrindo Projeto no Ionic Framework </h4>

Visual Code será necessário e a instalação fica ao seu critério.

Após baixar toda a pasta deste repositório na sua máquina, abra na pasta onde os arquivos se encontram, vá até o "Caminho da pasta" delete tudo e após isso digite "cmd" e pressione Enter. Dentro do cmd digite "code ." isso irá abrir os arquivos dentro do Visual Code.

No visual code, clique em Terminal >> novo terminal >> clique na seta para baixo ao lado do "+" na parte inferior do Visual Code >> Selecione Command Prompt.

No Prompt de Comando digite "npm install" e pressione enter >> Após o processo terminar digite "ionic serve --lab" e pressione enter. O projeto será aberto no navegador e estará pronto para a intereção com o usuário.

<h1 align="left">⚠️Atenção⚠️</h1>
Atenção para um problema de CORS no qual os navegadores impedem "puxar" os dados da API, em Caso de testes utilize uma extensão chamada "Moesif Origin & CORS" diponível no Google Crome e Mozila Firefox para os dados aparecerem igual a imagem abaixo.

<h1 align="left"> Imagens do Processo de Criação </h1>

![image](https://user-images.githubusercontent.com/88843617/185765194-80038570-44ed-4bf3-83b9-6d1e212ad63f.png)


