# Jest 및 테스팅 라이브러리로 React 테스트하기

## Section 1

### React Testing Library(RTL)

- RTL은 테스트를 위한 가상 DOM을 제공한다.

### Jest

- Test runner이다.
  - 테스트를 찾고 실행하며 단언한다.
- 테스트를 찾고 실행하는 것과 테스트 통과 여부를 결정한다.

### 테스팅 라이브러리를 사용한 첫번째 테스트

`npm test` : Jest에서 Watch 모드 실행으로 시작된다.

![test1](./img/test1.png)

#### render

- render 함수는 전달받은 인수로 JSX에 관한 가상 DOM을 생성한다.
  - 여기서 JSX에 관한 인수는 app 컴포넌트이다.
- 렌더링된 가상 DOM에는 어떻게 액세스할까?
  - screen global 객체로 액세스한다.

#### screen.getByText()

- 표시되는 모든 텍스트를 기반으로 DOM에서 요소를 찾는다.

#### /learn react/i

- 여기서 getByTest의 인수는 정규 표현식이다.
- 문자열을 대신 넣을 수도 있다.

#### expect().toBeInTheDocument()

- 단언하는 부분
- 테스트 성공과 실패의 원인이다.
- 테스트 통과 여부를 결정한다.

### Jest: Watch 모드와 테스트가 작동하는 방식

#### Watch 모드

- Jest를 실행하는 방법
- 마지막 커밋 이후 파일의 모든 변경 사항을 확인해서, 마지막 커밋 이후 변경된 파일과 연관된 테스트만 실행한다.

```javascript
test('test를 식별하는 문자열', () => {
  '테스트를 결정하는 콜백함수';
  '에러가 발생하면 테스트 실패';
});
```

### TDD(Test-Driven Development)

- 코드 작성 전에 테스트를 작성하고, 테스트에 통과하도록 코드를 작성하는 것
- red-green testing
  - 코드 작성 전에는 실패 테스트 코드를 작성하고
  - 코드 작성 후에는 성공 테스트 코드를 작성하는 방법

#### Why TDD?

- 테스트를 작성하는 것이 프로세스의 한 부분으로 느끼는 방식에 차이가 있기 때문이다.
  - 마지막에 해야하는 일이 아닌, 코딩 프로세스의 일부이다.
- 효율적이다.
  - 원하는대로 작동하는지 확인하면서 소프트웨어를 업데이트할텐데, 이는 수동 업데이트이다.
  - 하지만 코드 작성 전에 테스트를 작성하면, 변경 후에 자동으로 다시 실행할 수 있다.
    **그래서 개발할 때마다 테스트 코드를 작성하면, 변경사항이 생길 때마다 모든 테스트를 다시 실행해서 자동 회귀 테스트를 할 수 있다.**
    -> 변경 사항 확인을 위해 애플리케이션을 열고 수동으로 테스트할 필요가 없다.

### React Testing Library 철학

#### RTL의 역할과 사용 이유

- RTL은 테스트를 위한 가상 DOM을 만들어주고, DOM과 상호 작용하기 위한 유틸리티 제공
  - DOM에서 요소를 찾을 수 있거나 클릭과 같은 요소와 상호 작용할 수 있다.
- 브라우저 없이도 테스트가 가능한다.

### Test 종류

- Unit tests(유닛 테스트)
  - 함수나 컴포넌트 코드의 한 유닛 혹은 단위를 테스트
  - 서로 상호작용하는 것을 테스트하지 않는다.
- Integration tests(통합 테스트)
  - 여러 유닛이 함께 작동하는 방식을 테스트
  - 유닛 간의 상호 작용을 테스트한다.
- Functional tests(기능 테스트)
  - 소프트웨어의 특정 기능을 테스트
  - 특정 코드 함수가 아닌 소프트웨어의 일반적인 동작을 의미한다.
  - 일반적인 동작 : 데이터를 폼에 입력하고 제출을 클릭하면 소프트웨어가 특정 데이터 set으로 바르게 작동하는 기능을 확인해야 한다.
  - 코드가 아닌 동작을 테스트하는 것이다.
- End-to-end Tests(E2E 테스트)
  - 이 테스트는 실제 브라우저와 애플리케이션이 연결된 서버가 필요하다.
  - Cypress나 Selenium과 같은 특별한 도구가 필요

### 유닛 테스트와 기능 테스트

#### 유닛 테스트

유닛 테스트는 테스트를 최대한 격리시킨다.

그래서 함수나 컴포넌트를 테스트할 때, 의존성을 표시한다.

