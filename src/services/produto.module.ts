import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "../entities/produto.entity";


@Module ({
    imports:[TypeOrmModule.forFeature([Produtos])],
    controllers: [],
    providers: [],
    exports: []

})

export class ProdutoModule{}