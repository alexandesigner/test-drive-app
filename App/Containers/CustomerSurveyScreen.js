import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, TouchableHighlight, StatusBar } from 'react-native'
import { Icon, List, Button, Rating } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/CustomerSurveyScreenStyles'

class CustomerSurveyScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Pesquisa de satisfação</Text>,
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
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>Pergunta</Text>
              <Rating
                showRating
                onFinishRating={this.ratingCompleted}
                type="star"
                fractions={1}
                startingValue={3.6}
                imageSize={40}
                style={{ paddingVertical: 10, background: 'transparent' }}
              />
            </View>
          </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSurveyScreen)
