import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { View, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from "react-redux"
import { Device, Styles } from '@common';

const styles = StyleSheet.create({
    tabbar: {
        // height: Device.isIphoneX ? 60 : 49,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff'
    },
    tab: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                // justifyContent: Device.isIphoneX ? 'flex-start' : 'center',
                // paddingTop: Device.isIphoneX ? 12 : 0
            },
            android: {
                justifyContent: 'center',
            },
        }),
    }
});

class TabBar extends PureComponent {
    onPress(index) {
        this.refs["tabItem" + index].flipInY(900);
        this.props.jumpToIndex(index);
    }

    render() {
        const {
            navigation,
            renderIcon,
            activeTintColor,
            inactiveTintColor,
        } = this.props;

        const {
            routes
        } = navigation.state;


        return (
            <View key="1" style={styles.tabbar}>

                {routes && routes.map((route, index) => {
                    const focused = index === navigation.state.index;
                    const tintColor = focused ? activeTintColor : inactiveTintColor;

                    return (
                        <TouchableWithoutFeedback
                            key={route.key}
                            style={styles.tab}
                            onPress={this.onPress.bind(this, index)}
                        >
                            <Animatable.View
                                ref={"tabItem" + index}
                                style={styles.tab}>
                                {renderIcon({
                                    route,
                                    index,
                                    focused,
                                    tintColor
                                })}
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                    );
                })}

            </View>
        )
    }
}

TabBar.propTypes = {
    user: PropTypes.object,
};
const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(TabBar);
