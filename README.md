# Marvel Comics E-commerce

## Como acessar
O projeto está disponível em: https://marvel-comics-ecommerce.vercel.app

## Descrição
Esse projeto é um E-commerce de HQs da Marvel que utiliza a API pública da mesma ([Marvel API](https://developer.marvel.com)).

## Criação

Quando comecei a fazer, escolhi primeiramente estudar a API para ver o que ela poderia retornar nos seus endpoins. Comecei vendo o endpoint **/comics** para ver as HQs que eram retornadas e comecei a testar seus parâmetros e retornos e nisso a API acabava me retornando muitas HQs antigas sem preço então já percebi que teria que criar alguma forma de retornar apenas as HQs com preço.

Pulando um pouco, depois fui estudar como eu faria o layout então para ter alguma ideia eu comecei a pesquisar sites, designs no pinterest e até usar a IA MidJourney para gerar layouts e eu ter alguma referência do que eu faria.

**OBS:** Também utilizei o MidJourney para criar as imagens de background da home e também o placeholder das HQs onde mostra uma interrogação para HQs que não têm imagens.

Depois que eu já tinha na minha cabeça como seria o layout, comecei a realmente fazer a aplicação e escolhi fazer com [Vite](https://vitejs.dev/) + React-TS porque é uma build tool que tenho utilizado muito, além de ter ouvido algumas discussões sobre performance entre o create-react-app e o Vite onde o Vite sai ganhando.

Após isso comecei a criar os componentes da forma que estou acostumado e aqui nesse projeto eu aprendi coisas também, além de outras que eu já sabia mas só havia usado em outros frameworks ou também coisas desconhecidas que acabei aprendendo no meio do caminho.

## Tempo de construção
Esse projeto levou 3 dias para ser realizado, porém, faltaram algumas features. Decidi não terminar essas features por conta de uma semana de prova na faculdade (mais tarde com certeza voltarei para terminá-las), mas ainda sim ele é um ótimo projeto e que foi muito bom de construir.

## Features e Pages
- **Design responsivo em todas as páginas**
- **Página de Listagem de HQs**
![image](https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png)
- **Página individual da HQ**
![image](https://user-images.githubusercontent.com/46772924/227333897-767072eb-31f5-49e1-92be-ef8503d40766.png)
- **Carrinho de compras (Vazio)**

![image](https://user-images.githubusercontent.com/46772924/227333770-9686c9e8-38ba-409f-8a8e-6337e5cbeb85.png)

- **Carrinho de compras (Com itens)**

![image](https://user-images.githubusercontent.com/46772924/227333805-3e410bcb-f6fc-49fe-92ea-3dfe37049f02.png)

- **Modal de recibo para mostrar todas as HQs compradas**

**OBS:** O Modal não é um componente do Material, foi feito do zero vom styled components.

![image](https://user-images.githubusercontent.com/46772924/227333936-fdf901cc-6ef6-4031-afbc-b67b15d94b0c.png)

## Libraries
- Vite
- Axios
- Styled Components
- Material Icons (apenas os ícones, não os components do próprio material)
- rxjs
- Docker
- serve
- Typescript
- Crypto
