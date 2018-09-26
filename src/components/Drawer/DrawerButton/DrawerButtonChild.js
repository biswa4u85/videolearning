import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, I18nManager, Text } from 'react-native'
import { Styles, Color, Constants, Languages } from '@common'
// import { IconIO } from '@app/Omni'

class DrawerButtonChild extends PureComponent {
  render() {
    const { text, iconRight, uppercase, colorText } = this.props
    const transText = text !== '' && Languages[text] ? Languages[text] : text
    return (
      <View style={[styles.container]}>
        <Text
          style={[
            styles.text,
            I18nManager.isRTL && { paddingRight: 20 },
            colorText && {
              color: colorText,
            },
          ]}>
          {uppercase ? transText.toUpperCase() : transText}
        </Text>
        {/* {iconRight && <IconIO name={iconRight} color={colorText} size={24} />} */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // ...Styles.Common.RowCenterBetween,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  text: {
    paddingLeft: 25,
    paddingRight: 25,
    color: Color.blackTextPrimary,
    fontSize: Styles.FontSize.tiny,
    fontFamily: Constants.fontFamily,
    width: null,
  },
})

DrawerButtonChild.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.string,
  uppercase: PropTypes.bool.isRequired,
}
DrawerButtonChild.defaultProps = {
  text: 'Default button name',
  uppercase: false,
  colorText: Color.blackTextPrimary,
}

export default DrawerButtonChild
