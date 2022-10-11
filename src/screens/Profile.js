import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => this.setState({data: json.products}));
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#444444',
          justifyContent: 'space-between',
          flexDirection: 'column',
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
          <TouchableOpacity>
            <Icon name="bars" size={25} color="#DA0037" />
          </TouchableOpacity>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#EDEDED', fontWeight: 'bold', fontSize: 18}}>
              Profile
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#DA0037" />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image
              style={{width: 250, height: 250, borderRadius: 250 / 2}}
              source={require('../assets/img/Me.jpg')}></Image>
          </View>

          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                marginBottom: 20,
              }}>
              Aplikasi dibuat oleh : {'\n'} Wisnu Trenggono Wirayuda {'\n'}{' '}
              Junior IT Developer
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
              }}>
              For more info :
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/wisnu-trenggono-wirayuda-4591821b5/',
                )
              }>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                LinkedIn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.facebook.com/wirayuda.wisnu.5/')
              }>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/wisnu_wirayuda/')
              }>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Instagram
              </Text>
            </TouchableOpacity>
          </View>
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
            onPress={() => this.props.navigation.navigate('Home')}
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Icon name="home" size={22} color="#DA0037" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Album')}
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

export default Profile;
