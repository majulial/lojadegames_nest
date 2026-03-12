import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produto/entities/produto.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/services/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jujuba',
      database: 'db_lojadegames',
      entities: [Produtos, Categoria, Usuario ],
      synchronize: true,
      logging: true,
    }),
    ProdutoModule,
    CategoriaModule,
    AuthModule,
    UsuarioModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
