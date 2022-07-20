import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Patch,
  Query,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiHeader,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { SpaceResExample } from './space.swagger.example';
import { GetAdminUser, GetUser } from 'src/custom.decorator';
import { User } from 'src/users/entities/users.entity';
import { query } from 'express';
import { Space } from './entities/spaces.entity';
const spaceResExample = new SpaceResExample();

@Controller('api/spaces')
@ApiTags('공간 API')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  // space 등록
  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth('userToken')
  @ApiOperation({
    summary: '공간 등록 API',
    description: '새로운 공간 등록(로그인한 호스트 유저만 가능).',
  })
  @ApiResponse({
    status: 201,
    description: '새로운 공간 등록 완료',
    schema: {
      example: spaceResExample.create,
    },
  })
  async create(@GetUser() user: User, @Body() createSpaceDto: CreateSpaceDto) {
    if (!user.businessNumber) {
      throw new UnauthorizedException('사업자 등록번호가 필요합니다.');
    }
    const newSpace = await this.spacesService.create(createSpaceDto, user);
    return {
      status: 201,
      description: '새로운 공간 등록 완료',
      success: true,
      data: newSpace,
    };
  }

  // 전체 공간 목록 조회
  @Get()
  @ApiOperation({
    summary: '전체 공간 목록 조회 API',
    description:
      '전체 공간 목록 조회(공간 목록 전체보기 페이지), 페이지네이션, 키워드 검색 가능(ex: localhost:3000/api/spaces?page=1&perPage=5&keyword=세미나실)',
  })
  @ApiResponse({
    status: 200,
    description: '전체 공간 목록 조회',
    schema: {
      example: spaceResExample.findAll,
    },
  })
  async findAll(@Query() query) {
    const { page, perPage, keyword, dateOrder, priceOrder, type } = query;

    const startIndex: number = perPage * (page - 1);
    const spaces = await this.spacesService.findAll(
      startIndex,
      perPage,
      keyword,
      dateOrder,
      type,
    );
    return {
      status: 200,
      description: '전체 공간 목록 조회 성공',
      success: true,
      data: {
        spaces,
      },
    };
  }

  // 내 공간 목록 조회
  @Get('/host')
  @UseGuards(AuthGuard())
  @ApiBearerAuth('userToken')
  @ApiOperation({
    summary: '내가 생성한 공간 목록 조회 API',
    description: '내가 생성한 공간 목록 조회',
  })
  @ApiHeader({
    name: 'authorization',
    description: 'Auth token',
  }) // 사용자 정의 헤더인데, 추후 token 필요한 곳에 추가하기
  @ApiResponse({
    status: 200,
    description: '내가 생성한 공간 목록 조회 성공',
    schema: {
      example: spaceResExample.findMySpaces,
    },
  })
  async findMySpaces(@GetUser() user: User, @Query() query) {
    let spaces;
    const { page, perPage } = query;
    console.log(page);
    if (!page || page === undefined || page === null || page === 0) {
      spaces = await this.spacesService.findByUser(user.id);
      return {
        status: 200,
        success: true,
        description: '내가 생성한 공간 목록 조회 성공',
        data: spaces,
      };
    }
    const startIndex: number = perPage * (page - 1);
    spaces = await this.spacesService.findByUserPaginated(
      user.id,
      startIndex,
      perPage,
    );

    return {
      status: 200,
      success: true,
      description: '내가 생성한 공간 목록 조회 성공(paginated)',
      data: { spaces },
    };
  }

  // 공간 ID로 조회(공간 상세보기)
  @Get(':id')
  @ApiOperation({
    summary: '공간 ID로 조회 API',
    description: '공간 ID로 조회하기',
  })
  @ApiResponse({
    status: 200,
    description: 'ID로 공간 조회 성공',
    schema: {},
  })
  async findOne(@Param('id') id: number) {
    const space = await this.spacesService.findOne(+id);
    return {
      status: 200,
      success: true,
      description: 'ID로 공간 조회 성공',
      data: space,
    };
  }
  // ID로 특정 공간 정보 수정
  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'ID로 특정 공간 정보 수정 API',
    description: 'ID로 특정 공간 정보 수정',
  })
  @ApiResponse({
    status: 201,
    description: 'ID로 특정 공간 정보 수정 성공',
    schema: {
      example: spaceResExample.updateSpace,
    },
  })
  async updateSpace(
    @Param('id') id: number,
    @Body() updateSpaceDto: UpdateSpaceDto,
    @GetAdminUser() admin: User,
  ) {
    const updatedSpace = await this.spacesService.update(id, updateSpaceDto);

    return {
      status: 201,
      description: 'ID로 특정 공간 정보 수정',
      success: true,
      data: { affected: updatedSpace },
    };
  }

  // 내 공간 정보 수정
  @Patch('host/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth('userToken')
  @ApiOperation({
    summary: '내 공간 정보 수정 API',
    description: '내 공간 정보 수정',
  })
  @ApiHeader({
    name: 'authorization',
    description: 'Auth token',
  }) // 사용자 정의 헤더인데, 추후 token 필요한 곳에 추가하기
  @ApiResponse({
    status: 201,
    description: '내 공간 정보 수정 성공',
    schema: {
      example: spaceResExample.updateMySpace,
    },
  })
  async updateMySpace(
    @GetUser() user: User,
    @Param('id') id: number,
    @Body() updateSpaceDto: UpdateSpaceDto,
  ) {
    const updatedSpace = await this.spacesService.updateMySpace(
      user.id,
      id,
      updateSpaceDto,
    );
    return {
      status: 201,
      description: '내 공간 정보 수정 성공',
      success: true,
      data: { affected: updatedSpace },
    };
  }

  // 특정 공간 삭제
  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '특정 공간 삭제 API',
    description: 'ID로 특정 공간을 삭제한다.',
  })
  @ApiResponse({
    status: 201,
    description: 'ID로 특정 공간 삭제 성공',
    schema: {
      example: spaceResExample.removeSpace,
    },
  })
  async removeSpace(@Param('id') id: number, @GetAdminUser() admin: User) {
    await this.spacesService.remove(id);
    return {
      status: 201,
      description: 'ID로 특정 공간 삭제 성공',
      success: true,
    };
  }

  // 내 공간 삭제
  @Delete('host/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth('userToken')
  @ApiOperation({
    summary: '내 공간 삭제 API',
    description: 'ID로 특정 공간을 삭제한다.',
  })
  @ApiHeader({
    name: 'authorization',
    description: 'Auth token',
  }) // 사용자 정의 헤더인데, 추후 token 필요한 곳에 추가하기
  @ApiResponse({
    status: 201,
    description: '내 공간 삭제 성공',
    schema: {
      example: spaceResExample.removeMySpace,
    },
  })
  async removeMySpace(@GetUser() user: User, @Param('id') id: number) {
    await this.spacesService.remove(id);
    return {
      status: 201,
      description: '내 공간 삭제 성공',
      success: true,
    };
  }
}
