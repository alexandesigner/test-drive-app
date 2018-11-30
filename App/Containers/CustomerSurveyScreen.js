import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, StatusBar } from 'react-native'
import { Button, Rating, Divider } from 'react-native-elements'
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
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <View style={styles.blockContainer}>
              <Text style={styles.blockContainerLabel}>SUA OPINIÃO</Text>
              <Text style={styles.blockContainerName}>Allan Alexandre Damasceno</Text>
            </View>
            <View style={styles.ratingBlock}>
              <View style={styles.ratingItem}>
                <Text style={styles.ratingItemMargin}>Qual sua satisfação com o veículo testado?</Text>
                <Rating
                  onFinishRating={this.ratingCompleted}
                  type="star"
                  startingValue={3}
                  imageSize={40}
                  ratingBackgroundColor='#f1f1f1'
                />
              </View>
              <Divider style={{ backgroundColor: Colors.border }} />
              <View style={styles.ratingItem}>
                <Text style={styles.ratingItemMargin}>Qual sua satisfação com o veículo testado?</Text>
                <Rating
                  onFinishRating={this.ratingCompleted}
                  type="star"
                  startingValue={3}
                  imageSize={40}
                  ratingBackgroundColor='#f1f1f1'
                />
              </View>
              <Divider style={{ backgroundColor: Colors.border }} />
              <View style={styles.ratingItem}>
                <Text style={styles.ratingItemMargin}>Qual sua satisfação com o veículo testado?</Text>
                <Rating
                  onFinishRating={this.ratingCompleted}
                  type="star"
                  startingValue={3}
                  imageSize={36}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.ratingItemMargin}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='600'
            title='CONFIRMAR'
            onPress={() => navigate('DrawerNavigation')}
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSurveyScreen)
