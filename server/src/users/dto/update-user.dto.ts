import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

// UpdateUserDto는 CreateMovieDto와 인터페이스 동일하나 필수 값이 아니다
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  @ApiProperty({ description: '이메일' })
  readonly email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ description: '비밀번호(4~20자)' })
  readonly password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '닉네임은 영어 대/소문자, 숫자만 가능합니다',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ description: '닉네임(4~20자, 영문 대소문자, 숫자만 가능)' })
  readonly nickname: string;
}
