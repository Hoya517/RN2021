"# RN2021"

# 4월 30일
## 4장 스타일링 소개

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