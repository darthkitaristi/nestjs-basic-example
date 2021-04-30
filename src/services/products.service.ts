import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {

    private counterId = 1;

    private products: Product[] = [{
        id:1,
        name:'p1',
        description:'descb',
        price: 122,
        stock:20,
        image:''
    }];

    findAll(){
        return this.products;
    }

    findOne(id:number){
     
     const producto = this.products.find(item => item.id === id); //retorna id buscandoloenelobjeto item
     if (!producto) {
         throw new NotFoundException(`Prodcut ${id} no existe` );
     }
     return producto;
    }

    create(payload: CreateProductDto){ 
        
        this.counterId++;

        const newProduct = {
            id:this.counterId,
            ...payload,
        }

        this.products.push(newProduct);
        return newProduct;
    }

    update(id:number, payload: UpdateProductDto){
        
        const product = this.findOne(id);

        console.log(product)

        if (product) {
           
           const index =  this.products.findIndex(item => item.id === id);
           this.products[index] = {
                ...product,
                ...payload
            };
           return this.products[index];
        }
        return null;
    }
    remove(id:number){
        const index = this.products.findIndex((obj) => obj.id===id);
        if (index === -1) {
            throw new NotFoundException(`Product ${id} no existe` );
        }

        this.products.splice(index, 1);
        return true;
    }
}
