# ๐ฅ Assignment_Humanscape (with NestJS)

๐งฑ wanted x wecode ํ๋ฆฌ์จ๋ณด๋ฉ ๋ฐฑ์๋ ์ฝ์ค - [Assignment 5] Humanscape

[ํด๋จผ์ค์ผ์ดํ ์ฌ์ดํธ](https://humanscape.io/kr/index.html)

[wanted ์ฑ์ฉ๊ณต๊ณ  ๋งํฌ](https://www.wanted.co.kr/wd/41413)



## โ๏ธ ํ์ ์๊ฐ

| ์ด๋ฆ                                     | ๋ด๋น ๊ธฐ๋ฅ                 |
| ---------------------------------------- | ------------------------- |
| [๊น๋ฐ๋ค](https://github.com/sally0226)   | ๋ฐฐ์น(TrialService) ๊ตฌํ ๋ฐ ํ์คํธ ์ฝ๋ ์์ฑ |
| [๊นํจ๋ฏผ](https://github.com/luckyhyom)   | ๋ฐฐ์น(TrialService) ๊ตฌํ ๋ฐ ํ์คํธ ์ฝ๋ ์์ฑ |
| [์๋๊ท ](https://github.com/WonDongGyun) | Search api pagination ๊ตฌํ |
| [์ด๋์](https://github.com/bokiri409)   | Search API Test Code ์์ฑ |
| [์ฅํฌ์ง](https://github.com/heejin99)    | Search API Test Code ์์ฑ |
| [์กฐ์ฌ๋ณต](https://github.com/ildang100)   | DB ๋ชจ๋ธ๋ง |

<br>

## ๐ ๋ฐฐํฌ

์ฃผ์ : http://3.38.126.250:3000

<br>

## ๐  ํ๋ก์ ํธ ๋น๋ ๋ฐ ์๋ฒ ์คํ ๋ฐฉ๋ฒ

1. ์๋จ์ Code ๋ฒํผ์ ๋๋ฌ ๊ฒฝ๋ก๋ฅผ ๋ณต์ฌํ ํ ํด๋ก  ๋ฐ์ต๋๋ค.

```
$ git clone https://github.com/preOnboarding-Team13/Assignment-5-humanscape.git
```

1. ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.

```
$ npm install
```

1. ์๋ฒ๋ฅผ ์คํํด ์ค๋๋ค.

```
$ npm start
```

1. ์ ํด์ง API์ ์ ๊ทผํ์ฌ ์๋น์ค๋ฅผ ์ด์ฉํฉ๋๋ค.

<br>

## ๐ ๊ณผ์  ์๊ตฌ์ฌํญ

### [ํ์ ํฌํจ ์ฌํญ]

- READ.ME

   ์์ฑ

  - ํ๋ก์ ํธ ๋น๋, ์์ธํ ์คํ ๋ฐฉ๋ฒ ๋ช์
  - ๊ตฌํ ๋ฐฉ๋ฒ๊ณผ ์ด์ ์ ๋ํ ๊ฐ๋ตํ ์ค๋ช
  - ์๋ฃ๋ ์์คํ์ด ๋ฐฐํฌ๋ ์๋ฒ์ ์ฃผ์
  - ํด๋น ๊ณผ์ ๋ฅผ ์งํํ๋ฉด์ ํ๊ณ  ๋ด์ฉ ๋ธ๋ก๊ทธ ํฌ์คํ

- Swagger๋ Postman์ ์ด์ฉํ์ฌ API ํ์คํธ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ

โ๏ธ **ํ์ธ ์ฌํญ**

- **ORM ์ฌ์ฉ ํ์**
- **๋ฐ์ดํฐ๋ฒ ์ด์ค๋ SQLite๋ก ๊ตฌํ**
- secret key, api key ๋ฑ์ ๋ ํฌ์งํ ๋ฆฌ์ ์ฌ๋ฆฌ์ง ์๋๋ก ์ ์
  - [README.md](http://README.md) ์ ๊ด๋ จ ์ค๋ช ๋ช์ ํ์

โ๏ธ **๋์  ๊ณผ์ : ์ค์ค๋ก์๊ฒ๋ ๋์์ด ๋๋ ๋ด์ฉ + ์ถ๊ฐ ๊ฐ์ฐ์ **

- ๋ฐฐํฌํ์ฌ ์น์์ ์ฌ์ฉ ํ  ์ ์๋๋ก ์ ๊ณต
- ์์์ ๋ณด ๊ฒ์ API ์ ๊ณต

โ๏ธ  **๊ณผ์  ์๋ด**

๋ค์ ์ฌํญ๋ค์ ์ถฉ์กฑํ๋ ์๋น์ค๋ฅผ ๊ตฌํํด์ฃผ์ธ์.

- ์์์ ๋ณด๋ฅผ ์์งํ๋ batch task
  - ์ฐธ๊ณ : https://www.data.go.kr/data/3074271/fileData.do#/API ๋ชฉ๋ก/GETuddi%3Acfc19dda-6f75-4c57-86a8-bb9c8b103887
- ์์งํ ์์์ ๋ณด์ ๋ํ API
  - ํน์  ์์์ ๋ณด ์ฝ๊ธฐ(ํค ๊ฐ์ ์์ )
- ์์งํ ์์์ ๋ณด ๋ฆฌ์คํธ API
  - ์ต๊ทผ ์ผ์ฃผ์ผ๋ด์ ์๋ฐ์ดํธ(๋ณ๊ฒฝ์ฌํญ์ด ์๋) ๋ ์์์ ๋ณด ๋ฆฌ์คํธ
    - pagination ๊ธฐ๋ฅ
- **Test ๊ตฌํ์ ๊ฐ์ฐ์ ์ด ์์ต๋๋ค.**


## ๐งฌ DB ๋ชจ๋ธ๋ง

![Untitled (2)](https://user-images.githubusercontent.com/60311404/141983542-3da3d782-2730-4f52-8bea-3c40a438eb6c.png)

<br>

## ๐ซ ์ฌ์ฉ ๊ธฐ์ 

- Backend : [![img](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)
- DataBase : [![img](https://camo.githubusercontent.com/93b7b220122f943f4de91262b7aa6109a0fa4dd601e115d1b7c8bfa906e166ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3030334235373f7374796c653d666c6174266c6f676f3d53514c697465266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/93b7b220122f943f4de91262b7aa6109a0fa4dd601e115d1b7c8bfa906e166ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3030334235373f7374796c653d666c6174266c6f676f3d53514c697465266c6f676f436f6c6f723d7768697465)
- Collaboration : [![img](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)
- Deploy : [![img](https://camo.githubusercontent.com/f9e746416cf54181ba668cfe6e2861d1932c619847382646703a583ea89f249f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204157532d3233324633453f7374796c653d666c6174266c6f676f3d416d617a6f6e20415753266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/f9e746416cf54181ba668cfe6e2861d1932c619847382646703a583ea89f249f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204157532d3233324633453f7374796c653d666c6174266c6f676f3d416d617a6f6e20415753266c6f676f436f6c6f723d7768697465)

<br>

## ๐ ํด๋ ๊ตฌ์กฐ

```
๐ src
โโโ ๐ domain
โ  โโโ ๐ entities
โ  โ  โโโ ๐ trials.entity.ts
โ  โ  โโโ ๐ updatedBundles.entity.ts
โ  โ  โโโ ๐ updatedTrials.dto.ts
โ  โโโ ๐ search
โ  โ  โโโ ๐ search.controller.spec.ts
โ  โ  โโโ ๐ search.controller.ts
โ  โ  โโโ ๐ search.module.ts
โ  โ  โโโ ๐ search.repository.ts
โ  โ  โโโ ๐ searchPage.repository.ts
โ  โ  โโโ ๐ search.service.spec.ts
โ  โ  โโโ ๐ search.service.ts
โ  โโโ ๐ trials
โ  โ  โโโ ๐ trials.module.ts
โ  โ  โโโ ๐ trials.repository.ts
โ  โ  โโโ ๐ trials.service.spec.ts
โ  โ  โโโ ๐ trials.service.ts
โ  โ  โโโ ๐ updatedTrialBundles.repository.ts
โ  โ  โโโ ๐ updatedTrials.repository.ts
โโโ ๐ global
โ  โโโ ๐ common
โ  โ  โโโ ๐ CommonResponse.ts
โ  โ  โโโ ๐ ErrorCode.ts
โ  โ  โโโ ๐ ErrorResponse.ts
โ  โโโ ๐ exception
โ  โ  โโโ ๐ ErrorHandler.ts
โ  โโโ ๐ util
โ  โ  โโโ ๐ encryption.ts
โ  โ  โโโ ๐ date.ts
โโโ ๐ utils
โ  โโโ ๐ batchFunction.ts
โโโ ๐ app.module.ts
โโโ ๐ main
๐ test
โโโ ๐ app.e2e-spec.ts
โโโ ๐ jest-e2e.json
๐ .env
๐ nest-cli.json
๐ package.json
๐ package-lock.json
๐ tsconfig.json
๐ tsconfig.build.json
๐ README.md
```



## ๐ ๊ตฌํ ๊ธฐ๋ฅ

### 1) Check List

- ์์ ์ ๋ณด

  โ ํน์  ์์ ์ ๋ณด ์ฝ๊ธฐ API

  โ ์๋ฐ์ดํธ๋ ์์์ ๋ณด ๋ฆฌ์คํธ API

  โ ์์์ ๋ณด๋ฅผ ์์งํ๋ batch task

- ํ์คํธ ์ฝ๋

  โ Unit Test

- ์ถ๊ฐ ๊ณ ๋ ค ์ฌํญ

  โ๏ธ ์์์ ๋ณด ๊ฒ์ API 



### 2) ์์ธ ๋ด์ฉ

#### Pair Programming (์ง ์ฝ๋ฉ)

์ง๋ ํ๋ก์ ํธ๋ค์์๋ 2๋ช ํน์ 3๋ช์ฉ ์ง์ ์ง์ด์ pair programming์ ์งํํ์์ต๋๋ค.

์ด๋ฒ ๊ณผ์ ์์๋ batch task๊ฐ ํต์ฌ์ด์๊ธฐ ๋๋ฌธ์, ์ฒซ ๋ ์ batch task์ ํ์ ์งค ๋ 6๋ช์ด ํจ๊ป pair programming์ ์งํํ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/43634786/142021494-9a783af8-d5d0-4462-b63b-4e415c502f32.png)

#### [์ค๊ณ ๋ผ์ ์ฌํญ](https://github.com/preOnboarding-Team13/Assignment-5-humanscape/wiki/์ค๊ณ-ํ์-๋ด์ฉ)
#### [์คํ API ์กฐํ ๋ฐฉ์, For Loop VS Promise.all](https://github.com/preOnboarding-Team13/Assignment-5-humanscape/wiki/์คํ-API-์กฐํ-๋ฐฉ์,-For-Loop-Vs-Promise.all)
#### [Functional Test ๊ฒฐ๊ณผ](https://github.com/preOnboarding-Team13/Assignment-5-humanscape/wiki/Functional-Test-๊ฒฐ๊ณผ)

#### [TypeOrm ํ์ด์ง ํฅ์๊ธฐ(2)](https://github.com/preOnboarding-Team13/Assignment-5-humanscape/wiki/TypeOrm-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%84%B1%EB%8A%A5-%ED%96%A5%EC%83%81-%EB%8F%84%EC%A0%84%EA%B8%B0(2))
<br>

## ๐พ API

[Postman ์ฃผ์-๋งํฌ](https://documenter.getpostman.com/view/12074893/UVCB9PXL)

<br>

## ๐พ API Test ๋ฐฉ๋ฒ

#### 1. ์์ Postman ์ฃผ์ ๋งํฌ๋ฅผ ํด๋ฆญํ์ฌ Postman์ผ๋ก ๋ค์ด๊ฐ๋๋ค.

#### 2. Search Information API ๋ฅผ ์ด์ฉํ์ฌ trial_id์ ๋ํ ์์ ์ ๋ณด๋ฅผ ํ์ธ ํ  ์ ์์ต๋๋ค. ๋ฐ์ดํฐ๊ฐ ์์ผ๋ฉด 404์๋ฌ๋ฅผ ๋ฐํํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/142034527-fca7a5ee-2c71-4b34-9786-9e992701d6bc.png)

#### 3. Search Updated Information API ๋ฅผ ์ด์ฉํ์ฌ ๋ณ๊ฒฝ๋ ์์ ๋ฆฌ์คํธ ํ์ธ์ ํ  ์ ์์ต๋๋ค. ๋ณ๊ฒฝ๋ ๋ฐ์ดํฐ๊ฐ ์์ผ๋ฉด 404์๋ฌ๋ฅผ ๋ฐํํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/41619081/142034850-721c2427-902c-48b3-ab1f-c4eccf0d6f08.png)


<br>

## ๐ญ TIL ์ฃผ์



| ๊น๋ฐ๋ค | ๊นํจ๋ฏผ | ์๋๊ท  | ์ด๋์ | ์ฅํฌ์ง | ์กฐ์ฌ๋ณต |
| ------ | ------ | ------ | ------ | ------ | ------ |
|        |[ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://baejjang.tistory.com/9)        |[ํฐ์คํ ๋ฆฌ ๋ธ๋ก๊ทธ](https://tristy.tistory.com/48)        |        |        |        |