- 장점 : 실패 원인을 파악하기 매우 쉽다.
- 단점1 : 사용자가 소프트웨어와 상호 작용하는 방식과는 거리가 멀다.
- 단점2 : 리팩토링을 실패할 수도 있다.
  - 리팩토링은 동작은 동일하되,코드를 변경하는 것이므로

#### 기능 테스트

- 테스트하는 특정 동작이나 유저 플로우와 연관된 모든 단위를 포함한다.
- 장점1 : 사용자가 소프트웨어와 상호 작용하는 방식과 밀접하다.
- 장점2 : 테스트가 견고하다.
  - 리팩토링을 할 때, 동작이 동일하게 유지되는 한 테스트도 통과한다.
- 단점 1 : 실패할 테스트를 디버깅하기 어렵다.
  - 어떤 부분의 코드가 실패의 원인인지 파악하기 힘들다.

### TDD(테스트 주도 개발) vs BDD(행동 주도 개발)

- Testing Library는 행동을 테스트하는 것을 장려한다.
- 그럼 우리는 TDD 대신 BDD라고 불러야는는걸까?
  - No
- BDD는 명확히 정의되어있다.
  - 개발자, QA, 비즈니스 관계자 등 다양한 역할 간의 상호작용도 포함한다.
  - 다양한 그룹들간의 상호작용 과정을 정의한다.
- 우리는 오직 개발자만 있으므로, TDD라고 부른다!ㄴ

### 테스팅 라이브러리와 접근성

`getByRole` : 첫번째 인수는 역할 그 자체, 두 번째는 옵션

```javascript
const linkElement = screen.getByRole('link', { name: /learn react/i });
```

- 만약 스크린 리더가 찾을 수 있는 요소가 발견되지 않는다면?
  - 우리의 애플리케이션이 스크린 리더에 친화적이지 않음을 의미하므로, 시맨틱 태그를 활용해야함

## Section 2 : 간단한 앱으로 테스트하기

### Color Button 앱 시작하기

test에 들어갈 인수는 테스트를 설명하는 문구와 테스트를 실행할 함수이다.

해당 함수가 오류를 반환하지 않으면 테스트를 통과한 것이다.

1. render할 컴포넌트를 불러온다.
2. screen 이라는 전역 객체에 접근하여 `getByRole`를 호출한다.
3. getByRole의 첫번째 인자에는 역할, 두번째 인자에는 확인할 옵션을 넣는다.
4. expect와 matcher 함수를 활용해 테스트한다.

```javascript
test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});
```

5. 에러 발생

```bash
    TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Change to Blue"
```

6. App.jsx 버튼 컴포넌트 생성 및 재테스트 결과

```javascript
function App() {
  return (
    <div>
      <button style={{ backgroundColor: 'red' }}>Change to Blue</button>
    </div>
  );
}
```

```bash
 PASS  src/App.test.js
  ✓ button has correct initial color (73 ms)
  ✓ button turns blue when clicked

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.666 s, estimated 1 s
Ran all test suites.
```

### Roles 디버깅을 위한 'logRules' 방식

컴포넌트 내에 역할들이 많아 구분이 필요할 때, 다음과 같이 해당 컴포넌트 내 역할을 불러올 logRules 메서드로 호출하여 확인하면 된다.

```javascript
test('button has correct initial color', () => {
  const { container } = render(<App />);
  // 역할들 로그 확인하기
  logRules(container);

  const colorButton = screen.getByRole('button', { name: 'Change to Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});
```

### 버튼 클릭 시 테스트 행동(Test Behavior when Clicking Button)

기능 테스트에서는 일련의 동작을 테스트하므로, 모든 동작이 같은 테스트에 있어야 한다.

동작 사이에 단언문(expect)이 들어갈 수도 있다.

#### fireEvent

이 객체는 가상 DOM에서 요소와 상호 작용할 수 있도록 도와준다.

```javascript
test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be "Change to Red"
  expect(colorButton).toHaveTextContent('Change to Red');
});
```

아직 기능 구현이 안되어 있으므로, 에러 발생

```bash
 FAIL  src/App.test.js
  ✕ button has correct initial color (83 ms)
  ✓ button turns blue when clicked (13 ms)

  ● button has correct initial color

    expect(element).toHaveStyle()

    - Expected

    - backgroundColor: blue;

      14 |
      15 |   // expect the background color to be blue
    > 16 |   expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
         |                       ^
      17 |
      18 |   // expect the button text to be "Change to Red"
      19 |   expect(colorButton).toHaveTextContent('Change to Red');
```

