# 🔥 Assignment_Humanscape (with NestJS)

🧱 wanted x wecode 프리온보딩 백엔드 코스 - [Assignment 5] Humanscape

[휴먼스케이프 사이트](https://humanscape.io/kr/index.html)

[wanted 채용공고 링크](https://www.wanted.co.kr/wd/41413)



## ☄️ 팀원 소개

| 이름                                     | 담당 기능                 |
| ---------------------------------------- | ------------------------- |
| [김바다](https://github.com/sally0226)   | 배치(TrialService) 구현 및 테스트 코드 작성 |
| [김효민](https://github.com/luckyhyom)   | 배치(TrialService) 구현 및 테스트 코드 작성 |
| [원동균](https://github.com/WonDongGyun) | Search api pagination 구현 |
| [이나영](https://github.com/bokiri409)   | Search API Test Code 작성 |
| [장희진](https://github.com/heejin99)    | Search API Test Code 작성 |
| [조재복](https://github.com/ildang100)   | DB 모델링 |

<br>

## 🌎 배포

주소 : http://3.38.126.250:3000

<br>

## 🛠 프로젝트 빌드 및 서버 실행 방법

1. 상단의 Code 버튼을 눌러 경로를 복사한 후 클론 받습니다.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment-5-humanscape.git
```

1. 패키지를 설치합니다.

```
$ npm install
```

1. 서버를 실행해 줍니다.

```
$ npm start
```

1. 정해진 API에 접근하여 서비스를 이용합니다.

<br>

## 📝 과제 요구사항

### [필수 포함 사항]

- READ.ME

   작성

  - 프로젝트 빌드, 자세한 실행 방법 명시
  - 구현 방법과 이유에 대한 간략한 설명
  - 완료된 시스템이 배포된 서버의 주소
  - 해당 과제를 진행하면서 회고 내용 블로그 포스팅

- Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

✔️ **확인 사항**

- **ORM 사용 필수**
- **데이터베이스는 SQLite로 구현**
- secret key, api key 등을 레포지토리에 올리지 않도록 유의
  - [README.md](http://README.md) 에 관련 설명 명시 필요

✔️ **도전 과제: 스스로에게도 도움이 되는 내용 + 추가 가산점**

- 배포하여 웹에서 사용 할 수 있도록 제공
- 임상정보 검색 API 제공

✔️  **과제 안내**

다음 사항들을 충족하는 서비스를 구현해주세요.

- 임상정보를 수집하는 batch task
  - 참고: https://www.data.go.kr/data/3074271/fileData.do#/API 목록/GETuddi%3Acfc19dda-6f75-4c57-86a8-bb9c8b103887
- 수집한 임상정보에 대한 API
  - 특정 임상정보 읽기(키 값은 자유)
- 수집한 임상정보 리스트 API
  - 최근 일주일내에 업데이트(변경사항이 있는) 된 임상정보 리스트
    - pagination 기능
- **Test 구현시 가산점이 있습니다.**


## 🧬 DB 모델링

![Untitled (2)](https://user-images.githubusercontent.com/60311404/141983542-3da3d782-2730-4f52-8bea-3c40a438eb6c.png)

<br>

## 🏫 사용 기술

- Backend : [![img](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)
- DataBase : [![img](https://camo.githubusercontent.com/93b7b220122f943f4de91262b7aa6109a0fa4dd601e115d1b7c8bfa906e166ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3030334235373f7374796c653d666c6174266c6f676f3d53514c697465266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/93b7b220122f943f4de91262b7aa6109a0fa4dd601e115d1b7c8bfa906e166ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3030334235373f7374796c653d666c6174266c6f676f3d53514c697465266c6f676f436f6c6f723d7768697465)
- Collaboration : [![img](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)
- Deploy : [![img](https://camo.githubusercontent.com/f9e746416cf54181ba668cfe6e2861d1932c619847382646703a583ea89f249f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204157532d3233324633453f7374796c653d666c6174266c6f676f3d416d617a6f6e20415753266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/f9e746416cf54181ba668cfe6e2861d1932c619847382646703a583ea89f249f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204157532d3233324633453f7374796c653d666c6174266c6f676f3d416d617a6f6e20415753266c6f676f436f6c6f723d7768697465)

<br>

## 📂 폴더 구조

```
📁 src
├── 📁 domain
│  ├── 📂 entities
│  │  ├── 📄 trials.entity.ts
│  │  ├── 📄 updatedBundles.entity.ts
│  │  └── 📄 updatedTrials.dto.ts
│  ├── 📂 search
│  │  ├── 📄 search.controller.spec.ts
│  │  ├── 📄 search.controller.ts
│  │  ├── 📄 search.module.ts
│  │  ├── 📄 search.repository.ts
│  │  ├── 📄 searchPage.repository.ts
│  │  ├── 📄 search.service.spec.ts
│  │  └── 📄 search.service.ts
│  ├── 📂 trials
│  │  ├── 📄 trials.module.ts
│  │  ├── 📄 trials.repository.ts
│  │  ├── 📄 trials.service.spec.ts
│  │  ├── 📄 trials.service.ts
│  │  ├── 📄 updatedTrialBundles.repository.ts
│  │  └── 📄 updatedTrials.repository.ts
├── 📂 global
│  ├── 📂 common
│  │  ├── 📄 CommonResponse.ts
│  │  ├── 📄 ErrorCode.ts
│  │  └── 📄 ErrorResponse.ts
│  ├── 📂 exception
│  │  └── 📄 ErrorHandler.ts
│  ├── 📂 util
│  │  ├── 📄 encryption.ts
│  │  └── 📄 date.ts
├── 📂 utils
│  └── 📄 batchFunction.ts
├── 📄 app.module.ts
└── 📄 main
📁 test
├── 📄 app.e2e-spec.ts
└── 📄 jest-e2e.json
📄 .env
📄 nest-cli.json
📄 package.json
📄 package-lock.json
📄 tsconfig.json
📄 tsconfig.build.json
📄 README.md
```



## 🔗 구현 기능

### 1) Check List

- 임상 정보

  ✅ 특정 임상 정보 읽기 API

  ✅ 업데이트된 임상정보 리스트 API

- 테스트 코드

  ✅ Unit Test

- 추가 고려 사항

  ⚡ 임상정보 검색 API 



### 2) 상세 내용

#### Pair Programming (짝 코딩)

지난 프로젝트들에서도 2명 혹은 3명씩 짝을 지어서 pair programming을 진행했었습니다.

이번 과제에서는 batch task가 핵심이었기 때문에, 첫 날에 batch task의 틀을 짤 때 6명이 함께 pair programming을 진행했습니다.

![image](https://user-images.githubusercontent.com/43634786/142021494-9a783af8-d5d0-4462-b63b-4e415c502f32.png)

#### [설계 논의 사항](https://github.com/preOnboarding-Team13/Assignment-5-humanscape/wiki/설계-회의-내용)
#### [오픈 API 조회 방식, For Loop Vs Promise.all](https://github.com/preOnboarding-Team13/Assignment-5-humanscape/wiki/오픈-API-조회-방식,-For-Loop-Vs-Promise.all)

<br>

## 🐾 API

[Postman 주소-링크](https://documenter.getpostman.com/view/15410333/UVC8Ckor)

<br>

## 🐾 API Test 방법

#### 1. 위의 Postman 주소 링크를 클릭하여 Postman으로 들어갑니다.

#### 2. 



<br>

## 🍭 TIL 주소



| 김바다 | 김효민 | 원동균 | 이나영 | 장희진 | 조재복 |
| ------ | ------ | ------ | ------ | ------ | ------ |
|        |        |        |        |        |        |