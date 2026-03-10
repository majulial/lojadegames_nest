import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Produtos } from "../entities/produto.entity";

 



 @Injectable()
 export class ProdutoService{
    findById(id: number): Promise<Produtos> {
        throw new Error("Method not implemented.");
    }
    findAllByTitulo(titulo: string): Promise<Produtos[]> {
        throw new Error("Method not implemented.");
    }
    create(produto: Produtos): Promise<Produtos> {
        throw new Error("Method not implemented.");
    }
    update(produto: Produtos): Promise<Produtos> {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

    constructor (
        @InjectRepository(Produtos)
        private produtoRepository: Repository<Produtos>,
    ){}

    async findAll(): Promise<Produtos[]>{

    return this.produtoRepository.find();


    }

 }