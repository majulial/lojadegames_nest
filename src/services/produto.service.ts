import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Produtos } from "../entities/produto.entity";

 



 @Injectable()
 export class ProdutoService{

    constructor (
        @InjectRepository(Produtos)
        private produtoRepository: Repository<Produtos>,
    ){}

    async findAll(): Promise<Produtos[]>{

    return this.produtoRepository.find();


    }

 }