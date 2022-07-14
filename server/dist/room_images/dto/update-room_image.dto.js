"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoomImageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_room_image_dto_1 = require("./create-room_image.dto");
class UpdateRoomImageDto extends (0, mapped_types_1.PartialType)(create_room_image_dto_1.CreateRoomImageDto) {
}
exports.UpdateRoomImageDto = UpdateRoomImageDto;
//# sourceMappingURL=update-room_image.dto.js.map