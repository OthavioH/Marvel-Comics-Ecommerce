import {
  ReceiptComic,
  ReceiptComicColumn,
  ReceiptComicImage,
  ReceiptComicTitle,
  ReceiptComicPrice,
  ReceiptComicQuantity,
  ReceiptComicQuantityContainer,
} from "../styles/Receipt.styles";

import { ICartComic } from "../../../shared/models/ICartComic";
import { getImageUrl } from "../../../shared/utils/utils";

interface Props {
  comic: ICartComic;
}

export default function ReceiptComicItem({ comic }: Props) {
  return (
    <ReceiptComic>
      <ReceiptComicImage src={getImageUrl(comic.thumbnailUrl!)} />
      <ReceiptComicColumn>
        <ReceiptComicTitle>{comic.title}</ReceiptComicTitle>
        <ReceiptComicPrice>${comic.price.toFixed(2)}</ReceiptComicPrice>
      </ReceiptComicColumn>
      <ReceiptComicQuantityContainer>
        <ReceiptComicQuantity>x{comic.quantity}</ReceiptComicQuantity>
      </ReceiptComicQuantityContainer>
    </ReceiptComic>
  );
}
