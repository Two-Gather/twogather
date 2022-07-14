export declare class UserResExample {
    readonly signUp: {
        status: number;
        description: string;
        success: boolean;
    };
    readonly signIn: {
        statusCode: number;
        message: string;
        accessToken: string;
        success: boolean;
    };
    readonly getAll: {
        statusCode: number;
        message: string;
        success: boolean;
        data: {
            id: number;
            nickname: string;
            email: string;
            password: string;
            name: any;
            sex: any;
            profileImage: any;
            phoneNumber: any;
            businessNumber: any;
            businessName: any;
            businessAddress: any;
            accountNumber: any;
        }[];
    };
    readonly getOneById: {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            id: number;
            nickname: string;
            email: string;
            password: string;
            name: any;
            sex: any;
            profileImage: any;
            phoneNumber: any;
            businessNumber: any;
            businessName: any;
            businessAddress: any;
            accountNumber: any;
        };
    };
    readonly getMyInfo: {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            id: number;
            nickname: string;
            email: string;
            password: string;
            name: any;
            sex: any;
            profileImage: any;
            phoneNumber: any;
            businessNumber: any;
            businessName: any;
            businessAddress: any;
            accountNumber: any;
        };
    };
    readonly getOneByEmail: {
        status: number;
        success: boolean;
        description: string;
        data: {
            id: number;
            nickname: string;
            email: string;
            password: string;
            name: any;
            sex: any;
            profileImage: any;
            phoneNumber: any;
            businessNumber: any;
            businessName: any;
            businessAddress: any;
            accountNumber: any;
        };
    };
    readonly updateUserInfo: {
        status: number;
        description: string;
        success: boolean;
        data: {
            id: number;
            nickname: string;
            email: string;
            password: string;
            name: any;
            sex: any;
            profileImage: any;
            phoneNumber: string;
            businessNumber: any;
            businessName: any;
            businessAddress: any;
            accountNumber: any;
        };
    };
    readonly removeUser: {
        status: number;
        description: string;
        success: boolean;
    };
    readonly wihdrawal: {
        status: number;
        description: string;
        success: boolean;
    };
}
