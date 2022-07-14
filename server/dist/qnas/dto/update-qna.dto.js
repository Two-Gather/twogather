"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQnaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_qna_dto_1 = require("./create-qna.dto");
class UpdateQnaDto extends (0, mapped_types_1.PartialType)(create_qna_dto_1.CreateQnaDto) {
}
exports.UpdateQnaDto = UpdateQnaDto;
//# sourceMappingURL=update-qna.dto.js.map