- 에러 문장을 보았듯이, 단언문의 테스트가 실패시, 이후 테스트는 실행되지 않는다.

### 버튼과 체크박스의 초기 조건 테스트

버튼과 체크박스를 위해 초기 상태부터 테스팅하기.

- 활성화할 수 있는 matcher를 jest-dom docs에서 찾아 적용한다.

```javascript
// check that the button starts out enabled
const colorButton = screen.getByRole('button', { name: 'Change to blue' });
expect(colorButton).toBeEnabled();
```

- matcher 찾기
  https://github.com/testing-library/jest-dom
- 체크박스의 역할 찾기
  요소 역할 자료 : w3.org/TR/wai-aria/#role-definitions

```javascript
// check that the checkbox starts out unchecked
const checkbox = screen.getByRole('checkbox');
expect(checkbox).not.toBeChecked();
```

### 코드 퀴즈! 체크박스 체크 시 확인 버튼 비활성화

코드와 테스트가 어떻게 상호작용하는지를 파악함으로써, 테스트와 코드를 확실히 디버깅 할 수 있게 된다.

#### 초기 조건의 테스트

- 1. fireEvent.click을 사용하여 체크박스를 클릭한다.
- 2-1. 체크 박스에 체크를 하고 버튼 비활성화 여부를 확인한 뒤
- 2-2. 두 번째 클릭 이후 체크박스의 체크가 해제되면 버튼이 다시 활성화되는지 여부 확인
- 버튼에 대한 assertion(단언)
  - expect(button).toBeEnabled()
  - expect(button).toBeDisabled()

위의 테스트 과정은 초기 조건의 테스트를 위한 과정이다.
기능 테스트와 분리하기 위해 새로운 테스트를 만들어 테스트한다.

### 코드 퀴즈! 비활성화된 버튼이 회색으로 변경

#### test flows(가능성 있는 유저 흐름을 시뮬레이션)

- button 비활성화 -> button 회색으로 변경 -> button 활성화 -> button 빨강으로 변경
- button 클릭하여 색 변경 -> button 비활성화 -> button 회색으로 변경
- button 활성화 -> button 파랑으로 변경

각 흐름의 마지막 단계에 assertion을 한다.

### 유닛(Unit) 테스트 함수

함수들은 컴포넌트들과 분리된다.

- 여러 개의 컴포넌트에서 혹은 한 컴포넌트 내에서 재사용되는 경우
- 복잡한 로직

#### 함수의 유닛테스트를 권장하는 경우

- 기능 테스트로 테스트하기엔 로직이 너무 복잡한 경우
- 엣지 케이스가 너무 많은 경우

#### describe 문

테스트를 그룹으로 묶는 방법이다.

##### replaceCamelWithSpaces

카멜케이스의 문자를 대문자 기준으로 앞에 space를 놓는 함수에 대해 유닛 테스트를 진행한다.

1. 함수는 import로 가져오고,
   직접 인자를 넘겨서 반환되는 값을 테스트하는 과정이다.

2. 각 엣지 케이스들(내부에 대문자가 없을 경우, 1개일 경우, 2개 이상일 경우)에 대해 각 test를 만든다.

3. ㄴtoBe는 jest의 기본 matcher로 양 측의 두 값을 직접 비교한다.

### 유닛(Unit) 테스트를 하는 경우

- 간단한 함수
- 복잡한 함수
  - 모든 엣지 케이스를 확인할 수 있음 (테스트하기 위해 굳이 컴포넌트를 활성화할 필요 없음)
  - 기능 테스트의 실패 원인을 파악할 때, 유닛 테스트가 유용하게 활용

### 복습: 간단한 앱

- `fireEvent` : 상호작용 테스트
- jest-dom assertions:
  - `toBeEnabled()`
  - `toBeDisabled()`
  - `toBeChecked()`
- `getByRole option {name : }`
- `describe` : jest 전역 메서드로, 논리적인 그룹으로 그룹 테스트 진행
- unit testing functions : 함수를 유닛 테스트하는 방법

## Section 3 : 테스팅 라이브러리가 포함된 ESLint와 Prettier

### EsLint와 Prettier

#### ESLint

자바스크립트의 대표적인 린터

- 린터 : 정적 테스트를 분석하고 린터 규칙을 위반하는 구문을 마킹하는 도구
- 정적이란 코드가 작성된대로 분석을 하고 코드가 어떻게 실해오디는지에 대해서는 분석하지 않음
- 린팅은 코드의 스타일을 일관적으로 유지하는데 유용
- 에러찾기 용이함
  - 선언 전에 변수 사용 포착
  - 존제하치 않는 파일 import 포착 등

