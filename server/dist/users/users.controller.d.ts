import { AuthCredentialDto } from './dto/auth-credential.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(createUserDto: CreateUserDto): Promise<{
        status: number;
        description: string;
        success: boolean;
    }>;
    signIn(req: any, userData: AuthCredentialDto): Promise<{
        statusCode: number;
        message: string;
        success: boolean;
        accessToken: string;
    }>;
    getAll(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: import("./entities/users.entity").User[];
    }>;
    getMyInfo(req: any): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: import("./entities/users.entity").User;
    }>;
    getOneById(id: number): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: import("./entities/users.entity").User;
    }>;
    getOneByEmail(email: string): Promise<{
        status: number;
        success: boolean;
        description: string;
        data: import("./entities/users.entity").User;
    }>;
    updateUserInfo(req: any, userData: UpdateUserDto): Promise<{
        status: number;
        description: string;
        data: import("./entities/users.entity").User;
    }>;
    removeUser(id: number): Promise<{
        status: number;
        description: string;
        success: boolean;
    }>;
    withdrawal(req: any): Promise<{
        status: number;
        description: string;
        success: boolean;
    }>;
}
