"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpaceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_space_dto_1 = require("./create-space.dto");
class UpdateSpaceDto extends (0, mapped_types_1.PartialType)(create_space_dto_1.CreateSpaceDto) {
}
exports.UpdateSpaceDto = UpdateSpaceDto;
//# sourceMappingURL=update-space.dto.js.map