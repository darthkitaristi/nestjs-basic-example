import { Body, Controller, Get, Param, Post, Query, HttpStatus, HttpCode, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { ProductsService } from '../services/products.service';


@Controller('products')
export class ProductsController {
    
  constructor(private productsService: ProductsService){

  }
    
    @Get('filter')  // ojooo, siempre sedebeponer primero las rutas estaticas y luego las dinamicas para evitar erroes de ambiguedad
    getProductsFilter(){
        return `product soy un filtro`
    }
    
    @Get(':id')  
    @HttpCode(HttpStatus.ACCEPTED)
    getProducts(@Param('id', ParseIntPipe) id:number){
      return this.productsService.findOne(id)
    }
    
    @Get()
    getProduct(
      @Query('limit') limit = 100,
      @Query('offset') offset=0,
      @Query('brand') brand:string
    ) {
      return this.productsService.findAll();
    }

    @Post()
    create(@Body() payload: CreateProductDto){
      // return {
      //   message: 'accion crear',
      //   payload,
      // }
      return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() payload: UpdateProductDto){

      return this.productsService.update(+id,payload);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
      return this.productsService.remove(+id)
    }
  
}
