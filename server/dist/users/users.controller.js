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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_credential_dto_1 = require("./dto/auth-credential.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const user_swagger_example_1 = require("./user.swagger.example");
const userResExample = new user_swagger_example_1.UserResExample();
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async signUp(createUserDto) {
        const newUser = await this.usersService.register(createUserDto);
        return {
            status: 201,
            description: '유저 생성 완료(입력값 외 null값).',
            success: true,
        };
    }
    async signIn(req, userData) {
        const accessToken = await this.usersService.login(userData);
        return {
            statusCode: 200,
            message: '로그인 성공',
            success: true,
            accessToken: accessToken,
        };
    }
    async getAll() {
        const users = await this.usersService.findAll();
        return {
            statusCode: 200,
            success: true,
            message: '유저 조회 성공',
            data: users,
        };
    }
    async getMyInfo(req) {
        console.log(req.user);
        const user = await this.usersService.findOne(req.user.id);
        return {
            statusCode: 200,
            success: true,
            message: '내 정보 조회 성공',
            data: user,
        };
    }
    async getOneById(id) {
        const user = await this.usersService.findOne(id);
        return {
            statusCode: 200,
            success: true,
            message: '특정 유저 정보 조회 성공',
            data: user,
        };
    }
    async getOneByEmail(email) {
        const user = await this.usersService.findOneByEmail(email);
        console.log(user);
        return {
            status: 200,
            success: true,
            description: '이메일로 조회 성공',
            data: user,
        };
    }
    async updateUserInfo(req, userData) {
        const updatedUser = await this.usersService.update(req.user.id, userData);
        return { status: 201, description: '내 정보 수정 성공', data: updatedUser };
    }
    async removeUser(id) {
        await this.usersService.remove(id);
        return {
            status: 201,
            description: '특정 유저 삭제 성공',
            success: true,
        };
    }
    async withdrawal(req) {
        await this.usersService.remove(req.user.id);
        return {
            status: 201,
            description: '회원 탈퇴 성공',
            success: true,
        };
    }
};
__decorate([
    (0, common_1.Post)('/sign-up'),
    (0, swagger_1.ApiOperation)({
        summary: '회원가입 API',
        description: '유저를 생성한다.(이름, 성별, 프로필 사진, 휴대폰 번호, )',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '유저 생성 완료',
        schema: {
            example: userResExample.signUp,
        },
    }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/sign-in'),
    (0, swagger_1.ApiOperation)({ summary: '로그인 API', description: '로그인한다.' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '로그인 성공, access token 발급.',
        schema: {
            example: userResExample.signIn,
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_credential_dto_1.AuthCredentialDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '유저 목록 조회 API',
        description: '전체 유저를 조회한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '전체 유저 조회',
        schema: {
            example: userResExample.getAll,
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/info'),
    (0, swagger_1.ApiOperation)({
        summary: '내 정보 조회 API',
        description: '내 정보를 조회한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '내 정보 조회',
        schema: {
            example: userResExample.getMyInfo,
        },
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMyInfo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 유저 조회 API',
        description: '특정 유저를 조회한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '특정 유저 조회',
        schema: {
            example: userResExample.getOneById,
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getOneById", null);
__decorate([
    (0, common_1.Get)('/email/:email'),
    (0, swagger_1.ApiOperation)({
        summary: 'email로 조회 API',
        description: 'email로 특정 유저를 조회한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '이메일로 조회 성공',
        schema: {
            example: userResExample.getOneByEmail,
        },
    }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getOneByEmail", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiOperation)({
        summary: '내 정보 수정 API',
        description: '내 정보를 수정한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '내 정보 수정 성공',
        schema: {
            example: userResExample.updateUserInfo,
        },
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserInfo", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 유저 삭제 API',
        description: '특정 유저를 삭제한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '특정 유저 삭제 성공',
        schema: {
            example: userResExample.removeUser,
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '회원 탈퇴 API',
        description: '회원 탈퇴를 진행한다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '회원 탈퇴 성공',
        schema: {
            example: userResExample.wihdrawal,
        },
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "withdrawal", null);
UsersController = __decorate([
    (0, common_1.Controller)('api/users'),
    (0, swagger_1.ApiTags)('유저 API'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map