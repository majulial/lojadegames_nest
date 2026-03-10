import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../categoria/entities/categoria.entity";




@Entity({name: "tb_produtos"}) // CREATE TABLE tb_produtos

export class Produtos{
    @PrimaryGeneratedColumn() //PRIMARY KEY (id) AUTO INCREMENT 
    id: number;


    @Transform(({ value }: TransformFnParams) => value?.trim()) // função para remover espaços em branco no inicio e fim 
    @IsNotEmpty() // FORÇA DIGITAÇÃO

    /* VALIDANDO DADOS */

    @Column({length: 100, nullable: false}) // VARCHAR(100) NOT NULL
    titulo: string;



     @Transform(({ value }: TransformFnParams) => value?.trim()) // função para remover espaços em branco no inicio e fim 
    @IsNotEmpty() // FORÇA DIGITAÇÃO

    @Column({length: 1000, nullable: false}) // VARCHAR(1000) NOT NULL
    texto: string;


    @UpdateDateColumn() // ATT A DATA NA CRIAÇÃO E NA ATUALIZAÇÃO
    data: Date;

    @ManyToOne( () => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })

    categoria: Categoria;

}