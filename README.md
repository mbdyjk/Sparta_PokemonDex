# Sparta_PokemonDex

Sparta_PokemonDex는 나만의 포켓몬을 선택하고 정보를 열람할 수 있는 웹 에플리케이션입니다.
링크: https://sparta-pokemon-dex.vercel.app/

---

## 📁 파일 구조

---

## 💻 프로젝트 실행

- 클론 및 이동

```bash
git clone <repository-url>
cd <project-directory>
```

- 필요한 패키지 설치

1. yarn 패키지 관리자 설치

```bash
npm install -g yarn
yarn -v // 버전 확인
```

2. React, Vite 환경 구성

```bash
yarn create vite <project-name> --template react
cd <project-name>
yarn // 필요한 패키지 설치
```

- 실행

```bash
yarn dev
```

---

## 🧩 기술 스택

- React: 컴포넌트 기반의 UI 라이브러리
- Vite: 빠른 빌드 도구
- styled-component: CSS-in-JS 스타일링 라이브러리
- Vercel: 서버리스 배포 플랫폼
- Redux Toolkit: 상태관리 라이브러리

---

## 📌 필수 기능

### 1. 국가 추가

- 사용자가 form에 국가명과 메달 정보를 입력하면, 해당 정보가 리스트에 추가
- 중복된 국가명은 추가되지 않도록 처리하며, 경고 메세지 표시

### 2. 국가 수정

- 기존 리스트에 존재하는 국가에 대해서, 업데이트 버튼을 통해 메달 정보 수정
- 존재하지 않는 국가에 대해서는 아무 동작하지 않게 처리

### 3. 국가 삭제

- 리스트 아이템 내 삭제 버튼을 통해 국가 삭제

### 4. 국가 정렬

- 금메달 수 또는 총 메달 수를 기준으로 내림차순 정렬
- **input** 태그의 type을 **radio**로 하여 라디오 버튼을 통해 옵션 선택

### 5. 스토리지 연동

- 리스트 아이템들은 **localstorage**에 저장되어, 페이지 새로고침 후에도 데이터 유지

---

## 🚀 도전 기능 가이드

### 1. Redux Toolkit으로 리팩터링

- **설명**: Redux Toolkit을 사용하여 상태 관리를 리팩터링하여 더욱 체계적인 중앙 상태 관리, 포켓몬 선택 상태를 Redux로 관리하여 Redux의 강점을 이해하고 활용
- **구체적인 요구사항**:
  - `redux-toolkits` 브랜치를 새로 생성하고, Redux Toolkit을 설치
  - 포켓몬 선택 상태와 추가/삭제 기능을 Redux 상태로 관리
  - `useSelector`와 `useDispatch`를 활용하여 상태 구독과 액션 디스패치를 적용하고, Context API로 관리하던 상태를 Redux로 대체
  - Redux를 통해 상태 관리가 어떻게 간결해지는지 확인

### 2. 디테일 페이지에 '추가' 버튼 추가하기

- **설명**: 디테일 페이지에서 포켓몬을 대시보드에 추가할 수 있는 '추가' 버튼을 구현하여 페이지 전환 간 상태를 유지
- **구체적인 요구사항**:
  - `PokemonDetail` 페이지에 '추가' 버튼을 추가하여, 해당 버튼을 클릭 시 포켓몬이 대시보드에 추가
  - 이미 대시보드에 추가된 포켓몬이라면 '삭제' 버튼으로 변경하여 삭제 가능하도록 수정

### 3. 리스트 페이지의 데이터 유지

- **설명**: 디테일 페이지에 다녀온 뒤에도 리스트 페이지에서 이전에 선택된 포켓몬 상태가 유지되도록 구현
- **구체적인 요구사항**:
  - React Router의 고급 기능, 브라우저 스토리지(localStorage), 또는 다른 상태 관리 방법을 사용하여 선택된 포켓몬 상태를 지속적으로 유지
  - 이 기능을 통해 상태가 유지되는 방식과 사용자 경험이 개선되는 효과를 이해

### 4. UI 라이브러리 활용

- **설명**: alert 대신 Modal이나 toast와 같은 UI 요소를 사용하여 사용자에게 더 매끄러운 피드백을 제공
- **구체적인 요구사항**:
  - alert 메시지를 Modal 또는 toast UI 요소로 대체
  - `react-toastify`, `sweetalert2`, `sonner` 등 다양한 라이브러리를 사용
  - 라이브러리를 설치하고, 사용자 상호작용 시 직관적인 피드백을 제공하여 더 세련된 UI를 구현

---

## 🛠️ 트러블 슈팅

- **링크**: https://velog.io/@rpyjko/SpartaPokemonDex-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85
