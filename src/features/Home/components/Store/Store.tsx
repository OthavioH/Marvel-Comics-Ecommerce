import {
  FilterContainer,
  ShopComics,
  ShopComicsImage,
  ShopComicsPrice,
  ShopComicsTitle,
  ShopContainer,
  StoreSection,
} from "./styles/Store.styles";

import comicCover from "../../../../assets/images/comic_cover.png";

export default function Store() {
  return (
    <StoreSection>
      <FilterContainer />
      <ShopContainer>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>
            Capitão América: O Primeiro Vingador
          </ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
        <ShopComics>
          <ShopComicsImage src={comicCover} />
          <ShopComicsTitle>Capitão América</ShopComicsTitle>
          <ShopComicsPrice>R$299,99</ShopComicsPrice>
        </ShopComics>
      </ShopContainer>
    </StoreSection>
  );
}
