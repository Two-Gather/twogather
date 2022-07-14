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
exports.SpacesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const spaces_entity_1 = require("./entities/spaces.entity");
let SpacesService = class SpacesService {
    constructor(spacesRepository) {
        this.spacesRepository = spacesRepository;
    }
    async create(spaceData) {
        try {
            return await this.spacesRepository.save(spaceData);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        return this.spacesRepository.find();
    }
    async findOne(id) {
        return this.spacesRepository.findOneBy({
            id,
        });
    }
    async remove(id) {
        await this.spacesRepository.delete(id);
    }
};
SpacesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(spaces_entity_1.Space)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpacesService);
exports.SpacesService = SpacesService;
//# sourceMappingURL=spaces.service.js.map