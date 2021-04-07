# Neps Academy Companion

Uma extensão que permite o envio automático de competições e exercícios do site [Neps Academy](neps.academy) para o plugin [Competitive Programming Helper (cph)](https://github.com/agrawal-d/cph#competitive-programming-helper-cph) do Visual Studio Code.

Funciona de forma similar ao [Competitive Companion](https://github.com/jmerle/competitive-companion#competitive-companion), que realiza essa mesma tarefa para diversos outros juízes onlines.

## Como instalar

A _Neps Academy Companion_ pode ser obtida na loja padrão de extensões do seu navegador:
- [Para Google Chrome e outros compatíveis](https://chrome.google.com/webstore/);
- [Para Mozilla Firefox](https://addons.mozilla.org/pt-BR/firefox/extensions/).

## Como usar

1. No Visual Studio Code, abra a pasta onde deseja que sejam criados os arquivos dos problemas.
2. No navegador, quando estiver na página de um exercício ou de uma competição, clique no ícone da _Neps_ no canto superior direito.
3. O arquivo abrirá no Visual Studio Code com os casos de teste já configurados. Aperte em _Run Testcases_ (ou `Ctrl+Alt+B`) para executar todos os casos de teste de uma vez.

## Notas e dicas

- No caso de competições, será criado um arquivo para cada um dos problemas.
- Você pode configurar um arquito _template_ para a sua linguagem padrão. Vá em `Cph › General: Default Language Template File Location` e colocoque o caminho absoluto desse arquivo.
- Para melhor entedimento do uso do _cph_, leia a [página do projeto](https://github.com/agrawal-d/cph#competitive-programming-helper-cph) ou o [guia de uso detalhado](https://github.com/agrawal-d/cph/blob/main/docs/user-guide.md#cph-user-guide).

## Possíveis problemas e soluções

- Se você estiver na página de um exercício, especialmente se ela foi aberta antes de instalar a extensão, e não funcionar o envio para o Visual Studio Code, experimente recarregar a página (`f5`).
- Se você estiver utilizando _workspaces_ no Visual Studio Code e o envio da extensão apresentar falhas, experimente apertar `Ctrl+R` e selecionar a pasta na qual você deseja guardar os problemas.

## License

This software is licensed under [MIT License](LICENSE).
