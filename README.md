# **TWOGATHER**

### **공간 대여 플랫폼**

<br>

### 1. 기획 의도, 목적

<!-- - 조사할 문제, 조사할 문제가 흥미로운 이유 -->
- 조사한 문제: 사용자가 간편하게 호스팅할 공간을 등록하고 또 이용할 수 있는 서비스가 필요 
<!-- - 프로젝트 목적 및 필요성 (어떤 사용자의, 어떤 문제를 해결하는지) --> 
- 프로젝트 목적: 사용자가 Host와 동시에 Guest가 되는 편리한 서비스 개발 
<!-- - 프로젝트가 제공하는 기대 효과와 활용 방안 --> 
- 기대 효과: 간편한 공간 예약 및 호스팅
- 활용 방안: 공간 예약, 호스팅

### 2. 웹 서비스의 주제 및, 최종적인 메인 기능과 서브 기능 설명
- 주제: 공간 대여 플랫폼
- 메인 기능: 시간대별 공간 예약, 공간에 대한 다양한 정보 제공
- 서브 기능
  - Q&A, 리뷰 등을 통한 게스트와 호스트의 상호작용
  - 관리자 공지사항 기능

- 기능
  #### 1️⃣ 회원가입, 로그인, 로그아웃
  #### 2️⃣ 마이페이지
    - 내 정보 수정 및 프로필 사진 등록
    - 내 예약 내역
    - 내가 작성한 리뷰 및 Q&A 목록
  #### 3️⃣ 공간 조회
    - 지역, 공간유형, 공간명, 해시태그 등 키워드로 공간 검색
    - 등록순, 가격순 등 공간 조회 필터링
  #### 4️⃣ 공간 예약
    - 공간 이미지 슬라이드
    - 공간 설명 및 지도
    - 날짜별 예약 불가능한 시간대 필터링
    - 시간대별 공간 예약
  #### 5️⃣ 공간 호스팅
    - 호스트 등록
    - 공간/룸 등록 및 수정, 삭제
    - 내 공간 예약 내역 관리
    - 내 공간 리뷰 및 Q&A 관리
  #### 6️⃣ 관리자
    - 유저 관리
    - 전체 예약 내역 관리
    - 공지사항

### 3. 프로젝트만의 차별점, 기대 효과

- 기존 서비스의 단점 -> 본 프로젝트의 장점  
  기존 서비스는 공간 호스팅을 하려면 호스트 계정을 따로 생성해야하는 번거로움이 있었음.  
  → 본 프로젝트는 호스트 계정을 따로 생성할 필요 없이 일반 유저도 호스트 등록만 하면 공간 호스팅이 가능  
  → 호스팅 접근성 상승
 
- 본 웹서비스의 사용자가 경험할 효과 및 장점  
  다양한 필터와 검색을 통해 편리하게 공간 검색 가능  
  복잡한 로그인 없이 계정 하나로 공간 호스팅과 공간 대여 예약 가능  


### 4. 프로젝트 구성

- 사용 스택  
  - 프론트엔드  
    - React  
    - Styled-components  
    - Axios  
  - 백엔드
    - TypeScript
    - 프레임 워크: Nest
    - DB: MySQL, typeORM
    - DevOps: Jenkins, AWS EC2, S3(lambda)
    - 기타 협업도구 : Swagger, Postman, Slack  
    
- 와이어프레임 (Figma 등 링크 삽입)
  Figma - https://www.figma.com/file/11R0lkBAQmi4Pv2Js7fkUX/elice-project2?node-id=0%3A1

- 스토리보드 및 유저 시나리오
  - 홈 화면에서 어떤 버튼을 클릭하여 어떤 페이지로 이동할 수 있다.
  - 이 버튼을 클릭하면 이런 웹 서비스가 실행된다.

#### 5. 구성원 역할

| 이름   | 역할 | 구현 기능 |
| ---- | ---- | --------- |
| 강예정 |프론트엔드|공간,룸 CRUD, 유저목록 |
| 김미지 |프론트엔드|공간 상세, 공간 예약, 호스트/어드민 예약관리, 호스트 Q&A 관리|
| 나해란 |프론트엔드|홈, 공간 목록, 공지사항|
| 남연진 |프론트엔드|로그인, 로그아웃, 회원가입, 마이페이지, 리뷰, Q&A|
| 김태훈 | 백엔드 |EC2 MySQL 서버 생성 및 관리, 관계형 DB 모델링 및 ERD 작성, REST API 개발 및 Swagger 문서 작성, 인증/인가 구현, Slack Git 연동 등|
| 장종원 | 백엔드 |EC2 Jenkins(CI&CD), DB 구축 및 REST API 개발, API Document(Swagger), AWS S3(lambda)|


# 6. 프로젝트 구조도

