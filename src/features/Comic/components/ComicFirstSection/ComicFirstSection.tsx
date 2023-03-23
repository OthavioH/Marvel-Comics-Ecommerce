import { IComic } from "../../../../shared/models/IComic";
import {
  ComicImage,
  ComicInfoColumn,
  ComicTitle,
} from "../../styles/Comic.styles";
import BuyComic from "../BuyComic/BuyComic";

import { getImageUrl } from "../../../../shared/utils/utils";

interface Props {
  comic?: IComic;
  handleChangeQuantity: (quantity: number) => void;
  handleResetQuantity: () => void;
  comicQuantity: number;
  addToCart: () => void;
}

export default function ComicFirstSection({
  comic,
  handleChangeQuantity,
  handleResetQuantity,
  comicQuantity,
  addToCart,
}: Props) {
  return (
    <ComicInfoColumn>
      <ComicTitle>{comic?.title}</ComicTitle>
      <ComicImage
        src={getImageUrl(
          `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`
        )}
      />
      <BuyComic
        comicPrice={comic?.prices[0].price || 0}
        comicQuantity={comicQuantity}
        handleChangeQuantity={handleChangeQuantity}
        handleResetQuantity={handleResetQuantity}
        addToCart={addToCart}
      ></BuyComic>
    </ComicInfoColumn>
  );
}
