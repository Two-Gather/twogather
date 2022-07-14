import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { User } from './users/entities/users.entity';
import { LoggerMiddleware } from './logger.middleware';
import { QnasModule } from './qnas/qnas.module';
import { RoomsModule } from './rooms/rooms.module';
import { SpacesModule } from './spaces/spaces.module';
import { SpaceImagesModule } from './space_images/space_images.module';
import { Space } from './spaces/entities/spaces.entity';
import { Room } from './rooms/entities/rooms.entity';
import { Qna } from './qnas/entities/qna.entity';

import { SpaceImage } from './space_images/entities/space_image.entity';
import { RoomImagesModule } from './room_images/room_images.module';
import { RoomImage } from './room_images/entities/room_image.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Hashtag } from './hashtags/entities/hashtag.entity';
import { Review } from './reviews/entities/review.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_CHARSET: Joi.string().required(),
        DB_TIMEZONE: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [
        User,
        Space,
        Room,
        Qna,
        SpaceImage,
        RoomImage,
        Reservation,
        Hashtag,
        Review,
      ],
      autoLoadEntities: true,
    }),
    UsersModule,
    QnasModule,
    RoomsModule,
    SpacesModule,
    SpaceImagesModule,
    RoomImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
