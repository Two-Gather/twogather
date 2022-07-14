"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceImagesModule = void 0;
const common_1 = require("@nestjs/common");
const space_images_service_1 = require("./space_images.service");
const space_images_controller_1 = require("./space_images.controller");
const typeorm_1 = require("@nestjs/typeorm");
const space_image_entity_1 = require("./entities/space_image.entity");
let SpaceImagesModule = class SpaceImagesModule {
};
SpaceImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([space_image_entity_1.SpaceImage])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [space_images_controller_1.SpaceImagesController],
        providers: [space_images_service_1.SpaceImagesService],
    })
], SpaceImagesModule);
exports.SpaceImagesModule = SpaceImagesModule;
//# sourceMappingURL=space_images.module.js.map