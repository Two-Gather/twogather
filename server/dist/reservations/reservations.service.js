"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
let ReservationsService = class ReservationsService {
    create(createReservationDto) {
        return 'This action adds a new reservation';
    }
    findAll() {
        return `This action returns all reservations`;
    }
    findOne(id) {
        return `This action returns a #${id} reservation`;
    }
    update(id, updateReservationDto) {
        return `This action updates a #${id} reservation`;
    }
    remove(id) {
        return `This action removes a #${id} reservation`;
    }
};
ReservationsService = __decorate([
    (0, common_1.Injectable)()
], ReservationsService);
exports.ReservationsService = ReservationsService;
//# sourceMappingURL=reservations.service.js.map