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
exports.QnasController = void 0;
const common_1 = require("@nestjs/common");
const qnas_service_1 = require("./qnas.service");
const create_qna_dto_1 = require("./dto/create-qna.dto");
const update_qna_dto_1 = require("./dto/update-qna.dto");
let QnasController = class QnasController {
    constructor(qnasService) {
        this.qnasService = qnasService;
    }
    create(createQnaDto) {
        return this.qnasService.create(createQnaDto);
    }
    findAll() {
        return this.qnasService.findAll();
    }
    findOne(id) {
        return this.qnasService.findOne(+id);
    }
    update(id, updateQnaDto) {
        return this.qnasService.update(+id, updateQnaDto);
    }
    remove(id) {
        return this.qnasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qna_dto_1.CreateQnaDto]),
    __metadata("design:returntype", void 0)
], QnasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QnasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QnasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_qna_dto_1.UpdateQnaDto]),
    __metadata("design:returntype", void 0)
], QnasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QnasController.prototype, "remove", null);
QnasController = __decorate([
    (0, common_1.Controller)('qnas'),
    __metadata("design:paramtypes", [qnas_service_1.QnasService])
], QnasController);
exports.QnasController = QnasController;
//# sourceMappingURL=qnas.controller.js.map