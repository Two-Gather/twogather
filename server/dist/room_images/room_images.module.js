"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomImagesModule = void 0;
const common_1 = require("@nestjs/common");
const room_images_service_1 = require("./room_images.service");
const room_images_controller_1 = require("./room_images.controller");
const typeorm_1 = require("@nestjs/typeorm");
const room_image_entity_1 = require("./entities/room_image.entity");
let RoomImagesModule = class RoomImagesModule {
};
RoomImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([room_image_entity_1.RoomImage])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [room_images_controller_1.RoomImagesController],
        providers: [room_images_service_1.RoomImagesService],
    })
], RoomImagesModule);
exports.RoomImagesModule = RoomImagesModule;
//# sourceMappingURL=room_images.module.js.map