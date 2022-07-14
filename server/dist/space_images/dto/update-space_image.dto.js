"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpaceImageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_space_image_dto_1 = require("./create-space_image.dto");
class UpdateSpaceImageDto extends (0, mapped_types_1.PartialType)(create_space_image_dto_1.CreateSpaceImageDto) {
}
exports.UpdateSpaceImageDto = UpdateSpaceImageDto;
//# sourceMappingURL=update-space_image.dto.js.map