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

export interface Props {
  isOpen: boolean;
  changeReceiptState: () => void;
}

export default function Receipt({ isOpen, changeReceiptState }: Props) {
  return (
    <ReceiptWrapper
      className={isOpen ? "active" : "inactive"}
      onClick={changeReceiptState}
    >
      <ReceiptContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ReceiptHeader>
          <ReceiptHeaderRow>
            <ReceiptTitle>Receipt</ReceiptTitle>
            <ReceiptCloseButton onClick={changeReceiptState}>
              <Close fontSize="medium" />
            </ReceiptCloseButton>
          </ReceiptHeaderRow>
        </ReceiptHeader>
      </ReceiptContainer>
    </ReceiptWrapper>
  );
}
