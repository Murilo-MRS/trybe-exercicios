// passamos type book para classe wish onde usaremos de vdd
type BookType = {
  book: string;
  author: string;
  genre: string;
}

class BooksWishlist {
  private wishlist: BookType[];

  constructor() {
    this.wishlist = [];
  }
  // add metodos add e show wishList
  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

export default BooksWishlist;