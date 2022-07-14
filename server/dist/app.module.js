"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const users_entity_1 = require("./users/entities/users.entity");
const logger_middleware_1 = require("./logger.middleware");
const qnas_module_1 = require("./qnas/qnas.module");
const rooms_module_1 = require("./rooms/rooms.module");
const spaces_module_1 = require("./spaces/spaces.module");
const space_images_module_1 = require("./space_images/space_images.module");
const spaces_entity_1 = require("./spaces/entities/spaces.entity");
const rooms_entity_1 = require("./rooms/entities/rooms.entity");
const qna_entity_1 = require("./qnas/entities/qna.entity");
const space_image_entity_1 = require("./space_images/entities/space_image.entity");
const room_images_module_1 = require("./room_images/room_images.module");
const room_image_entity_1 = require("./room_images/entities/room_image.entity");
const reservation_entity_1 = require("./reservations/entities/reservation.entity");
const hashtag_entity_1 = require("./hashtags/entities/hashtag.entity");
const review_entity_1 = require("./reviews/entities/review.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
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
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: true,
                logging: true,
                entities: [
                    users_entity_1.User,
                    spaces_entity_1.Space,
                    rooms_entity_1.Room,
                    qna_entity_1.Qna,
                    space_image_entity_1.SpaceImage,
                    room_image_entity_1.RoomImage,
                    reservation_entity_1.Reservation,
                    hashtag_entity_1.Hashtag,
                    review_entity_1.Review,
                ],
                autoLoadEntities: true,
            }),
            users_module_1.UsersModule,
            qnas_module_1.QnasModule,
            rooms_module_1.RoomsModule,
            spaces_module_1.SpacesModule,
            space_images_module_1.SpaceImagesModule,
            room_images_module_1.RoomImagesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map