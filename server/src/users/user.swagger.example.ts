export class UserResExample {
  public readonly signUp = {
    status: 201,
    description: '유저 생성 완료',
    success: true,
  };
  public readonly signIn = {
    statusCode: 200,
    message: '로그인 성공',
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q1OTU0QG5hdmVyLmNvbSIsImlhdCI6MTY1NzczNzY2MSwiZXhwIjoxNjU3NzczNjYxfQ.BHl0INbKtM258Rao4juL8LZ0z8_LHJVslJZneo4IjZ8',
    success: true,
  };

  public readonly getAll = {
    statusCode: 200,
    message: '유저 조회 성공',
    success: true,
    data: [
      {
        id: 41,
        nickname: 'test678',
        email: 'test678@naver.com',
        password:
          '$2a$10$NWv0JutXwYJUaA8oUX45weRdBNuTpO3AjjlizhdSpUDcwjNwV2k7q',
        name: null,
        sex: null,
        profileImage: null,
        phoneNumber: null,
        businessNumber: null,
        businessName: null,
        businessAddress: null,
        accountNumber: null,
      },
      {
        id: 43,
        nickname: 'test6789',
        email: 'test6789@naver.com',
        password:
          '$2a$10$WKS7MfQZiVoZxvvIrm3FJ.f.o8lqTjPChx2ZL3ze.IifGLqV3SoRm',
        name: null,
        sex: null,
        profileImage: null,
        phoneNumber: null,
        businessNumber: null,
        businessName: null,
        businessAddress: null,
        accountNumber: null,
      },
    ],
  };

  public readonly getOneById = {
    statusCode: 200,
    success: true,
    message: '특정 유저 정보 조회 성공',
    data: {
      id: 41,
      nickname: 'test678',
      email: 'test678@naver.com',
      password: '$2a$10$NWv0JutXwYJUaA8oUX45weRdBNuTpO3AjjlizhdSpUDcwjNwV2k7q',
      name: null,
      sex: null,
      profileImage: null,
      phoneNumber: null,
      businessNumber: null,
      businessName: null,
      businessAddress: null,
      accountNumber: null,
    },
  };

  public readonly getMyInfo = {
    statusCode: 200,
    success: true,
    message: '내 정보 조회 성공',
    data: {
      id: 49,
      nickname: 'test5954',
      email: 'test5954@naver.com',
      password: '$2a$10$yEQo53ifyQiSlIKIZDZG6.ElZM0C5piTmmY704SfRl8HvYAYgIBYa',
      name: null,
      sex: null,
      profileImage: null,
      phoneNumber: null,
      businessNumber: null,
      businessName: null,
      businessAddress: null,
      accountNumber: null,
    },
  };

  public readonly getOneByEmail = {
    status: 200,
    success: true,
    description: '이메일로 조회 성공',
    data: {
      id: 41,
      nickname: 'test678',
      email: 'test678@naver.com',
      password: '$2a$10$NWv0JutXwYJUaA8oUX45weRdBNuTpO3AjjlizhdSpUDcwjNwV2k7q',
      name: null,
      sex: null,
      profileImage: null,
      phoneNumber: null,
      businessNumber: null,
      businessName: null,
      businessAddress: null,
      accountNumber: null,
    },
  };

  public readonly updateUserInfo = {
    status: 201,
    description: '내 정보 수정 성공',
    success: true,
    data: {
      id: 49,
      nickname: 'test5954',
      email: 'test5954@naver.com',
      password: 'test5954',
      name: null,
      sex: null,
      profileImage: null,
      phoneNumber: '01012345671',
      businessNumber: null,
      businessName: null,
      businessAddress: null,
      accountNumber: null,
    },
  };

  public readonly removeUser = {
    status: 201,
    description: '특정 유저 삭제 성공',
    success: true,
  };

  public readonly wihdrawal = {
    status: 201,
    description: '회원 탈퇴 성공',
    success: true,
  };
}
