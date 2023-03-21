import { StoreSection } from "./styles/Store.styles";
import ComicsStore from "./ComicsStore/ComicsStore";
import StoreFilter from "./components/StoreFilter/StoreFilter";

export default function Store() {
  return (
    <StoreSection>
      <StoreFilter />
      <ComicsStore />
    </StoreSection>
  );
}
