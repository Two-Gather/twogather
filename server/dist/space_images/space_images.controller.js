"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceImagesController = void 0;
const common_1 = require("@nestjs/common");
const space_images_service_1 = require("./space_images.service");
const create_space_image_dto_1 = require("./dto/create-space_image.dto");
const update_space_image_dto_1 = require("./dto/update-space_image.dto");
let SpaceImagesController = class SpaceImagesController {
    constructor(spaceImagesService) {
        this.spaceImagesService = spaceImagesService;
    }
    create(createSpaceImageDto) {
        return this.spaceImagesService.create(createSpaceImageDto);
    }
    findAll() {
        return this.spaceImagesService.findAll();
    }
    findOne(id) {
        return this.spaceImagesService.findOne(+id);
    }
    update(id, updateSpaceImageDto) {
        return this.spaceImagesService.update(+id, updateSpaceImageDto);
    }
    remove(id) {
        return this.spaceImagesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_space_image_dto_1.CreateSpaceImageDto]),
    __metadata("design:returntype", void 0)
], SpaceImagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpaceImagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpaceImagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_space_image_dto_1.UpdateSpaceImageDto]),
    __metadata("design:returntype", void 0)
], SpaceImagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpaceImagesController.prototype, "remove", null);
SpaceImagesController = __decorate([
    (0, common_1.Controller)('space-images'),
    __metadata("design:paramtypes", [space_images_service_1.SpaceImagesService])
], SpaceImagesController);
exports.SpaceImagesController = SpaceImagesController;
//# sourceMappingURL=space_images.controller.js.map