"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomImagesService = void 0;
const common_1 = require("@nestjs/common");
let RoomImagesService = class RoomImagesService {
    create(createRoomImageDto) {
        return 'This action adds a new roomImage';
    }
    findAll() {
        return `This action returns all roomImages`;
    }
    findOne(id) {
        return `This action returns a #${id} roomImage`;
    }
    update(id, updateRoomImageDto) {
        return `This action updates a #${id} roomImage`;
    }
    remove(id) {
        return `This action removes a #${id} roomImage`;
    }
};
RoomImagesService = __decorate([
    (0, common_1.Injectable)()
], RoomImagesService);
exports.RoomImagesService = RoomImagesService;
//# sourceMappingURL=room_images.service.js.map