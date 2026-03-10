import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
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

     async findById(id: number): Promise<Produtos> {

         const produto = await this.produtoRepository.findOne({
            where:{
                id
            }
         })

         
         if (!produto)
      throw new HttpException('Filme não encontrado!', HttpStatus.NOT_FOUND);

         return produto;

 }

    async findAllByTitulo(titulo: string): Promise<Produtos[]>{

            // SELECT * FROM tb_postagens   WHERE titulo LIKE '%?%';
            return this.produtoRepository.find({ // Usando ILike para ignorar letras maiúsculas e minúsculas
                where:{
                    titulo: ILike(`%${titulo}%`)
                }
            })
         }


           async create(produto: Produtos): Promise<Produtos>{
            // INSERT INTO tb_postagens (titulo, texto) VALUES (valores digitados pelo usuario);
            return await this.produtoRepository.save(produto);
} 

      async update(produto: Produtos): Promise<Produtos>{

            if (!produto.id || produto.id <= 0)
                throw new HttpException("Id inválido!", HttpStatus.BAD_REQUEST);
            await this.findById(produto.id);
            // UPDATE tb_postagens SET titulo = o que digitar, texto = ?, data = CURRENT_TIMESTAMP() WHERE id = que colocar;
            return this.produtoRepository.save(produto);
}  


    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id);
        // DELETE tb_postagens FROM id = ?;
        return this.produtoRepository.delete(id);
    }




}