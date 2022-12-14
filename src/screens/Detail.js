/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444444',
        }}>
        <StatusBar barStyle={'#EDEDED'} backgroundColor={'#444444'}></StatusBar>
        <View
          style={{
            backgroundColor: '#171717',
            paddingVertical: 20,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon name="chevron-left" size={25} color="#DA0037" />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#EDEDED', fontWeight: 'bold', fontSize: 18}}>
              Detail
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#DA0037" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={this.props.route.params.image}
              style={{
                width: 250,
                height: 250,
              }}></Image>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 10,
            }}>
            {this.props.route.params.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'justify',
              marginHorizontal: 20,
            }}>
            {this.props.route.params.body}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#171717',
            paddingVertical: 20,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="home" size={22} color="#DA0037" solid />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="folder" size={22} color="#DA0037" solid />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="heart" size={22} color="#DA0037" solid />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="user" size={22} color="#DA0037" solid />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="cog" size={22} color="#DA0037" solid />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Detail;
