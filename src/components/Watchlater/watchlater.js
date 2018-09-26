import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, ScrollView, ListView, View, } from 'react-native';
import { Color, Styles } from '@common'

const datas = [
    'PMP - Lession 1 Introduced',
    'What are PMI and PMP',      
];

export default class WatchLater extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Watch Later',
        // headerLeft: null,
        headerRight: null,
        headerTintColor: Color.white,
        headerStyle: Styles.headerBg,
        headerTitleStyle: Styles.headerTitle,
    })
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }

    render() {

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        return (
            <View style={styles.container}>
                <ScrollView>                   
                    <Content>
                        <List                            
                            rightOpenValue={-75}
                            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                            renderRow={data =>
                                <ListItem>
                                    <View>
                                    <Text> {data} </Text>
                                    </View>
                                </ListItem>}                           
                            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                                <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                    <Icon active name="trash" />
                                </Button>}
                        />
                    </Content>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerBg: {
        backgroundColor: Color.primary,
        paddingTop: 35,
        paddingBottom: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    headerTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Color.white,
    },
    backIcon: {
        color: '#fff',
        fontSize: 32,
        paddingRight: 30,
    },    
});
