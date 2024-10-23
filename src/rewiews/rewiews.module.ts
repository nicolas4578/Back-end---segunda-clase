import { Module } from '@nestjs/common';
import { RewiewsService } from './rewiews.service';
import { RewiewsController } from './rewiews.controller';
import { Review } from './entities/rewiew.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Review])],

  controllers: [RewiewsController],
  providers: [RewiewsService]
})
export class RewiewsModule {}
