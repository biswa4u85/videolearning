import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Image, I18nManager } from 'react-native'
import { connect } from 'react-redux'
import { Text } from '@components'
import { Color, Images, Config } from '@common'
import { DrawerButton } from '../DrawerButton'
import styles from './styles'

class DrawerMultiChild extends PureComponent {

  constructor(props) {
    super(props)

    const { user } = props.userProfile

    // Config Menu
    if (user) {
      this.buttonList = [...Config.menu.listMenu, ...Config.menu.listMenuLogged]
    } else {
      this.buttonList = [
        ...Config.menu.listMenu,
        ...Config.menu.listMenuUnlogged,
      ]
    }

    this.state = {}
  }

  componentWillReceiveProps(props) {
    const { userProfile } = props

    if (userProfile && userProfile.user) {
      this.buttonList = [...Config.menu.listMenu, ...Config.menu.listMenuLogged]
    }
  }

  _handlePress = (item) => {
    const { goToScreen } = this.props
    goToScreen(item.routeName, item.params, false)
  }

  render() {
    const {
      userProfile,
      backgroundMenu,
      colorTextMenu,
    } = this.props
    const user = userProfile.user
    const avatar = (user && user.profileImage) ? { uri: user.profileImage } : Images.loginLogo
    return (
      <View style={styles.container}>
        <View style={styles.avatarBackground}>
          <Image
            source={avatar}
            style={[styles.avatar, I18nManager.isRTL && { left: -20 }]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.fullName}>
              {user ? user.firstName : ''} {user ? user.lastName : ''}
            </Text>
            <Text style={styles.email}>
              {user ? user.mobile : ''}
            </Text>
          </View>
        </View>
        <ScrollView>
          {this.buttonList.map((item, index) => (
            <DrawerButton
              {...item}
              key={index}
              onPress={() => this._handlePress(item)}
              uppercase
              textStyle={styles.textItem}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ user, netInfo }) => ({
  userProfile: user,
  netInfo
})

export default connect(mapStateToProps, null, null)(DrawerMultiChild)
