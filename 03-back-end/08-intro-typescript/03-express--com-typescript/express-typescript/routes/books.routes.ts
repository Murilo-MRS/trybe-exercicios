// routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/book.controller';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

export default router;