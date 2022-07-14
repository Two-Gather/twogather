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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomImage = void 0;
const rooms_entity_1 = require("../../rooms/entities/rooms.entity");
const typeorm_1 = require("typeorm");
let RoomImage = class RoomImage {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], RoomImage.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rooms_entity_1.Room),
    (0, typeorm_1.JoinColumn)({ name: 'roomId', referencedColumnName: 'id' }),
    __metadata("design:type", rooms_entity_1.Room)
], RoomImage.prototype, "space", void 0);
RoomImage = __decorate([
    (0, typeorm_1.Entity)()
], RoomImage);
exports.RoomImage = RoomImage;
//# sourceMappingURL=room_image.entity.js.map