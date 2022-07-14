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
exports.RoomImagesController = void 0;
const common_1 = require("@nestjs/common");
const room_images_service_1 = require("./room_images.service");
const create_room_image_dto_1 = require("./dto/create-room_image.dto");
const update_room_image_dto_1 = require("./dto/update-room_image.dto");
let RoomImagesController = class RoomImagesController {
    constructor(roomImagesService) {
        this.roomImagesService = roomImagesService;
    }
    create(createRoomImageDto) {
        return this.roomImagesService.create(createRoomImageDto);
    }
    findAll() {
        return this.roomImagesService.findAll();
    }
    findOne(id) {
        return this.roomImagesService.findOne(+id);
    }
    update(id, updateRoomImageDto) {
        return this.roomImagesService.update(+id, updateRoomImageDto);
    }
    remove(id) {
        return this.roomImagesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_image_dto_1.CreateRoomImageDto]),
    __metadata("design:returntype", void 0)
], RoomImagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomImagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomImagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_room_image_dto_1.UpdateRoomImageDto]),
    __metadata("design:returntype", void 0)
], RoomImagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoomImagesController.prototype, "remove", null);
RoomImagesController = __decorate([
    (0, common_1.Controller)('room-images'),
    __metadata("design:paramtypes", [room_images_service_1.RoomImagesService])
], RoomImagesController);
exports.RoomImagesController = RoomImagesController;
//# sourceMappingURL=room_images.controller.js.map