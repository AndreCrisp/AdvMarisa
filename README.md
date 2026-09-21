# Marisa Angelin — Advocacia

Landing page institucional estática em HTML5, CSS3, JavaScript Vanilla e Bootstrap 5.3.3. Sem Node.js, instalação, compilação, banco de dados ou backend.

## Visualizar

Abra `index.html` em um navegador. Bootstrap e Poppins ficam em `assets/vendor`, permitindo visualizar a página sem internet. WhatsApp e Instagram precisam de conexão.

## Publicar

Envie `index.html` e a pasta `assets` inteira para a raiz da hospedagem estática (por exemplo, `public_html`). Preserve os nomes e a estrutura. Não é necessário enviar a pasta original `images`.

Após definir o endereço público, preencha `og:url` e `og:image` no local indicado no `<head>` do HTML, usando URLs absolutas. A arte de compartilhamento disponível é `assets/images/fotoHero.png`. Os metadados básicos de título, descrição e idioma já estão configurados.

## Arquivos

- `index.html`: conteúdo, contatos, navegação e metadados.
- `assets/css/style.css`: identidade visual e estilos responsivos.
- `assets/js/script.js`: menu, animações, indicação da seção e ano automático.
- `assets/images/`: cópias dos arquivos oficiais fornecidos; originais preservados em `images`.
- `assets/vendor/`: Bootstrap e fontes Poppins locais.

## Identidade e conteúdo

A logo exibida vem da arte oficial `fotoHero.png`, enquadrada por CSS; não foi redesenhada. A foto é `fotoSobre.jpeg`. `icone.png` está disponível como arte complementar. As imagens originais foram preservadas sem alteração. Poppins é a fonte da interface. Como não foram fornecidas webfonts BROLIMO e Adobe Arabic, os títulos usam Georgia como alternativa explicitamente identificada.

O texto Sobre mim foi preservado integralmente. As quatro áreas, as qualificações, a OAB e os contatos seguem o material fornecido. Não há formulário, rastreadores ou cookies de análise.

WhatsApp: `https://wa.me/5519994709006`.
Instagram: `https://www.instagram.com/marisaangelin.adv`.

## Manutenção

Altere textos e links em `index.html`. Ao substituir imagens, mantenha os nomes ou atualize os caminhos e dimensões no HTML. Se a proporção da logo mudar, ajuste `.brand-art` e `.hero-art` no CSS. O ano é atualizado automaticamente pelo JavaScript.

## Acessibilidade

Menu Bootstrap com Escape e fechamento ao selecionar uma seção, link para pular ao conteúdo, foco visível, textos alternativos, links nomeados e respeito à redução de movimento. O conteúdo permanece visível se JavaScript não carregar; o menu recolhível depende do JavaScript local do Bootstrap.

## Licenças

Bootstrap: MIT (aviso preservado nos arquivos distribuídos). Poppins: SIL Open Font License, disponibilizada em `assets/vendor/OFL.txt`. Imagens e identidade visual fornecidas pelo responsável pelo projeto.
