import React from "react";
import { TouchableOpacity, Platform, View, Text, Image } from 'react-native';
import { Styles, Color, Images, Constants } from '@common'
// import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo'
import { openDrawer } from "@app/Omni"

const hitSlop = { top: 20, right: 20, bottom: 20, left: 20 };

const Logo = () => (
    <Image source={Images.apeLogo} style={Styles.Common.logo} />
)

const TopMenu = (color = Color.white) => (
    <TouchableOpacity style={{ paddingLeft: 10, }} hitSlop={hitSlop} onPress={openDrawer}>
        <Icon name='menu' size={24} color='#fff' />
    </TouchableOpacity>
)

const AddChild = (navigation) => (
    <TouchableOpacity hitSlop={hitSlop} style={{ paddingRight: 10, marginTop: (Platform.OS === 'ios') ? -15 : 0, flexDirection: 'row' }} onPress={() => navigation.navigate('Child')} >
        <Text style={{ paddingRight: 10, color: Color.white }}>Add Child</Text>
        <Icon name={'add-user'} size={20} color={Color.white} />
    </TouchableOpacity >
)

const EmptyView = () => <View style={[
    Styles.Common.Row,
    Constants.RTL ? { left: -10 } : { right: -5 },
    Platform.OS !== 'ios' && { right: -12 }]} />

const Back = (navigation, iconBack) => (<TouchableOpacity
    hitSlop={hitSlop}
    style={{ paddingLeft: 10, marginTop: (Platform.OS === 'ios') ? -15 : 0 }}
    onPress={() => {
        navigation.goBack(null)
    }}>
    <Icon name={'arrow-back'} size={20} color={Color.white} />
</TouchableOpacity>)

export { Back, Logo, TopMenu, AddChild, EmptyView }