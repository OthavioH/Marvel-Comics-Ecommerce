import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { ICart } from "../../../shared/models/ICart";
import { ICartComic } from "../../../shared/models/ICartComic";
import { IComic } from "../../../shared/models/IComic";

export default class CartService {
  private actualCart: ICart = { comics: [], totalQuantity: 0, total: 0 };
  private cartSubject = new BehaviorSubject<ICart>(this.actualCart);

  constructor() {
    const subscription = this.getCart().subscribe((cart) => {
      this.actualCart = cart;
    });
  }

  async saveCart(cart: ICart) {
    this.actualCart = cart;
    localStorage.setItem("cart", JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  async addComicToCart(comic: IComic, comicQuantity: number) {
    const cart = this.actualCart;

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
        quantity: comicQuantity,
      });
    } else {
      cart.comics = cart.comics.map((cartComic) => {
        console.log(comicQuantity);

        if (cartComic.id === comic.id) {
          return {
            description: cartComic.description,
            id: cartComic.id,
            price: cartComic.price,
            thumbnailUrl: cartComic.thumbnailUrl,
            title: cartComic.title,
            quantity: cartComic.quantity + comicQuantity,
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

    await this.saveCart(this.actualCart);
  }

  async removeComicFromCart(comic: ICartComic) {
    const cart = this.actualCart;

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
    const cart = this.actualCart;

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

  getCart(): Observable<ICart> {
    const cart = localStorage.getItem("cart");

    if (cart) {
      if (JSON.parse(cart) !== this.actualCart) {
        this.actualCart = JSON.parse(cart);
        this.cartSubject.next(this.actualCart);
      }
    }

    return this.cartSubject.asObservable();
  }
}
