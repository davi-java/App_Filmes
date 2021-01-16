import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Filmes extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    {this.props.data.nome}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})