import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produto/entities/produto.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/services/categoria.module';
import { ProdutoModule } from './produto/produto.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jujuba',
      database: 'db_lojadegames',
      entities: [Produtos, Categoria, ],
      synchronize: true,
      logging: true,
    }),
    ProdutoModule,
    CategoriaModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
