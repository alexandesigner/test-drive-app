import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, TouchableHighlight, StatusBar } from 'react-native'
import { Icon, List, Button, Rating } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/ResumeTravelScreenStyles'

class ResumeTravelScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Resumo do test drive</Text>,
      headerTintColor: Colors.text,
      headerLeft: null
    }
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setHidden(false)
  }
  componentWillUnmount() {
    StatusBar.setHidden(false)
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <View style={{ display: 'flex', flexDirection: 'column', padding: 20, borderBottomWidth: 1, borderColor: '#e1e1e1' }}>
              <Text style={{ fontSize: 12, color: Colors.brand }}>SUA OPINIÃO</Text>
              <Text style={{ fontSize: 18, color: Colors.text }}>Allan Alexandre Damasceno</Text>
            </View>
            <View style={{ padding: 20, backgroundColor: '#fff' }}>
              <View style={{ borderBottomWidth: 1, borderColor: '#e1e1e1', paddingBottom: 20, marginBottom: 20  }}>
                <Text style={{ marginBottom: 15 }}>Qual sua satisfação com o veículo testado?</Text>
                <Rating
                  onFinishRating={this.ratingCompleted}
                  type="star"
                  startingValue={3}
                  imageSize={40}
                  ratingBackgroundColor='#f1f1f1'
                />
              </View>
              <View style={{ borderBottomWidth: 1, borderColor: '#e1e1e1', paddingBottom: 20, marginBottom: 20  }}>
                <Text style={{ marginBottom: 15 }}>Qual sua satisfação com o veículo testado?</Text>
                <Rating
                  onFinishRating={this.ratingCompleted}
                  type="star"
                  startingValue={3}
                  imageSize={40}
                  ratingBackgroundColor='#f1f1f1'
                />
              </View>
              <View style={{ borderBottomWidth: 1, borderColor: '#e1e1e1', paddingBottom: 20, marginBottom: 20  }}>
                <Text style={{ marginBottom: 15 }}>Qual sua satisfação com o veículo testado?</Text>
                <Rating
                  onFinishRating={this.ratingCompleted}
                  type="star"
                  startingValue={3}
                  imageSize={40}
                  ratingBackgroundColor='#f1f1f1'
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='600'
            icon={{name: 'play', type: 'feather'}}
            title='CONFIRMAR'
            onPress={() => navigate('TestDriveScreen')}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeTravelScreen)
