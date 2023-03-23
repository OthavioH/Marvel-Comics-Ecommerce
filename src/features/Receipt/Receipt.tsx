import {
  ReceiptCloseButton,
  ReceiptContainer,
  ReceiptHeader,
  ReceiptHeaderRow,
  ReceiptTitle,
  ReceiptWrapper,
} from "./styles/Receipt.styles";

import { Close } from "@mui/icons-material";
import { useState } from "react";

export default function Receipt() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ReceiptWrapper className={isOpen ? "active" : "inactive"}>
      <ReceiptContainer>
        <ReceiptHeader>
          <ReceiptHeaderRow>
            <ReceiptTitle>Receipt</ReceiptTitle>
            <ReceiptCloseButton>
              <Close fontSize="medium" />
            </ReceiptCloseButton>
          </ReceiptHeaderRow>
        </ReceiptHeader>
      </ReceiptContainer>
    </ReceiptWrapper>
  );

  function toggleReceipt() {
    setIsOpen(!isOpen);
  }
}
