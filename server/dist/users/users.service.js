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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async register(userData) {
        const newUser = this.usersRepository.create(userData);
        const salt = await bcrypt.genSalt();
        const { password } = newUser;
        const hashedPassword = await bcrypt.hash(password, salt);
        newUser.password = hashedPassword;
        try {
            await this.usersRepository.save(newUser);
            newUser.password = null;
            return newUser;
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('이미 존재하는 이메일입니다. ');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
            throw error;
        }
    }
    async login(userData) {
        const { email, password } = userData;
        const user = await this.usersRepository.findOneBy({ email });
        console.log(user);
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { email };
            const accessToken = await this.jwtService.sign(payload);
            return accessToken;
        }
        else {
            throw new common_1.UnauthorizedException('잘못된 이메일 또는 비밀번호 입니다.');
        }
    }
    async findAll() {
        try {
            return await this.usersRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            return await this.usersRepository.findOneByOrFail({
                id,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findOneByEmail(email) {
        try {
            console.log(email);
            return await this.usersRepository.findOneBy({ email });
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateUserDto) {
        try {
            const { password } = updateUserDto, updateUserInfo = __rest(updateUserDto, ["password"]);
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const updatedUser = Object.assign({ password: hashedPassword }, updateUserInfo);
            await this.usersRepository.update(id, updatedUser);
            return await this.usersRepository.findOneBy({ id });
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const deleteUser = await this.usersRepository.delete(id);
            if (!deleteUser.affected) {
                throw new common_1.NotFoundException({ description: '삭제할 유저가 없습니다.' });
            }
        }
        catch (error) {
            throw error;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map