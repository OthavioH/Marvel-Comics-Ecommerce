import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IComic } from "../../shared/models/IComic";
import { Loading, PageState, Success } from "../../shared/models/PageState";
import ComicService from "../../shared/services/ComicService";
import CartService from "../Cart/services/CartService";
import ComicFirstSection from "./components/ComicFirstSection/ComicFirstSection";
import ComicSecondSection from "./components/ComicSecondSection/ComicSecondSection";
import { ComicSection } from "./styles/Comic.styles";

export default function Comic() {
  const [comic, setComic] = useState<IComic>();
  const [comicQuantity, setComicQuantity] = useState(1);
  const [pageState, setPageState] = useState<PageState>(new Loading());

  const routeParams = useParams();
  const cartService = new CartService();
  const comicService = new ComicService();

  useEffect(() => {
    getComic();
  }, []);

  if (pageState instanceof Success) {
    return (
      <ComicSection>
        <ComicFirstSection
          comic={comic}
          handleChangeQuantity={handleChangeQuantity}
          addToCart={addToCart}
        />
        <ComicSecondSection comic={comic} />
      </ComicSection>
    );
  }

  return <div>Loading...</div>;

  function handleChangeQuantity(quantity: number) {
    setComicQuantity(quantity);
  }

  async function addToCart() {
    await cartService.addComicToCart(comic!, comicQuantity);
  }

  function getComic() {
    const { id: comicID } = routeParams;

    if (comicID) {
      comicService
        .getComicById(+comicID)
        .then((comic) => {
          setComic(comic);
          setPageState(new Success());
        })
        .catch((err) => {
          setPageState(new Error());
        });
    }
  }
}
