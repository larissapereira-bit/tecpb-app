# TECPB - Proximos passos para dados compartilhados

O app publicado hoje ainda salva calendario, listas, estudos, forum, feedbacks e fotos no aparelho de quem esta usando. Para refletir para todo mundo, o proximo passo e criar um banco Supabase e ligar o app nele.

## 1. Criar o projeto Supabase

1. Acesse https://supabase.com
2. Crie um projeto chamado `tecpb-app`
3. Abra `SQL Editor`
4. Cole e execute o conteudo de `supabase-schema.sql`

## 2. Pegar as chaves publicas do app

No painel do Supabase:

1. Va em `Project Settings`
2. Abra `API`
3. Copie `Project URL`
4. Copie `anon public key`

Essas duas informacoes vao em `supabase-config.js`. A chave `anon public` pode ficar no app desde que as politicas de seguranca estejam ativas, como no arquivo SQL.

## 3. Criar os acessos

Depois do banco criado, cadastre os usuarios em `Authentication`.

Administradores previstos:

- Thiago
- Jaqueline
- Larissa

Mediuns:

- Claudemir
- Rita
- Marcela
- Priscila
- Monique
- Kelly
- Vanessa
- Flavia
- Luciana

## 4. Ligar o app ao banco

Depois que `supabase-config.js` tiver URL e anon key, o app deve ganhar a camada de sincronizacao:

- calendario cria eventos para todos
- listas aparecem para todos e cada pessoa assume/entrega seus itens
- estudos sao inseridos pela administracao e respondidos pelos mediuns
- feedback positivo aparece anonimo para quem recebeu
- forum fica compartilhado entre todos
- perfis e fotos passam a carregar do banco

## 5. Publicar de novo

Depois da conexao pronta, gerar novo pacote e publicar no GitHub Pages.
