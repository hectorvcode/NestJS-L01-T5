import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class BooksController {
  /**
   * http://localhost:3000/ejemplo-get?queryEjemploGet1=1&queryEjemploGet2=2&queryEjemploGet3=3
   */

  @Get('ejemplo-get')
  public get(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'get',
      query,
    });
  }

  /**
   * http://localhost:3000/ejemplo-delete?queryEjemploDelete=1
   */

  @Delete('ejemplo-delete')
  public delete(@Query() query: any, @Res() response: Response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'delete',
      query,
    });
  }

  /**
   *  http://localhost:3000/ejemplo-post?queryEjemploPost=1
   *  { "infoBodyPost":"jsonEnviadoEnElBody" }
   */

  @Post('ejemplo-post')
  public post(@Query() query: any, @Body() body: any, @Res() response) {
    Logger.log(query);
    return response.status(HttpStatus.CREATED).send({
      nombre: 'Post',
      query,
      body,
    });
  }

  /**
   *  http://localhost:3000/ejemplo-put?queryEjemploPut=1
   *  { "infoBodyPut":"jsonEnviadoEnElBody" }
   */

  @Put('ejemplo-put')
  public put(@Query() query: any, @Body() body: any, @Res() response) {
    Logger.log(query);
    return response.status(HttpStatus.OK).send({
      nombre: 'Put',
      query,
      body,
    });
  }
}

/**
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
*/
