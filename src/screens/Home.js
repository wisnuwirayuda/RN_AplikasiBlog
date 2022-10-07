import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {FlatGrid} from 'react-native-super-grid';

class Home extends Component {
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
              Hello World
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="search" size={25} color="#DA0037" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatGrid
            itemDimension={300}
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#EDEDED',
                  elevation: 2,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{
                    uri: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg',
                  }}></Image>
                <View>
                  <Text>{item}</Text>
                  <Text>{item}</Text>
                </View>
              </View>
            )}
          />
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

export default Home;
