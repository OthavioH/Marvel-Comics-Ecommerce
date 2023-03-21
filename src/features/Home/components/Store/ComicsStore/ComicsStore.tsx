import { ShopContainer } from "../styles/Store.styles";
import ComicItem from "./components/ComicItem";

export default function ComicsStore() {
  return (
    <ShopContainer>
      {Array.from({ length: 10 }).map((_, index) => (
        <ComicItem key={index} />
      ))}
    </ShopContainer>
  );
}
