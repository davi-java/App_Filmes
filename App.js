import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

import api from './src/Services/api';
import Filmes from './src/Filmes'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false
    })
  }
  
  render() {
    if (this.state.loading) {
      return (
        <View style={{ justifyContent: 'center', alignItems:'center', flex:1 }}>
          <ActivityIndicator
            color="#09A6FF"
            size={50}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

