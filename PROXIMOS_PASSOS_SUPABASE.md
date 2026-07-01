# TECPB - Proximos passos para dados compartilhados

O app publicado hoje ainda salva calendario, listas, estudos, forum, feedbacks e fotos no aparelho de quem esta usando. Para refletir para todo mundo, o proximo passo e criar um banco Supabase e ligar o app nele.

## 1. Criar o projeto Supabase

Antes de mexer no banco, abra `Administração` no app e use `Exportar backup`. Guarde o arquivo `.json` gerado.

1. Acesse https://supabase.com
2. Crie um projeto chamado `tecpb-app`
3. Abra `SQL Editor`
4. Cole e execute o conteudo de `supabase-schema.sql`
5. Depois cole e execute o conteudo de `supabase-storage.sql`

## 2. Pegar as chaves publicas do app

No painel do Supabase:

1. Va em `Project Settings`
2. Abra `API`
3. Copie `Project URL`
4. Copie `anon public key`

Essas duas informacoes vao em `supabase-config.js`. A chave `anon public` pode ficar no app desde que as politicas de seguranca estejam ativas, como no arquivo SQL.

## 3. Criar os acessos

Depois do banco criado, cadastre os usuarios em `Authentication`.

O fluxo recomendado e por convite:

1. No Supabase, va em `Authentication` > `Users`.
2. Use `Invite user` para enviar o convite por e-mail.
3. A pessoa recebe o link, cria/define a senha e depois entra no app.
4. So depois disso o usuario deve ser vinculado ao perfil em `app_users`.

O link publico do app pode ser enviado para todo mundo, mas os dados online ficam protegidos pelo login e pelas politicas do Supabase. Na pratica, so quem tiver usuario criado/convidado e vinculado em `app_users` consegue acessar o perfil correto.

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

Depois de criar cada usuario, copie o UUID gerado no Supabase e use o arquivo `supabase-users-template.sql`.

Nesse arquivo, substitua `UUID_THIAGO`, `UUID_JAQUELINE`, `UUID_LARISSA` e os demais UUIDs pelos IDs reais dos usuarios criados em `Authentication`.

O arquivo ja deixa Thiago, Jaqueline e Larissa como `admin`. Os demais ficam como `medium`.

## 4. Preencher a configuracao

Preencha `supabase-config.js` assim:

```js
window.TECPB_SUPABASE = {
  url: "SUA_PROJECT_URL",
  anonKey: "SUA_ANON_PUBLIC_KEY",
};
```

## 5. O que ja fica preparado para sincronizar

Depois que `supabase-config.js` tiver URL e anon key e o usuario entrar com e-mail/senha, o app ja tem camada de sincronizacao para:

- calendario cria eventos para todos
- listas aparecem para todos e cada pessoa assume/entrega seus itens
- estudos sao inseridos pela administracao e respondidos pelos mediuns
- feedback positivo aparece anonimo para quem recebeu
- forum fica compartilhado entre todos
- perfis passam a carregar do banco
- fotos de perfil passam a ser salvas no Storage do Supabase

## 6. Primeira carga dos dados do prototipo

Ao entrar como administrador, use o botao `Enviar dados locais`. Ele envia para o Supabase os dados que ja existem no prototipo:

- perfis
- calendario
- listas
- estudos
- feedbacks positivos
- forum

Use esse botao uma vez depois que o banco estiver criado. Depois disso, as novas alteracoes feitas no app ja tentam sincronizar automaticamente.

## 7. Listas de itens

As listas podem ou nao estar ligadas a um evento.

- Para lista mensal, doacao geral ou necessidades da casa, escolha `Sem evento - lista geral/mensal`.
- Para lista de uma gira, estudo ou entrega especifica, escolha o evento correspondente.

## 8. Testar perfis antes do login real

Enquanto o Supabase nao estiver configurado, use o seletor `Perfil ativo` no topo do app para simular quem esta usando:

- Thiago, Jaqueline e Larissa como administradores
- demais perfis como mediuns

Quando o Supabase estiver configurado e a pessoa entrar com e-mail/senha, o perfil passa a vir do login e o seletor fica apenas como referencia do prototipo.

## 9. Publicar de novo

Depois da conexao pronta, gerar novo pacote e publicar no GitHub Pages.
