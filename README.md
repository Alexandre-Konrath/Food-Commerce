<h1 align="center">Projeto Food Commerce - Front-end</h1>

<br/>

## - Descrição do Projeto.  
Um projeto desenvolvido com a ajuda do curso da Dev Samurai, feito após terminar todos os outros cursos avançados de HTML,  
CSS, JavaScript, TypeScript e React. Um projeto bem robusto e estruturado com a integração de Back-end e Banco de Dados.

<br />

## - Como foi desenvolver este projeto.  
Quando terminei todos os outros tópicos do curso, fui começar este projeto. Não tinha muito conhecimento, mas mesmo assim  
decidi iniciar. Demorei um mês e ainda não tinha terminado 100% do projeto. Não estava entendendo nada e toda hora surgiam  
bugs e erros que eu mesmo cometia por falta de atenção e, principalmente, por falta de conhecimento.  
Foi então que decidi dar uma pausa no projeto, pois não fazia o menor sentido seguir estendendo isso só para ter o  
"projeto pronto", sem ao menos entender nenhuma funcionalidade.  

Então recomecei do início, estudando diversas coisas, como criar componentes reutilizáveis, criar contexts, hooks,  
entender como funciona o filter, map e reduce, API, banco de dados e uma porção de coisas. Foi de suma importância isso,  
pois se você está tendo um problema no seu código, debugando e pesquisando, você acaba descobrindo que o erro está, talvez, em uma  
função só. Daí fica mais fácil de solucionar se você já entende como essa função ou o que você esteja usando funciona.
  
E foi a melhor coisa que eu fiz, pois apesar desses cursos explicarem bem, essa é a ideia deles no final: te saturar de conteúdo  
que, se você for iniciante, vai ficar boiando muito. Você pode até terminar o curso em 6 ou 10 meses, como eles falam, mas dificilmente  
vai realmente entender tudo o que foi dado e por em prática já em um projeto mais ou menos robusto, a não ser que você seja um gênio ou  
tenha muita facilidade em aprender. Aí tudo bem, você é diferenciado kkkkkkk.  
Mas enfim, chega de falar bobagem e veja como ficou o projeto no final de tudo. Espero que goste.  

<br />

## - Sobre o Projeto
<br />

### Pagina inicial

- Navbar Interativa  
  * Possibilidade de expandir ou diminuir seu tamanho para melhorar a visibilidade dos botões.
  * Adicionando um estilo diferente para os botões que estão ativos.
 
- Navegação entre Páginas
  * Ao clicar no ícone da comida que deseja, ele te leva para a página mostrando mais variedade no cardápio.
  * Mudando também dinamicamente o título da página.

![1](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/68c09544-ea0c-44da-aa5d-98a62a6adea9)
![1 1](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/39e67bfd-e075-45ae-921b-4023faa07b99)
![2](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/9f0c815a-f7d8-40e9-825e-17b5ac1536da)  
<br />

- Função de adicionar ao carrinho
  * Quando adiciona algum item, aparece um balão informando quantos desses mesmos itens já tem no carrinho.
  * Se o carrinho está com algum item, dinamicamente aparece um botão flutuante informando quantos itens tem no carrinho.
  
- Toast de Mensagem
  * Cada item que você adiciona ao carrinho aparece uma mensagem/toast informando qual item foi adicionado.

![5](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/02d73eb7-9bf7-43e6-961c-5f6c4415831a)

<br />

## - Página de carrinho.

- Botões de diminuir e aumentar
  * Funcionalidade nos botões para tirar itens ou aumentar, caso queira.
  
- Tirar item do carrinho
  * Botão de tirar completamente o item do carrinho.

- Salvar no LocalStorage
  * Todos os itens que foram adicionados ao carrinho automaticamente são salvos no LocalStorage do navegador, assim, caso
    o usuário dê um F5 na página, não perde os itens que já tinha adicionado.

- Valores de preço interativos
  * Todos os itens e o total, conforme são alterados, o preço deles é alterado também.
  
- Botão de Finalizar
  * Um botão que, após revisar o seu pedido, leva para a página de pagamento.
  
![6](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/cd7552fd-b928-4a79-beb9-c6685ba11ffe)

<br />

## - Página de pagamento.

- Campos para preencher os dados de pagamento
  * Com diversos campos para preencher, como os dados pessoais, informação de entrega e dados de pagamento, com a limitação de  
aceitar somente cartão de crédito. Se não, o projeto ficaria muito extenso, mas futuramente pretendo implementar isso.  
Realmente é bastante coisa para preencher kkkkk.

- Mensagem de erro
  * Se algum campo não foi preenchido corretamente, o usuário irá receber um toast dizendo qual foi o erro. Assim, dificilmente  
    ocorrerá erro na hora de processar o pagamento e tudo dará certo para enviar e salvar os dados.

- Filtro e máscaras
  * Nos campos de celular, CPF, CEP, cartão de crédito e data de expiração, há máscaras de preenchimento para ficar melhor  
    visível para o usuário e para facilitar a salvaguarda desses dados no banco de dados, caso o usuário digite algo errado.
    
![7](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/f3077798-e3f2-4ec7-80df-cf7844fa57ef)
<br />

- Validação de campos
  * Confesso que tive bastante dificuldade de finalizar esta etapa, pois é meio chato e complexo o uso das bibliotecas  
    @brazilian-utils/brazilian-utils, yup, react-imask e a card-validator, mas no final deu tudo certo... eu acho.

![8](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/67dbf35f-25c5-485c-bf97-0dc533b2a147)  
<br />

- Botão de buscar CEP
  * Usando a API ViaCep, criei um botão que pesquisa o CEP que você digitou e preenche automaticamente os outros campos de  
    informação de entrega para ficar menos chato preencher tudo isso.

![9](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/3128b36f-ac63-41ec-9a7d-edf197b1b0ed)
![10](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/b0773982-3600-4eb4-8a5e-599abb70de12)  
![11](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/4d6063df-84b7-44f3-bd4a-6fcedb04d73c)
<br />

- Página de compra realizada com sucesso
  * Caso tudo tenha dado certo nos dados de pagamento e do carrinho, o usuário será redirecionado para esta página dizendo  
    que deu tudo certo e com um <a /> para voltar para a tela inicial.

- Limpando o carrinho
  * Depois de tudo finalizado, o carrinho será apagado.
 
- Banco de dados
  * Todos os dados de cardápio, compra, pagamento e usuário ficam salvos no banco de dados. Assim, dá para ter um controle  
    melhor e uma fácil mudança de cardápio, se necessário.
    
![12](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/6ea797f5-ef2a-49ca-8978-1f83a557bde7)

<br />
<br />

## - Site totalmente responsivo 

- Todo o site foi estrategicamente pensado para melhorar o uso em mobile, com os botões posicionados onde o usuário fica com o dedo.
  
![13](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/a545242b-8c9f-46ae-b753-80f026fa97f9)
![14](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/096dc04f-f1b0-422f-83d6-a03ef6db3436)
![15](https://github.com/Alexandre-Konrath/Food-Commerce-Frontend/assets/160286787/21618979-5077-41cd-9362-f72e1397bd7c)

<br />
<br />
<br />

## - Implementações futuras

Tenho diversas ideias para melhorar este projeto, como sistema de cozinha, fila de espera, mensagem para o usuário sobre
o tempo de espera do pedido, entre outros. Mas creio que não são tão importantes. Mas as principais são:
<br />

  * Adicionar mais formas de pagamento
  * Opção de criação de conta e ver o histórico de compra
  * Sistema de desconto se o usuário comprar regularmente
  * Frete
  * Adicionar mais itens no cardápio
