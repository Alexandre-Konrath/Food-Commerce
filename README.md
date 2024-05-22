<h1 align="center">Projeto Food Commerce - Front-end</h1>

<br/>

## - Descrição do Projeto.  
Um projeto desenvolvido com a ajuda do curso da Dev Samurai, feito após terminar todos os outros cursos avançados de HMTL,  
CSS, JavaScript, typeScript e React. Um Projeto bem robusto e estrurutado com a integração de Back-end e Banco de Dados.

<br />

## - Como foi desenvolver este projeto.  
Quando terminei todos os outros tópicos do curso fui começar este projeto, não tinha muito conhecimento mas mesmo assim  
decidi iniciar. Demorei um mes e ainda nao tinha terminado 100% o projeto, não estava entendo nada e toda hora vinha alguns  
bugs e erros que eu mesmo cometia por falta de atenção e principalmente falta de conhecimento.  
Foi então que decidi dar uma pausa do projeto pois não fazia o menor sentido eu seguir extendendo isso so para ter o  
"projeto pronto", sem ao menos entender nada de nenhuma funcionalidade.  

Então recomecei do inicio, estudando diversas coisas, como criar componentes reutilizaveis, cirar contexts, hooks,  
entendo como funciona o filter map e o reduce, api, banco de dados e uma porrada de coisa. E foi de suma importáncia isso  
pois se voce esta tendo um problema no seu codigo, debugando e pesquisando voce acaba descobrindo que o erro esta talvés em uma  
função so, dai fica mais facil de solucionar se voce ja entende como esta função ou o que voce esteja usando funciona.  
  
E foi a melhor coisa que eu fiz, pois apesar desses cursos te explicarem bem, essa é a ideia deles no final, te sampa de conteudo  
que se voce for iniciante vai ficar boiando muito, voce pode até terminar o curso em 6 ou 10 meses como eles falam mas dificilmente  
vai realmente entender tudo o que foi dado e por em pratica ja em um projeto mais ou menos robusto, a nao ser que você for um jénio ou  
tenha muita facilidade em aprender, ai tudo bem voce é diferenciadokkkkkkk.  
Mas enfim chega de falar bobagem e veja como ficou o projeto no final de tudo. Espero que goste.

<br />

## - Sobre o Projeto
<br />

### Pagina inicial

- Navbar Interativa.  
  * Tendo a poscibilidade de expandir ou diminuir seu tamanho para melhorar a visibilidade dos botões.
  * Adicionando um estilo deferente para os botões que estao ativos.
 
- Navegação entre Paginas.
  * Ao clicar no icone da comida que deseja ele te leva para a pagina mostrando mais variedade no cardapio.
  * Mudando tambem dinamicamente o titulo da pagina.

![1](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/68c09544-ea0c-44da-aa5d-98a62a6adea9)
![1 1](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/39e67bfd-e075-45ae-921b-4023faa07b99)
![2](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/9f0c815a-f7d8-40e9-825e-17b5ac1536da)  
<br />

- Função de adicionar ao carrinho.
  * Quando adiciona algum item aparece um balão informando quantos desses mesmo items ja tem no carrinho.
  * Se o carrinho esta com algum item, dinamicamente aparece um botao flutuante informando quantos items tem no carrinho.

- Toast de Mensagem
  * Cada item que voce adiciona ao carrinho aparece uma mensagem/toast informando qual item foi adicionado.

![5](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/02d73eb7-9bf7-43e6-961c-5f6c4415831a)

<br />

## - Página de carrinho.

- Botões de diminuir e aumentar.
  * funcionalidade nos botões para tirar itens ou aumentar ele caso queira.

- Tirar item do carrinho.
  * Botão de tirar completamente o item do carrinho.
 
- Salvar no LocalStorage.
  * Todos os items que foram adicionado ao carrinho altomaticamente são salvos no LocalStorage do navegador, assim caso  
    o usuario de um f5 na pagina nao perca os itens que ele ja tinha adicioando.

- Valores de preço interativos.
  * Todos os de item e de total conforme são alterados, o preço deles e alterado tambem.
 
- Botão de Finalizar.
  * Um botão que apos revisar o seu pedido leva para a pagina de pagamento.
  
![6](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/cd7552fd-b928-4a79-beb9-c6685ba11ffe)

<br />

## - Página de pagamento.

- Campos para preencher os dados de pagamento.
  * Com diversos campos para preencher como os dados pessoais, informação de entrega e dados de pagamento, com a limitação de
  aceitar somente cartão de credíto, se não o projeto ficava muito extenso, mas futuramente pretendo por essa implementação.  
  realmente bastate coisa para preencherkkkk.

- Mensagem de erro.
  *  Se algum campo não foi preenchido corretamente o usuario ira receber um toast dizendo qual foi o erro, assim dificilmente
  de erro na hora de processar o pagamento e de tudo certo para enviar e salvar os dados.

- Filtro e mascaras.
  * nos campos de celular, cpf, cep, cartao de credito e data de expliração tem mascaras de preenchimento para fical melhor
  visível para o usuario e para fical melhor salver esses dados no bando de dados caso o usuario digite alguma coisa errada
    
![7](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/f3077798-e3f2-4ec7-80df-cf7844fa57ef)
<br />

- Validação de campos.
  * Confeço que tive bastante dificuldade de finalidade esta etapa pois é meio chato e complexo o uso das bibliotecas
  @brazilian-utils/brazilian-utils, yup, react-imask e a card-validator, mas no final deu tudo certo... eu acho.

![8](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/67dbf35f-25c5-485c-bf97-0dc533b2a147)  
<br />

- Botão de buscar CEP.
  * Usando a api ViaCep creiei um botão que pesquisa o cep que voce digitou e preenche automaticamente os outros capos de
  da informação de entrega para fichar menos chato prenecher tudo isso.

![9](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/3128b36f-ac63-41ec-9a7d-edf197b1b0ed)
![10](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/b0773982-3600-4eb4-8a5e-599abb70de12)  
![11](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/4d6063df-84b7-44f3-bd4a-6fcedb04d73c)
<br />

- Pagina de compra realizada com sucesso.
  * Caso tudo tenha dado certo nos dados de pagamento e de carrinho o usuario sera redirecioando para esta pagina diendo
  que deu tudo certo e com um <a /> para voltar para a tela incial.

- Limpando o carrinho.
  * Depois de tudo finalizado o carrinho sera apagado.
 
- Banco de dados.
  * Todos os dados de cardapio, compra, pagamento e usuario ficam salvos no bando de dados, assim da para ter um controle
  melhor e uma dacil mudança de cardápio se necessário.
![12](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/6ea797f5-ef2a-49ca-8978-1f83a557bde7)

<br />
<br />

## - Site totalmente responsivo. 

- Todo o site foi estratégicamente pensado para fical melhor o uso para mobile, com os botões posicionado onde o usuario
  fica com o dedo.
  
![13](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/a545242b-8c9f-46ae-b753-80f026fa97f9)
![14](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/096dc04f-f1b0-422f-83d6-a03ef6db3436)
![15](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/21618979-5077-41cd-9362-f72e1397bd7c)

<br />
<br />
<br />

## - Implementações futuras

Tenho diversas ideias para melhorar neste projeto como sistema de cozinha, fila de espera, mensagem para o usuario sobre  
os tempo de espera do pedido entre outros, mas creio que não são taao importantes. Mas as principais são.  
<br />

  * Por mais formas de pagamento
  * Opção de criação de conta e ver o historio de compra.
  * Sistema de desconto se o ususario compra regularmente.
  * Frete.
  * Por mais itens no cartapio.
