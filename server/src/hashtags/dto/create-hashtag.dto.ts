import { IsString } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class CreateHashtagDto {
  @IsString()
  @ApiProperty({ description: 'ํด์ํ๊ทธ' })
  readonly tag: string;
}
