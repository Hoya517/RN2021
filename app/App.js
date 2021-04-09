import React, {Component} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                    style={StyleSheet.content}>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
})

export default App;
