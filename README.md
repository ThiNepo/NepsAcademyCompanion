# Neps Academy Companion

Uma extensão que permite o envio automático de competições e exercícios do site [Neps Academy](neps.academy) para o plugin [Competitive Programming Helper (cph)](https://github.com/agrawal-d/cph#competitive-programming-helper-cph) do Visual Studio Code.

Funciona de forma similar ao [Competitive Companion](https://github.com/jmerle/competitive-companion#competitive-companion), que realiza essa mesma tarefa para diversos outros juízes onlines.

## Como instalar

A _Neps Academy Companion_ pode ser obtida na loja padrão de extensões do seu navegador:
- [Para Google Chrome e outros compatíveis](https://chrome.google.com/webstore/detail/neps-academy-companion/melmbgodgcahddlphjgjhefmnpcmfage?hl=pt-BR);
- [Para Mozilla Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/neps-academy-companion/).

## Como usar

1.  [Instale o _cph_](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper) no seu Visual Studio Code.
2. Abra a pasta onde deseja que sejam criados os arquivos dos problemas.
3. No navegador, quando estiver na página de um exercício, clique no ícone da _Neps Academy_ no canto superior direito da tela.
4. O novo arquivo abrirá no Visual Studio Code com os casos de teste já configurados. Aperte em _Run Testcases_ (ou `Ctrl+Alt+B`) para executar todos os casos de teste de uma vez.

## Notas e dicas

- Você pode configurar uma linguagem padrão e ainda um arquivo _template_ para ela. Faça isso nas opções  `Cph › General: Default Language`  e `Cph › General: Default Language Template File Location` das preferências do Visual Studio Code.
- Para melhor entedimento do uso do _cph_, leia a [página do projeto](https://github.com/agrawal-d/cph#competitive-programming-helper-cph) ou o [guia de uso detalhado](https://github.com/agrawal-d/cph/blob/main/docs/user-guide.md#cph-user-guide).

## Possíveis problemas e soluções

- Os exercícios que já haviam sido abertos antes da instalação da _Neps Academy Companion_ provavelmente apresentarão falhas no envio para o Visual Studio Code. Experimente recarregá-los com o `f5` .
- O _cph_ apresenta dificuldade em lidar com as _workspaces_ do Visual Studio Code e provavelmente não receberá corretamente os problemas se essa funcionalidade estiver habilitada. Experimente reabrir o editor com somente uma pasta aberta.
- Não se esqueça de verificar se você não está com mais de uma janela do Visual Studio Code aberta. Pode ocorrer de a extensão enviar o problema para alguma das janelas minimizadas do editor.

## License

Este software é licenciado sob a [MIT License](LICENSE).
