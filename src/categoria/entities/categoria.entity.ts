import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produtos } from "../../produto/entities/produto.entity";


    @Entity({name: "tb_categorias"})
    export class Categoria {

        @PrimaryGeneratedColumn()
        id: number;

        @Transform(({ value }: TransformFnParams)=> value?.trim())
        @IsNotEmpty()
         @Column({length: 1000, nullable: false}) 
        genero: string;
        
        @OneToMany ( () => Produtos, (produto) => produto.categoria)
        produto: Produtos[];
    }