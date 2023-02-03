// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/book.service';

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'Book not found!'});
    }

    res.status(statusCodes.OK).json(book);
  }

};

export default BooksController;