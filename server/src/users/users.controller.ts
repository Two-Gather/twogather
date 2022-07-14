import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBasicAuth,
} from '@nestjs/swagger';
import { UserResExample } from './user.swagger.example';
const userResExample = new UserResExample();

@Controller('api/users')
@ApiTags('유저 API')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 회원가입
  @Post('/sign-up')
  @ApiOperation({
    summary: '회원가입 API',
    description: '유저를 생성한다.(이름, 성별, 프로필 사진, 휴대폰 번호, )',
  })
  @ApiResponse({
    status: 201,
    description: '유저 생성 완료',
    schema: {
      example: userResExample.signUp,
    },
  })
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const newUser = await this.usersService.register(createUserDto);
    return {
      status: 201,
      description: '유저 생성 완료(입력값 외 null값).',
      success: true,
    };
  }

  // 로그인
  @Post('/sign-in')
  @ApiOperation({ summary: '로그인 API', description: '로그인한다.' })
  @ApiResponse({
    status: 200,
    description: '로그인 성공, access token 발급.',
    schema: {
      example: userResExample.signIn,
    },
  })
  async signIn(@Req() req, @Body(ValidationPipe) userData: AuthCredentialDto) {
    const accessToken = await this.usersService.login(userData);
    return {
      statusCode: 200,
      message: '로그인 성공',
      success: true,
      accessToken: accessToken,
    };
  }

  @Get()
  @ApiOperation({
    summary: '유저 목록 조회 API',
    description: '전체 유저를 조회한다.',
  })
  @ApiResponse({
    status: 200,
    description: '전체 유저 조회',
    schema: {
      example: userResExample.getAll,
    },
  })
  async getAll() {
    const users = await this.usersService.findAll();
    return {
      statusCode: 200,
      success: true,
      message: '유저 조회 성공',
      data: users,
    };
  }

  // 내 정보조회
  @Get('/info')
  @ApiOperation({
    summary: '내 정보 조회 API',
    description: '내 정보를 조회한다.',
  })
  @ApiResponse({
    status: 200,
    description: '내 정보 조회',
    schema: {
      example: userResExample.getMyInfo,
    },
  })
  @UseGuards(AuthGuard())
  async getMyInfo(@Req() req) {
    console.log(req.user);
    const user = await this.usersService.findOne(req.user.id);
    return {
      statusCode: 200,
      success: true,
      message: '내 정보 조회 성공',
      data: user,
    };
  }

  // admin 기능
  @Get('/:id')
  @ApiOperation({
    summary: '특정 유저 조회 API',
    description: '특정 유저를 조회한다.',
  })
  @ApiResponse({
    status: 200,
    description: '특정 유저 조회',
    schema: {
      example: userResExample.getOneById,
    },
  })
  async getOneById(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    return {
      statusCode: 200,
      success: true,
      message: '특정 유저 정보 조회 성공',
      data: user,
    };
  }

  // admin 기능
  @Get('/email/:email')
  @ApiOperation({
    summary: 'email로 조회 API',
    description: 'email로 특정 유저를 조회한다.',
  })
  @ApiResponse({
    status: 200,
    description: '이메일로 조회 성공',
    schema: {
      example: userResExample.getOneByEmail,
    },
  })
  async getOneByEmail(@Param('email') email: string) {
    const user = await this.usersService.findOneByEmail(email);
    console.log(user);
    return {
      status: 200,
      success: true,
      description: '이메일로 조회 성공',
      data: user,
    };
  }

  //마이페이지 수정
  @Patch()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '내 정보 수정 API',
    description: '내 정보를 수정한다.',
  })
  @ApiResponse({
    status: 201,
    description: '내 정보 수정 성공',
    schema: {
      example: userResExample.updateUserInfo,
    },
  })
  async updateUserInfo(
    @Req() req,
    @Body(ValidationPipe) userData: UpdateUserDto,
  ) {
    const updatedUser = await this.usersService.update(req.user.id, userData);

    return { status: 201, description: '내 정보 수정 성공', data: updatedUser };
  }

  // admin 기능
  @Delete('/:id')
  @ApiOperation({
    summary: '특정 유저 삭제 API',
    description: '특정 유저를 삭제한다.',
  })
  @ApiResponse({
    status: 201,
    description: '특정 유저 삭제 성공',
    schema: {
      example: userResExample.removeUser,
    },
  })
  async removeUser(@Param('id') id: number) {
    await this.usersService.remove(id);
    return {
      status: 201,
      description: '특정 유저 삭제 성공',
      success: true,
    };
  }

  // 회원 탈퇴
  @Delete()
  @UseGuards(AuthGuard())
  @ApiBasicAuth()
  @ApiOperation({
    summary: '회원 탈퇴 API',
    description: '회원 탈퇴를 진행한다.',
  })
  @ApiResponse({
    status: 201,
    description: '회원 탈퇴 성공',
    schema: {
      example: userResExample.wihdrawal,
    },
  })
  async withdrawal(@Req() req) {
    await this.usersService.remove(req.user.id);
    return {
      status: 201,
      description: '회원 탈퇴 성공',
      success: true,
    };
  }
}
