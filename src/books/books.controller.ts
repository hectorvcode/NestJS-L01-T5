import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Req,
} from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  @HttpCode(200)
  getBooks() {
    return { nombre: 'get' };
  }

  @Get(':bookId')
  @HttpCode(200)
  getBook() {
    return `queryEjemploGet`;
  }

  @Post()
  @HttpCode(201)
  postBook() {
    return { nombre: 'post' };
  }

  @Put()
  @HttpCode(201)
  putBook() {
    return { nombre: 'put' };
  }

  @Delete()
  @HttpCode(200)
  deleteBook() {
    return { nombre: 'delete' };
  }
}
