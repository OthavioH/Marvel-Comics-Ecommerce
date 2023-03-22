import { ICart } from "../../../shared/models/ICart";
import { ICartComic } from "../../../shared/models/ICartComic";
import { IComic } from "../../../shared/models/IComic";

export default class CartService {
  actualCart: ICart = { comics: [], totalQuantity: 0, total: 0 };

  async saveCart(cart: ICart) {
    this.actualCart = cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  async addComicToCart(comic: IComic, quantity: number) {
    console.log(comic);
    console.log(quantity);
    console.log(this.actualCart);

    const cart = await this.getCart();

    const comicAlreadyExists = cart.comics.find((cartComic) => {
      return cartComic.id === comic.id;
    });

    if (!comicAlreadyExists) {
      cart.comics.push({
        id: comic.id,
        title: comic.title,
        description: comic.description,
        thumbnailUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        price: comic.prices[0].price,
        quantity,
      });
    } else {
      cart.comics.map((cartComic) => {
        if (cartComic.id === comic.id) {
          return {
            ...cartComic,
            quantity: cartComic.quantity + quantity,
          };
        }

        return cartComic;
      });
    }

    const newCart = cart.comics;

    this.actualCart = {
      comics: newCart,
      totalQuantity: this.getTotalQuantity(newCart),
      total: this.getTotal(newCart),
    };

    console.log(this.actualCart);

    await this.saveCart(this.actualCart);
  }

  async removeComicFromCart(comic: ICartComic) {
    const cart = await this.getCart();

    const newCart = cart.comics.filter((cartComic) => {
      return cartComic.id !== comic.id;
    });

    this.actualCart = {
      comics: newCart,
      totalQuantity: this.getTotalQuantity(newCart),
      total: this.getTotal(newCart),
    };

    await this.saveCart(this.actualCart);
  }

  async updateComicQuantity(comic: ICartComic, quantity: number) {
    const cart = await this.getCart();

    const newCart = cart.comics.map((cartComic) => {
      if (cartComic.id === comic.id) {
        return {
          ...cartComic,
          quantity,
        };
      }

      return cartComic;
    });

    this.actualCart = {
      comics: newCart,
      totalQuantity: this.getTotalQuantity(newCart),
      total: this.getTotal(newCart),
    };

    await this.saveCart(this.actualCart);
  }

  private getTotalQuantity(comics: ICartComic[]) {
    const totalQuantity = comics.reduce((acc, comic) => {
      return acc + comic.quantity;
    }, 0);

    return totalQuantity;
  }

  private getTotal(comics: ICartComic[]) {
    const total = comics.reduce((acc, comic) => {
      return acc + comic.price * comic.quantity;
    }, 0);

    return total;
  }

  async finishCart() {
    await this.clearCart();
  }

  async clearCart() {
    this.actualCart = { comics: [], totalQuantity: 0, total: 0 };
    await this.saveCart(this.actualCart);
  }

  async getCart(): Promise<ICart> {
    const cart = localStorage.getItem("cart");

    if (cart) {
      return JSON.parse(cart);
    }

    return { comics: [], totalQuantity: 0, total: 0 };
  }
}
