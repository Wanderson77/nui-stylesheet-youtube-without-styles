import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import data from './src/assets/data.json';

import VideoSections from './src/components/VideoSections';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.navBar}>

          <Image source={require('./src/assets/logo.png')} style={{ width: 98, height: 22 }} />

          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.body}>

          <VideoSections
            video={data.items[0]}
          />

        </View>

        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1
  },

  container: {
    padding: 15
  },

  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  rightNav: {
    flexDirection: 'row'
  },

  navItem: {
    marginLeft: 25
  },

  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  },

  descContainer: {
    flexDirection: 'row',
    paddingTop: 15
  },

  videoTitle: {
    fontSize: 16,
    color: '#3c3c3c'
  },

  videoDetails: {
    paddingHorizontal: 15,
    flex: 1
  },

  videoStats: {
    fontSize: 15,
    paddingTop: 3,
    color : "grey"
  }

});