---

## 🧑‍💻 로그인
![로그인](https://user-images.githubusercontent.com/28006318/193759982-6c57d6d5-c2f5-4311-8015-7f0bea0691a6.png)


## 🧑‍💻 예약 등록

![공간 대여 (1)](https://user-images.githubusercontent.com/28006318/193760089-ab0d2a4d-ad4a-488f-854e-aa92ea721aa8.png)


## 🧑‍💻 Figma 사진
<img width="700" alt="figma사진" src="https://user-images.githubusercontent.com/28006318/193760138-2ce2a78f-0235-4266-9191-b436f8a69c0a.png">

## 🧑‍💻 Figma 링크
https://www.figma.com/file/11R0lkBAQmi4Pv2Js7fkUX/Twogather?node-id=0%3A1

#7. API명세서

## 🧑‍💻 API명세서
![api명세서](https://user-images.githubusercontent.com/28006318/193760322-bf437f43-55f4-4d7f-bb8d-17a3b847a2a0.png)

## 🧑‍💻 아키텍처 구성도
<img width="676" alt="아키텍쳐구성도" src="https://user-images.githubusercontent.com/28006318/193760501-c78f9ab7-3731-4b50-acf2-7e75091eefa7.png">

## 🧑‍💻 ERD
![erd](https://user-images.githubusercontent.com/28006318/193760576-1a64611b-4ab6-4fc0-884a-087e81ddc227.png)


## 🧑‍💻 웹페이지 미리보기

### 메인페이지
<img width="700" alt="메인페이지1" src="https://user-images.githubusercontent.com/28006318/193761251-dab5a3a7-5468-4c8c-acb4-7472318e28d5.png">

### 공간목록 조회페이지
<img width="700" alt="메인페이지2" src="https://user-images.githubusercontent.com/28006318/193761282-661ef0fb-80fb-45bd-ac02-cb40cd4cb183.png">

### 공간 상세 페이지
<img width="700" alt="상세페이지1" src="https://user-images.githubusercontent.com/28006318/193761291-02d34b55-e4da-40a2-a817-dfae53b719d3.png">

### 공간예약 페이지
![공간예약페이지](https://user-images.githubusercontent.com/28006318/193761737-da3473dd-f5be-4e86-b069-b9c66b2de9b3.png)

## 마이페이지
<img width="700" alt="마이페이지" src="https://user-images.githubusercontent.com/28006318/193761751-a07d456e-336b-412e-b842-7685604f275f.png">

## 이용후![이용후기 등록페이지](https://user-images.githubusercontent.com/28006318/193761770-b50545b0-ed2c-4911-95de-74ec2c6dcd89.png)
기 등록 페이지

<br>

## Host 기능

### 호스트 등록 페이지
![호스트 등록 페이지](https://user-images.githubusercontent.com/28006318/193762219-eb4b7404-080c-4345-b549-e89df85c6c46.png)

### 호스트 공간등록 페이지
<img width="700" alt="호스트 공간 등록 페이지" src="https://user-images.githubusercontent.com/28006318/193762233-cd5d5206-99d6-4f91-869d-8e4546a83396.png">

### 호스트 공간관리 페이지
<img width="700" alt="호스트 공간관리 페이지" src="https://user-images.githubusercontent.com/28006318/193762328-51171d30-e47b-46e9-a6cf-62691d9d4f74.png">

### 호스트 룸 등록하기 페이지
<img width="700" alt="호스트 룸 등록하기" src="https://user-images.githubusercontent.com/28006318/193762368-af7f7563-d870-44c2-bdd9-3b8fbb981876.png">

### 호스트 룸별 예약 관리 페이지
![호스트 룸별 예약 관리 페이지](https://user-images.githubusercontent.com/28006318/193762438-7fce550e-d640-4273-9669-4f4afff35c87.png)

### 예약 상세 내역 확인 및 관리
![호스트 예약 상세 내역 및 관리](https://user-images.githubusercontent.com/28006318/193762451-dfdbdc95-932e-4d60-8f25-b5732c494408.png)


<br>

## Admin 기능

### 유저 관리
![유저관리](https://user-images.githubusercontent.com/28006318/193762766-0c0cab39-8b26-405b-bbfb-6abb9e16d9a8.png)

### 공지사항
![공지사항](https://user-images.githubusercontent.com/28006318/193762796-71844061-234b-42c0-b062-55b10a11aa6b.png)

### Q&A 관리
![Q A관리](https://user-images.githubusercontent.com/28006318/193762803-768f3a4b-19cc-4ff0-87cb-ebb96aca0c28.png)

### 전체 예약 관리
![전체 예약 관리](https://user-images.githubusercontent.com/28006318/193762852-dd04737e-c641-4eae-b9d5-04a667fe9657.png)

