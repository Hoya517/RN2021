// 1. StyleSheet 임포트
import { StyleSheet } from 'react-native'

// 2. 상수에 스타일 생성
const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    }
})

const buttons = StyleSheet.create({
    primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
})

// 3. export해서 외부에서 사용할 수 있도록 함.
export { styles, buttons }