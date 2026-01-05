import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'iluvecoffee-db',
      port: 5432,
      username: 'postgres', // New user
      password: 'postgres', // New password
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 20,
      retryDelay: 5000,
      dropSchema: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
