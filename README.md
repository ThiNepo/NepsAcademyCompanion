# Neps Academy Companion

Uma extensão que permite o envio automático de competições e exercícios do site [Neps Academy](neps.academy) para o plugin [Competitive Programming Helper (cph)](https://github.com/agrawal-d/cph#competitive-programming-helper-cph) do Visual Studio Code.

Funciona de forma similar ao [Competitive Companion](https://github.com/jmerle/competitive-companion#competitive-companion), que realiza essa mesma tarefa para diversos outros juízes onlines.

## Como instalar no Chrome ou no Edge

1.  [Baixe a pasta _src_](https://downgit.github.io/#/home?url=https://github.com/allangarcia2004/NepsCompanion/tree/main/src) deste repositório.
2.  Na pasta de download, clique com o botão direito no arquivo baixado e aperte em _Extrair aqui_.
3.  Vá para a aba de extensões do seu navegador e, no canto superior direito, habilite o _Modo do desenvolvedor_.
4.  Clique em _Carregar sem compactação_ e selecione a pasta _src_ que acabou de extrair.
5.  No canto superior direito da tela, clique no ícone do quebra-cabeça e aperte no alfinete ao lado da _Neps Academy Companion_.
6.  [Instale o _cph_](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper) no seu Visual Studio Code.
7.  Se você quiser utilizar a _Neps Academy Companion_ em competições, abra as preferências do Visual Studio Code e, na opção `Cph › General: Default Language`, configure uma linguagem a ser utilizada como padrão.

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
