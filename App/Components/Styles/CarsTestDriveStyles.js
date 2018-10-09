import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  labelInfoInner: {
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    color: Colors.text
  },
  modalTitle: {
    marginLeft: 20,
    marginTop: 0,
    fontSize: 26,
    fontWeight: '700',
    color: Colors.brand
  },
  modalCheckbox: {
    backgroundColor: 'transparent',
    paddingBottom: 0,
    borderWidth: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 0,
    borderRadius: 0
  }
})
