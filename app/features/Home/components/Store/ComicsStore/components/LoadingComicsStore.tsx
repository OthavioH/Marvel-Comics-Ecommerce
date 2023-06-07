import { LoaderContainer } from "../../../Loading/styles/Loading.style";
import {
  ComicsContainer,
  LoadingShopComicsImage,
  ShopComics,
  ShopComicsContainer,
} from "../../styles/Store.styles";

export default function LoadingComicsStore() {
  return (
    <ComicsContainer>
      {[...Array(10)].map((_, index) => (
        <ShopComics key={index} style={{ backgroundColor: "transparent" }}>
          <LoadingShopComicsImage />
        </ShopComics>
      ))}
    </ComicsContainer>
  );
}
