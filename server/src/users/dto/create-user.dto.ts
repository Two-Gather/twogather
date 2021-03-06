import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ description: '이메일' })
  readonly email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ description: '비밀번호(4~20자)' })
  readonly password: string;

  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({
    description: '닉네임(4~20자, 영문 대소문자, 한글, 숫자만 가능)',
  })
  readonly nickname: string;

  @ApiPropertyOptional({
    description: '로그인 유형(로컬, 카카오 등)',
  })
  readonly loginType: string;
}
