import { Close } from "@mui/icons-material";
import {
  ReceiptCloseButton,
  ReceiptHeaderContainer,
  ReceiptHeaderRow,
  ReceiptThanksText,
  ReceiptTitle,
} from "../styles/Receipt.styles";

interface Props {
  finishCart: () => void;
}

export default function ReceiptHeader({ finishCart }: Props) {
  return (
    <ReceiptHeaderContainer>
      <ReceiptHeaderRow>
        <ReceiptTitle>Receipt</ReceiptTitle>
        <ReceiptCloseButton onClick={finishCart}>
          <Close fontSize="medium" />
        </ReceiptCloseButton>
      </ReceiptHeaderRow>
      <ReceiptThanksText>Thank you for your purchase!</ReceiptThanksText>
    </ReceiptHeaderContainer>
  );
}
