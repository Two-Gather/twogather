"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QnasModule = void 0;
const common_1 = require("@nestjs/common");
const qnas_service_1 = require("./qnas.service");
const qnas_controller_1 = require("./qnas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const qna_entity_1 = require("./entities/qna.entity");
let QnasModule = class QnasModule {
};
QnasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qna_entity_1.Qna])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [qnas_controller_1.QnasController],
        providers: [qnas_service_1.QnasService],
    })
], QnasModule);
exports.QnasModule = QnasModule;
//# sourceMappingURL=qnas.module.js.map