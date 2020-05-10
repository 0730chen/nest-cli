import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsController} from "./cat.controller";
import {DogController} from "./dog.controller";

@Module({
  imports: [],
  controllers: [AppController,CatsController,DogController],
  providers: [AppService],
})
export class AppModule {}
