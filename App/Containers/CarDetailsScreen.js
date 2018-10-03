import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Icon, List, ListItem, Button, Card } from 'react-native-elements'
import ActionSheet from 'react-native-actionsheet'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/CarDetailsScreenStyles'

class CarDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: {
        borderBottomWidth: 0,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: '#fff'
      },
      title: <Text style={ styles.textHeader }>Detalhes de veículo</Text>,
      headerTintColor: Colors.text,
      headerLeft: <Icon
                    containerStyle={styles.toolbarIconLeft}
                    type="feather"
                    name="arrow-left"
                    color={Colors.brand}
                    onPress={() => navigation.navigate('DrawerNavigation')}
                  />,
      headerRight: <Icon
                    containerStyle={styles.toolbarIconRight}
                    type="feather"
                    name="share"
                    color={Colors.brand}
                    onPress={() => console.log('ae')}
                  />
    }
  }
  constructor (props) {
    super(props)
    const carModelFirst = props.carsDetails.map((item, index) => item.models[index])
    const allModels = props.carsDetails.map(item => item.models)
    this.state = {
      carModel: carModelFirst,
      allModels: allModels
    }
  }
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  toggleModel = () => {
    alert(JSON.stringify(this.props.carsDetails[0].models.map(item => item.name)))
  }
  render () {
    const { carModel, allModels } = this.state
    const { carsDetails } = this.props
    const renderCarName = carsDetails.map(item => item.name)
    const renderModelName = carModel.map(item => item.name)
    // Destaques do modelo
    const modelFeatured = carModel.map(item => item.featured)
    const renderFeaturedList = modelFeatured[0].map(item =>
      <ListItem
        key={item.label}
        title={item.label}
        titleNumberOfLines={3}
        titleStyle={{ marginLeft: 15, fontSize: 14, lineHeight: 22, fontWeight: '700', color: Colors.text }}
        leftIcon={<Icon name="check-circle" type="feather" color="green" />}
        containerStyle={{ borderBottomWidth: 0, paddingTop: 5, paddingRight: 0, paddingBottom: 5 }}
        wrapper={{ marginLeft: 0 }}
        hideChevron
      />
    )
    // Ficha técnica
    const modelDatasheet = carModel.map(item => item.datasheet)
    const renderDatasheetList = modelDatasheet[0].map(item =>
      <ListItem
        key={item.label}
        title={item.label}
        subtitle={item.description}
        titleNumberOfLines={2}
        titleStyle={{ fontSize: 12, lineHeight: 22, fontWeight: '600', color: 'grey' }}
        subtitleStyle={{ fontSize: 16, lineHeight: 22, fontWeight: '700', color: Colors.text }}
        wrapperStyle={{ marginLeft: 0 }}
        hideChevron
      />
    )
    const renderFeaturedImage = carsDetails.map(item => (
      <View key={item.id}>
        <Image
          style={styles.featuredImage}
          resizeMode="cover"
          source={item.image}
        />
      </View>
    ))
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={this.showActionSheet}>
          <View style={{ backgroundColor: '#fff', padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.border }}>
            <Text style={{ color: Colors.brand, fontSize: 20 }}>
              {renderCarName}{' '}{renderModelName}
            </Text>
            <Icon name="chevron-down" type="feather" color={Colors.brand} />
          </View>
        </TouchableOpacity>
        <ScrollView style={styles.container}>
            {renderFeaturedImage}
            <TouchableOpacity onPress={this.toggleModel}>
              <Text>Trocar de modelo</Text>
              <Text>{allModels.map(item => item.name)}</Text>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
              <Text style={styles.titleBox}>Destaque do {renderModelName}</Text>
              <Card containerStyle={styles.card}>
                <List containerStyle={{ marginTop: 0, borderTopWidth: 0 }}>
                  {renderFeaturedList}
                </List>
              </Card>
            </View>
            <View style={{ padding: 15 }}>
              <Text style={styles.titleBox}>Ficha técnica</Text>
              <List containerStyle={{ marginTop: 15, backgroundColor: 'transparent' }}>
                {renderDatasheetList}
              </List>
            </View>
        </ScrollView>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Escolha o modelo'}
          options={['Up1', 'Up2', 'Cancelar']}
          cancelButtonIndex={2}
          destructiveButtonIndex={0}
          onPress={(index) => { alert(index) }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    carsDetails: state.carsDetails.carsDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailsScreen)
