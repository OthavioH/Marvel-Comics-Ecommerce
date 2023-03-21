import {
  FilterButton,
  FilterContainer,
  FilterName,
  FilterTitle,
  Slider,
  SliderContainer,
} from "../../styles/StoreFilter.styles";

export default function StoreFilter() {
  return (
    <FilterContainer>
      <FilterTitle>FILTERS</FilterTitle>
      <FilterName>Price:</FilterName>
      <SliderContainer>
        <Slider type="range" min="1" max="1000" value="0" id="price-slider" />
      </SliderContainer>
      <FilterButton>FILTER</FilterButton>
    </FilterContainer>
  );
}
