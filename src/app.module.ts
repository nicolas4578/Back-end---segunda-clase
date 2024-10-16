import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps/bootcamps.controller';
import { CoursesController } from './controllers/courses/courses.controller';
import { ReviewsController } from './controllers/reviews/reviews.controller';
import { UsersController } from './controllers/users/users.controller';


@Module({
  imports: [],
  controllers: [AppController, BootcampsController, CoursesController, ReviewsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
