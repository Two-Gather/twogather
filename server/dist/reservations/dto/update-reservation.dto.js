"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reservation_dto_1 = require("./create-reservation.dto");
class UpdateReservationDto extends (0, mapped_types_1.PartialType)(create_reservation_dto_1.CreateReservationDto) {
}
exports.UpdateReservationDto = UpdateReservationDto;
//# sourceMappingURL=update-reservation.dto.js.map