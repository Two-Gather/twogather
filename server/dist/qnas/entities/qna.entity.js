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
exports.Qna = void 0;
const spaces_entity_1 = require("../../spaces/entities/spaces.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let Qna = class Qna {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Qna.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 400 }),
    __metadata("design:type", String)
], Qna.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 400 }),
    __metadata("design:type", String)
], Qna.prototype, "reply", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => spaces_entity_1.Space),
    (0, typeorm_1.JoinColumn)({ name: 'spaceId', referencedColumnName: 'id' }),
    __metadata("design:type", spaces_entity_1.Space)
], Qna.prototype, "space", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", users_entity_1.User)
], Qna.prototype, "user", void 0);
Qna = __decorate([
    (0, typeorm_1.Entity)()
], Qna);
exports.Qna = Qna;
//# sourceMappingURL=qna.entity.js.map