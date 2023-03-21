import { FilterContainer, StoreSection } from "./styles/Store.styles";
import ComicsStore from "./ComicsStore/ComicsStore";

export default function Store() {
  return (
    <StoreSection>
      <FilterContainer />
      <ComicsStore />
    </StoreSection>
  );
}
