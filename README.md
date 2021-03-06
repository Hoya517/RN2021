"# RN2021"

# 5월 28일
## navigation
https://github.com/Hoya517/React-Native-Navigation
------
## expo-cli
https://github.com/Hoya517/React-Native-Expo-cli
------
# 5월 21일
## Text 컴포넌트에 스타일 적용하기
### Text 컴포넌트 vs View 컴포넌트
- View에서 사용되는 대부분 스타일을 Text에서도 사용할 수 있음. (flex 속성 제외)
- 하지만, 반대로 Text에서 사용하는 스타일을 View에서도 사용할 수는 없음.

### 폰트 스타일
- fontFamily: CSS와 다르게 fontFamily 속성에 여러 개의 폰트를 지정할 수 없음.
	- 모노스페이스 폰트는 iOS에서 지원X => Platform.select를 이용해서 fontFamily 속성을 지정(iOS와 android를 따로 지정)
	- 지원하지 않는 폰트 확인 필요
- fontSize: 기본 값은 14(px단위생략)
- fontStyle: normal, italic 두 개만 사용가능
- fontWeight: 기본 값은 normal 또는 400

### 텍스트 장식하기
- 밑줄 또는 취소선 추가하기
	- textDecorationLine속성
	- 'none'(기본값), 'underline', 'linethrough', 'underline line-through'
	- android, iOS의 취소선 ui 다름
- 텍스트에 음영(그림자) 넣기
	- textShadowColor: 색상
	- textShadowOffset: 오프셋
	- textShadowRadius: 반경
------
# 고급 스타일링 기법
## 플랫폼별 크기와 스타일
### shadowPropTypesIOS와 elevation 속성으로 음영 넣기
- Platform.select 이용
	- shadowPropTypesIOS 속성으로 iOS에서 음영 효과 넣기
	- elevation 속성으로 안드로이드에 유사한 음영 효과 넣기

## 컴포넌트를 이동, 회전, 크기 변경, 기울이기
## flexbox를 이용해서 컴포넌트 배치하기

# 내비게이션
- 리액트 네이티브 프레임워크에는 내비게이션 라이브러리가 포함되어 있지 않음.
- React Native Navigation은 Wix의 개발자들이 개발하고 관리하는 오픈소스 라이브러리

------

# 5월 14일
## border 속성 지정하기
### color, width, style 속성으로 테두리 만들기
- borderWidth: 1 => 1px(px 단위 생략)
- Example 컴포넌트
    - 재사용 가능
    - 기본 스타일 속성을 전달된 스타일 속성으로 쉽게 오버라이드 할 수 있음.

### borderRadius를 이용해서 모양 만들기
- TopRight -> BottomRight -> BottomLeft -> TopLeft

### 프로필 카드 컴포넌트에 테두리 추가하기
- 이미지 파일은 앱의 코드와 같은 디렉토리에 위치함.('./user.png')

------
## 마진(margin)과 패딩(padding) 지정하기
### margin 속성 이용하기
- 음수 마진이 적용될 때
    - android & ios: 밀려나간 상태로 보임

### padding 속성 이용하기
- 음수 마진이 적용될 때
    - android: 밀려나간 부분이 잘려 보임
    - ios: 밀려나간 상태로 보임
------
## Position을 이용해서 컴포넌트 배치하기
- Yoga
    - 오픈 소스인 크로스 플랫폼 레이아웃 라이브러리
    - flexbox 관련
------
## 프로필 카드의 위치 지정하기
- 원 위: marginTop: 30
- 원과 아이콘 사이: paddingTop: 15


