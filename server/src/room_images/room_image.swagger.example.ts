export class RoomImageResExample {
  public readonly create = {
    status: 201,
    description: '새로운 roomImage 등록 완료',
    success: true,
    data: {
      id: 1,
      imageUrl: 'https://s3.image.resizing.com',
      room: {
        id: 3,
        name: '24평 좋은 방',
        capacity: 4,
        price: 120000,
        description: '이 방은 좋은 방입니다.',
        space: {
          type: '세미나실',
          address: '서울시 어쩌구',
          name: '좋은 세미나실',
          notice: '공지사항 어쩌구 저쩌구',
          intro: '넓고 깔끔',
          user: {
            id: 57,
            isAdmin: false,
            nickname: 'test2',
            email: 'test2@naver.com',
            password:
              '$2a$10$Omwa5FeAGh9Jieo2kPDa2O5vzIaYoxBbuhAVDCNTqNFCrkyleAKZy',
            name: '김태훈',
            sex: null,
            profileImage: null,
            phoneNumber: null,
            businessNumber: null,
            businessName: null,
            businessAddress: null,
            accountNumber: null,
            reservations: [],
            spaces: [
              {
                id: 25,
                type: '스터디룸',
                address: '여기서 멀어요',
                name: '스터디룸 ㅋㅋ',
                notice: '공지사항 어쩌구 저쩌구',
                intro: '넓고 깔끔',
                hashtags: [],
              },
            ],
          },
          id: 26,
        },
      },
    },
  };
  public readonly findAll = {
    status: 200,
    description: '전체 roomImages(URL) 목록 조회 성공',
    success: true,
    data: [
      {
        id: 3,
        name: '24평 좋은 방',
        capacity: 4,
        price: 120000,
        description: '이 방은 좋은 방입니다.',
        space: {
          type: '세미나실',
          address: '서울시 어쩌구',
          name: '좋은 세미나실',
          notice: '공지사항 어쩌구 저쩌구',
          intro: '넓고 깔끔',
          user: {
            id: 57,
            isAdmin: false,
            nickname: 'test2',
            email: 'test2@naver.com',
            password:
              '$2a$10$Omwa5FeAGh9Jieo2kPDa2O5vzIaYoxBbuhAVDCNTqNFCrkyleAKZy',
            name: '김태훈',
            sex: null,
            profileImage: null,
            phoneNumber: null,
            businessNumber: null,
            businessName: null,
            businessAddress: null,
            accountNumber: null,
            reservations: [],
            spaces: [
              {
                id: 25,
                type: '스터디룸',
                address: '여기서 멀어요',
                name: '스터디룸 ㅋㅋ',
                notice: '공지사항 어쩌구 저쩌구',
                intro: '넓고 깔끔',
                hashtags: [],
              },
            ],
          },
          id: 26,
        },
      },
      {
        id: 4,
        name: '24평 좋은 방',
        capacity: 4,
        price: 120000,
        description: '이 방은 좋은 방입니다.',
        space: {
          type: '세미나실',
          address: '서울시 어쩌구',
          name: '좋은 세미나실',
          notice: '공지사항 어쩌구 저쩌구',
          intro: '넓고 깔끔',
          user: {
            id: 57,
            isAdmin: false,
            nickname: 'test2',
            email: 'test2@naver.com',
            password:
              '$2a$10$Omwa5FeAGh9Jieo2kPDa2O5vzIaYoxBbuhAVDCNTqNFCrkyleAKZy',
            name: '김태훈',
            sex: null,
            profileImage: null,
            phoneNumber: null,
            businessNumber: null,
            businessName: null,
            businessAddress: null,
            accountNumber: null,
            reservations: [],
            spaces: [
              {
                id: 25,
                type: '스터디룸',
                address: '여기서 멀어요',
                name: '스터디룸 ㅋㅋ',
                notice: '공지사항 어쩌구 저쩌구',
                intro: '넓고 깔끔',
                hashtags: [],
              },
            ],
          },
          id: 26,
        },
      },
    ],
  };

  public readonly findOne = {
    status: 200,
    success: true,
    description: 'Id로 roomImage(URL) 조회 성공',
    data: {
      id: 4,
      name: '24평 좋은 방',
      capacity: 4,
      price: 120000,
      description: '이 방은 좋은 방입니다.',
      space: {
        type: '세미나실',
        address: '서울시 어쩌구',
        name: '좋은 세미나실',
        notice: '공지사항 어쩌구 저쩌구',
        intro: '넓고 깔끔',
        user: {
          id: 57,
          isAdmin: false,
          nickname: 'test2',
          email: 'test2@naver.com',
          password:
            '$2a$10$Omwa5FeAGh9Jieo2kPDa2O5vzIaYoxBbuhAVDCNTqNFCrkyleAKZy',
          name: '김태훈',
          sex: null,
          profileImage: null,
          phoneNumber: null,
          businessNumber: null,
          businessName: null,
          businessAddress: null,
          accountNumber: null,
          reservations: [],
          spaces: [
            {
              id: 25,
              type: '스터디룸',
              address: '여기서 멀어요',
              name: '스터디룸 ㅋㅋ',
              notice: '공지사항 어쩌구 저쩌구',
              intro: '넓고 깔끔',
              hashtags: [],
            },
          ],
        },
        id: 26,
      },
    },
  };

  public readonly updateRoomImage = {
    status: 201,
    description: 'roomImageId로 특정 roomImage(URL) 정보 수정',
    success: true,
    data: { affected: true },
  };

  public readonly removeRoomImage = {
    status: 201,
    description: 'roomImageId로 특정 roomImage 삭제 성공',
    success: true,
  };
}