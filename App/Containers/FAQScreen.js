import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Dimensions, Text, View } from 'react-native'
import HTML from 'react-native-render-html'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/FAQScreenStyles'

// Components
import Toolbar from '../Components/Toolbar'

class FAQScreen extends Component {
  static navigationOptions = {
    header: false
  }
  render () {
    const { faq } = this.props
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Perguntas Frequentes"
          bgColor="#fff"
          {...this.props}
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            {faq.map(item => {
              return (
                <View key={item.id} style={{ flex: 1, padding: 20 }}>
                  <Text style={{ color: Colors.brand, fontSize: 22, fontWeight: '700' }}>{item.question}</Text>
                  <HTML
                    html={item.answer}
                    baseFontStyle={{ fontSize: 16, lineHeight: 24, color: Colors.textLight, marginBottom: 10 }}
                    imagesMaxWidth={Dimensions.get('window').width}
                  />
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    faq: state.faq.faq
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQScreen)
