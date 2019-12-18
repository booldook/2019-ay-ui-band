# Firebase 설치

## Nodejs 설치
### 1. 우선 npm 명령을 사용하기 위해서 nodejs를 설치합니다. [nodejs.org] 에서 다운로드(LTS버전) 합니다.
### 2. 다운로드가 완료되면 기본값으로 설치를 진행합니다.

## Firebase 설치 - 아래의 1, 2, 3은 본인컴퓨터에서 한번만 실행
### 1. cmd창을 열고...(윈도우키(시작버튼) 누른 후 cmd 엔터)
### 2. 아래와 같이 cmd창에서 실행한다.
~~~
npm i -g firebase-tools
~~~
### 3. 설치가 완료된 이후
~~~
firebase login
~~~

## firebase 프로젝트 만들기
### 1. vscode에서 작업할 폴더를 폴더열기 한다.
### 2. `ctrl+j`를 선택하여 터미널 창을 열고 cmd모드로 되어 있는지 확인한다.
### 3. 아래의 명령을 실행한다.
~~~
firebase init

? Are you ready to proceed? (Y/n) <-- Y선택, 엔터

# 화살표 키로 이동하여 Hosting을 space바로 선택, 엔터
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
 ( ) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
>(*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
 ( ) Emulators: Set up local emulators for Firebase features

# 첫번째 Use an existing project 선택, 엔터
? Please select an option: (Use arrow keys)
> Use an existing project 
  Create a new project 
  Add Firebase to an existing Google Cloud Platform project 
  Don't set up a default project 

# 본인이 방금 만든 프로젝트를 선택, 엔터
? Select a default Firebase project for this directory: ay-band (ay-band)    
i  Using project ay-band (ay-band)

# 이후에는 ()로 물어보면 엔터
(public) 엔터
(Y/N) Y엔터

# 프로젝트 설치가 완료됨
# 이후에 생성된 public 폴더에 웹사이트 파일들(css, img, index.html 등)을 옮긴다.

firebase deploy
~~~