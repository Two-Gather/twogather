import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import * as bcrypt from 'bcryptjs';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // 유저 생성
  async register(userData: CreateUserDto): Promise<User> {
    const newUser: User = this.usersRepository.create(userData);
    const salt: string = await bcrypt.genSalt();
    const { password } = newUser;
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;
    try {
      await this.usersRepository.save(newUser);
      newUser.password = null;
      return newUser;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('이미 존재하는 이메일입니다. ');
      } else {
        throw new InternalServerErrorException();
      }
      throw error;
    }
  }

  async login(userData: AuthCredentialDto): Promise<string> {
    const { email, password } = userData;
    const user = await this.usersRepository.findOneBy({ email });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };

      const accessToken = await this.jwtService.sign(payload);
      return accessToken;
    } else {
      throw new UnauthorizedException('잘못된 이메일 또는 비밀번호 입니다.');
    }
  }
  // 유저 전체 조회
  async findAll(): Promise<User[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      throw error;
    }
  }

  // id로 유저 조회
  async findOne(id: number): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({
        id,
      });
    } catch (error) {
      throw error;
    }
  }

  // email로 유저 조회
  async findOneByEmail(email: string) {
    try {
      console.log(email);
      return await this.usersRepository.findOneBy({ email });
    } catch (error) {
      throw error;
    }
  }

  // 유저 갱신
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const { password, ...updateUserInfo } = updateUserDto;
      const salt: string = await bcrypt.genSalt();
      const hashedPassword: string = await bcrypt.hash(password, salt);
      const updatedUser = { password: hashedPassword, ...updateUserInfo };

      await this.usersRepository.update(id, updatedUser);

      return await this.usersRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }
  // 유저 삭제
  async remove(id: number): Promise<void> {
    try {
      const deleteUser = await this.usersRepository.delete(id);
      if (!deleteUser.affected) {
        throw new NotFoundException({ description: '삭제할 유저가 없습니다.' });
      }
    } catch (error) {
      throw error;
    }
  }
}
