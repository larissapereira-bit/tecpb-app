TECPB - Aplicativo instalavel

Este pacote e um app instalavel no formato PWA. Para publicar, envie todos estes arquivos juntos:

- index.html
- styles.css
- app.js
- manifest.webmanifest
- service-worker.js
- assets/tecpb-symbol.png
- assets/icon-192.png
- assets/icon-512.png

Opcoes simples de publicacao:

1. Netlify
   - Acesse https://app.netlify.com/drop
   - Arraste a pasta do projeto ou o arquivo ZIP
   - O Netlify gera um link publico automaticamente

2. Vercel
   - Crie um novo projeto
   - Envie estes arquivos como projeto estatico

3. GitHub Pages
   - Crie um repositorio
   - Envie os arquivos para a branch principal
   - Ative Pages apontando para a raiz do projeto

Como instalar no celular depois de publicado:

- Android/Chrome: abra o link publicado, toque no menu do navegador e escolha "Adicionar a tela inicial" ou "Instalar app".
- iPhone/Safari: abra o link publicado, toque no botao de compartilhar e escolha "Adicionar a Tela de Inicio".

Importante:
Para o modo aplicativo funcionar bem, publique em um endereco HTTPS. Netlify, Vercel e GitHub Pages ja fornecem HTTPS.

Observacao importante:
Este prototipo salva informacoes no navegador usando localStorage. Isso quer dizer que, nesta versao, os dados nao ficam sincronizados entre celulares diferentes. Para virar app real com login, perfis compartilhados, anexos e dados iguais para todos, o proximo passo e conectar um backend/banco de dados.