#### Prettier

포맷터 (코드를 자동으로 포맷팅 ex: 들여쓰기, 스페이스 간격)

#### Linting vs Formatting

linter는 fornat과 style을 모두 포함한다.

예를 들어, jest-dom의 경우, jest-dom용 ESLint 플러그인은 선호하는 단언 메서드를 사용할 수 있게 해준다.

### 테스팅 라이브러리와 Jest-DOM을 위한 ESLint

1. `npm i eslint-plugin-testing-library eslint-plugin-jest-dom`
2. package.json에서 eslintConfig 제거

### VSCode에서 ESLint 구성하기

eslint 확장 프로그램 설치 및 json setting

```json
// .eslintrc.json
{
  "plugins": ["testing-library", "jest-dom"],
  // rule
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
```

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
}
```

### VSCode에서 Prettier 구성하기

prettier 확장 프로그램 설치 및 settings.json 구성

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Section 4 : Form 복습과 팝오버

### 온디멘드 선데이 아이스크림 소개

- 더욱 복잡한 유저 상호작용을 테스트
  - 다양한 form 입력, 주문 단계로의 이동 등
- mouseover popup
  - 사용자들이 가입을 할 때 어떤 이용 약관에 동의하는지 확인
  - DOM으로부터 사라지는 요소를 테스트
- 서버의 응답 모의(mocking)
  - Mock Service Wroker(MSW)을 사용해 서버로부터 모의(Mock) 응답을 보내도록 만들 것
  - 즉 서버로 가는 호출을 중간에서 가로채 우리가 응답을 제어할 수 있도록 모의 응답을 보내는 것
  - 이렇게 하면 테스트 중 서버 실행 필요 없음
- 비동기적(async) 업데이트
  - 단언을 하기 전 DOM 내의 특정 변경을 기다리게 한다.
- Context를 통한 전역 상태 사용

### ESLint와 Prettier 설정

### 리액트 부트스트랩 설정

`npm i react-bootstrap bootstrap`

### 코드 구성과 SummaryForm 소개

#### Code Organization

1. 페이지별로 컴포넌트를 구조화한다.
   1. 각 페이지에는 디렉터리가 있고, 각 페이지의 디렉터리에는 test라는 하위 디렉터리가 있어, 테스트를 포함할 것이다.
   2. Jest가 전체 디렉터리 트리에서 `.test.js`로 끝나는 파일을 찾아 실행한다.
2. App.test.js는 렌더링을 하게 되면 문제 발생 예상
   1. 서버에서 비동기식으로 데이터를 가져올 때 발생 가능

### React Bootstrap Popover과 Testing Library userEvent

#### userEvent

userEvent는 사용자 이벤트를 시뮬레이션하며 fireEvent보다 완전하고 현실적이다.
`npm i @testing-library/user-event@^14`

**user event API는 항상 Promise를 반환한다는 것을 잊지말자!**

->즉 await 키워드를 사용해 API 종료를 대기하고, 그 후에 단언문(assertion)을 실행할 수 있다.

### 오류를 피하기 위한 코드 업데이트

#### 상황

user-event를 사용하는 테스트를 실행할 때, "not wrapped in act(...)"오류가 많이 나타난다.

#### 원인

@testing-library/dom v9.0.0 및 @testing-library/react v14.0.0이 2023년 2월 16일에 릴리스되었다.

create-react-app으로 @testing-library/react 및 @testing-library/user-event 버전이 설치되고, 결과적으로 @testing-library/dom 버전과 충돌이 난다.

#### 해결

모든 버전을 맞추려면 새로운 create-react-app 앱의 최상위 수준에서 다음 커맨드를 실행해야한다.

`npm install @testing-library/react@14 @testing-library/user-event@14 @testing-library/dom@9`

이렇게 하면 @testing-library/dom 버전이 서로 일치하게 된다.

### 'fireEvent'를 'userEvent'로 교체하기

1. user 인스턴스 생성
2. fireEvent -> user로 변경
3. 각 유저이벤트에 await 걸기

```javascript
test('Checkbox disables button on first click and enables on second click', async () => {
  // create user instance
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
```

### Screen 쿼리 메서드

보이지 않는 요소는 어떻게 가져올 수 있을까?

#### command

- get : DOM에 요소가 있을 경우
- query : DOM에 요소가 있지 않을 경우
- find : 요소가 비동기적으로 나타날 경우

#### [All]

- All은 포함을 시키거나 포함을 시키지 않는 부분
- 하나 이상의 매치를 expect하는 경우에는 [All]을 포함시켜, 매치 전체의 배열을 얻을 수 있다.

#### QueryType

- 무엇으로 검색할 것인가를 가리킴
- Role(역할로, 가장 선호되는 타입)
- AltText(img)
- Text(요소를 보여주는데 사용)
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue

### 테스트 요소가 페이지에 없음 : 팝오버 테스트 시작하기

1. 팝오버가 DOM에 나타나지 않으므로 `queryByText`로 요소를 가져온다.
2. `toBeInTheDocument`메서드로 DOM 내 디스플레이 유무를 확인한다.

## Section 5 : Mock Service Worker(MSW)로 서버 응답 시뮬레이션

서버에서의 응답을 시뮬레이션하는 방법에 대해 공부한다.

### OrderEntry 서버 데이터 소개

- 상작작용 테스트는 안할것
- 옵션 이미지가 렌더링 되는지만 확인할 것
- 스쿱옵션을 반환하는 `/scoops`와 토핑을 반환하는 `/toppings`에 대한 응답을 모킹할 것이다.

### Mock Service Worker와 핸들러 소개

#### 사용 이유

- 네트워크 호출을 가로채서 정정된 응답을 반환하도록 하기 위하여.
- 기능 테스트만 수행한다.
- 테스트하는 동안의 모든 네트워크 호출을 막는다.
- 서버 응답에 기반한 테스트 조건도 설정한다.

#### Setups

1. `npm i msw`
2. 핸들러 생성 : 특정한 url과 라우트에 무엇을 반환할지 결정하는 함수
3. 요청을 처리할 테스트 서버 생성
4. 테스트하는 동안 테스트 서버가 항상 수신 대기 중인지, 인터넷으로 나가는 호출을 가로채고 있는지도 확인

- 같은 파일에서 각 테스트 후에 서버 핸들러를 재설정한다.

### Jest를 이용해 axios를 모킹하면 안되나요?

**간단한 앱에서는 모킹이 가능하지만 더 복잡한 앱에서는 MSW로 다양한 도구를 이용할 수 있다**

#### 이유

1. 지금 만들고 있는 앱(sundaes-on-demand)의 경우, 동시에 두 가지를 요청(옵션페이지에서 scoop과 topping)하는데, 모킹 반환값으로는 이를 관리하기 어려울 뿐만 아니라 불안정하다. 페이지를 다시 정렬하면 모의 화면에서 반환값의 순서가 잘못되어 테스트가 실패할 수 있다.
2. 요청의 POST 데이터 등에 따라 값을 반환하고 싶을 때, MSW의 핸들로 함수로 가능하다.
3. MSW는 쿠키, 이진 응답(ex. image) 등 요청의 정교한 측면을 처리할 수 있다.
4. 서버 요청 시 사용할 메소드를 바꿀 수 있고, MSW는 어떤 메소도를 사용하든 작동한다.

### Mock Service Worker Server 설정

1. mocks/server.js 생성
2. handlers와 함께 setupServer 실행
   - 배열을 펼치면 배열의 각 요소를 별개의 인수로 만든다.

```javascript
// src/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
```

3. create-react-app 구성

- Mock Service Worker가 네트워크 요청을 가로채 핸들러에서 설정한 응답을 반환하도록 구성.

```javascript
// src/setupTests.js
import { server } from './mocks/server.js';
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
```

### Mock Service Worker로 테스트하기: 스쿱 옵션

### 중요: axios 1.x 오류

### 선택적 React 코드 : 옵션(Options)rhk ScoopOption 컴포넌트

### 'await findBy'로 비동기식으로 채워지는 요소 찾기

### 코드 퀴즈! 섭어ㅔ서 오는 Topping 옵션

### 참고 : 'Unable to find role="img"' 에러 해결하기

### 에러 서버 응답 계획

### 테스트에서 서버 에러 응답 시뮬레이션하기

### 선택적 React 코드 : 옵션(Option) 서버 에러에 대한 경고 배너

### 선택된 테스트만 실행하는 방법과 "waitFor"

### 테스트는 통과했지만 경고/에러가 발생했나요?

### 왜 "name"이 "alert"기능에 작동하지 않나요?

### 서버 에러 응답과 테스트 디버깅 도구

## Section 6 : Provider에 래핑된 컴포넌트 테스트하기