# 5월 7일
## 구조 분해 할당
: 리액트에서 "this.state."의 중복을 피할 수 있다
모질라 - 구조 분해 할당(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
```javascript
var o = {id: 201740206, name: "김주호"};
var {id, name} = o;

console.log(id); // 201740206
console.log(name); // 김주호
```

### ex4.5 ~ ex4.6 => 컴포넌트로 변환
- App.js -> MyComponent.js 파일 복사 및 이름 변경
- styles.js -> MyComponentStyles.js 파일 복사 및 이름 변경
- MyComponent.js 임포트 수정
```javascript
// import getStyleSheet from './styles'
import getStyleSheet from './MyComponentStyles'  // 수정

// export default class App extends Component {
export default class MyComponent extends Component {  // 수정
```

- index.js 임포트 수정
```javascript
// import App from './app/App';
import MyComponent from './app/MyComponent';  // ./MyComponent로 수정

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyComponent);  // MyComponent로 수정
```

### Profile Card 컴포넌트를 위한 초기 형태
```javascript
flex: 1  // 디바이스 전체를 할당
```

### border 속성 지정하기
- Margin | Border | Padding | Component
- Top -> Right -> Bottom -> Left

------
# 4월 30일
## 4장 스타일링 소개
### 컴포넌트의 스타일시트를 외부로 분리하기
```javascript
// 1. StyleSheet 임포트
import { StyleSheet } from 'react-native'

// 2. 상수에 스타일 생성
const styles = StyleSheet.create({
    container: {
        ...
    }
})

const buttons = StyleSheet.create({
    primary: {
        ...
    }
})

// 3. export해서 외부에서 사용할 수 있도록 함.
export { styles, buttons }
```

### 외부 스타일시트 가져오기
```javascript
// 1. styles.js 임포트
...
import {styles, buttons} from './styles'

export default class App extends Component {
    render() {
        return (
            // 2. 
            // styles.js 파일에 정의된 styles.container 스타일 참조
            // styles.js 파일에 정의된 buttons.primary 스타일 참조
            <View style={styles.container}> 
                <TouchableHighlight style = {buttons.primary}>
                    <Text>Sample Text</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
```

### 스타일과 코드
```javascript
// default 있으면 {} 사용가능!
export default function getStyleSheet(useDarkTheme) {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
```

```javascript
...
import getStyleSheet from './styles'  // 외부로 분리해 둔 getStyleSheet 함수 가져오기

export default class App extends Component {
    constructor(props) {

        super(props);

        // 기본 테마 색을 밝은색으로 컴포넌트의 state 초기화
        this.state = {
            darkTheme: false
        }

        // 예외가 발생하지 않도록 toggleTheme함수를 컴포넌트에 bind
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({darkTheme: !this.state.darkTheme})
    };

    render() {
        const styles = getStyleSheet(this.state.darkTheme);
        // flatten() 없는놈 가져오고 겹치는 놈은 제일 마지막 놈으로 적용
        const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Button title={backgroundColor} onPress={this.toggleTheme}/>
                </View>
            </View>
        )
    }
}
```


# 4월 16일
> 처음 만드는 리액트 네이트브 앱
>> 1. 계속해서 todo 앱 만들기
>>> - Todo 컴포넌트 만들기
>>> - TodoList 컴포넌트 만들기
>>> - TodoList 컴포넌트 가져오기
>>> - toggleComplete와 deleteTodo 메서드 추가하기
>>> - TodoButton.js 파일 작성하기
>>> - toggleComplete와 deleteTodo를 TodoList에 속성(props)으로 전달하기
>>> - toggleComplete와 deleteTodo를 ToDo에 속성(props)으로 전달하기
>>> - Todo.js를 갱신해 TodoButton과 기능을 적용하기
>>> - TodoButton.js 파일 작성하기
>>> - setType 메서드 추가하기
>>> - TabBar 컴포넌트 만들기
>>> - TabBarItem 컴포넌트 만들기
>>> - TabBar 컴포넌트 구현하기
>>> - TodoList 컴포넌트 갱신하기

# 4월 9일
> 처음 만드는 리액트 네이티브 앱
>> 1. todo 앱 코드 작성하기
>>> - root에 app 디렉토리 생성
>>> - App 컴포넌트 만들기
>>> - 초기 state 지정하기
>>> - Heading 컴포넌트 만들기
>>> - Heading 컴포넌트 가져와 사용하기
>>> - TextInput 컴포넌트 만들기
>>> - 개발자 메뉴 열기
>>>> [ctrl]+[M] - Debug
>> 2. 계속해서 todo 앱 만들기
>>> - inputChange 메서드 작성하기
>>> - inputChange와 inputValue를 TextInput에 추가하기
>>> - submit 메서드 추가하기
>>> - todoIndex 변수 생성하기
>>> - Button 컴포넌트 만들기
>>> - Button 컴포넌트 만들기
>>> - Button 컴포넌트 가져오기

# 4월 2일
> 리액트 이해하기
>> 1. 리액트 컴포넌트 스펙
>>> - render 메서드로 UI 만들기
>>> - 속성 초기화와 생성자 사용하기
>> 2. 리액트 생명주기 메서드
>>> - static getDerivedStateFromProps 메서드
>>> - componentDidMount 생명주기 메서드
>>> - shouldComponentUpdate 생명주기 메서드
>>> - componentDidUpdate 생명주기 메서드
>>> - componentWillUnmount 생명주기 메서드
>>> - submitTodo 메서드 추가하기
>>> - todoIndex 변수 생성하기
>>> - Button 컴포넌트 만들기
>>> - Button 컴포넌트 가져오기

# 3월 26일
> 리액트 이해하기
>> 1. state를 사용해 컴포넌트 데이터 다루기
>>> 컴포넌트의 상태 제대로 조작하기
>>> - 초기 state 지정하기
>>> - 상태(state) 갱신하기
>> 2. props를 사용해 컴포넌트 데이터 다루기
>>> - 동적 속성(props)
>>> - 속성(props)과 상태(state) 구조 분해 할당
>>> - 상태가 없는(stateless) 컴포넌트에서의 속성(props)
>>> - 배열과 개체를 속성(props)으로 전달하기
