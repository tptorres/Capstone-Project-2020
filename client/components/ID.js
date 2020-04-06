import React, { Component } from 'react';
import { Avatar, Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ImageStore,
} from 'react-native';
//import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

export default function ID({ route, navigation }) {
  const { name } = route.params;
  const { uri } = route.params;
  const { id } = route.params;
  const empty = (
    <TouchableOpacity>
      <Text style={styles.account}>Account</Text>
    </TouchableOpacity>
  );
  const type = id == 'NID' ? true : false;
  const upload = <Text style={styles.upload}>Upload Photo</Text>;
  const button = (
    <Button
      onPress={() => navigation.navigate('Chat')}
      icon={
        <Icon reverse name='envelope-o' size={30} type='ionicon' color='blue' />
      }
      title='Connect'
      TouchableComponent={TouchableOpacity}
      titleStyle={{ paddingLeft: 10, alignSelf: 'flex-end' }}
      buttonStyle={{ backgroundColor: 'red' }}
    />
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.idRow}>
        <Avatar
          size='large'
          containerStyle={{ borderWidth: 3 }}
          rounded
          source={{
            uri: uri,
          }}
        />
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.designerInfo}>{name}</Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            paddingLeft: 100,
          }}
        >
          {type ? button : empty}
        </View>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Divider style={styles.divider} />
      </View>
      <View style={styles.imageRow}>
        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>
      </View>

      {!type && (
        <View>
          <Divider style={styles.divider} />
          <TouchableOpacity>{upload}</TouchableOpacity>
        </View>
      )}

      {/* <TouchableOpacity>{type ? empty : upload}</TouchableOpacity> */}

      <View style={styles.bottom}>
        <Divider style={styles.divider} />
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'flex-end' }}
          onPress={() => navigation.navigate('Chat', { name: 'Jane' })}
        >
          <Icon reverse name='comment' size={65} type='ionicon' color='blue' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  idRow: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
  },
  designerInfo: {
    fontSize: 20,
    paddingLeft: 10,
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
  },
  bottom: {
    marginBottom: 20,
  },
  imageRow: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageView: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    alignSelf: 'center',
  },
  divider: {
    height: 3,
    backgroundColor: 'black',
  },
  upload: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 25,
  },
  account: {
    fontSize: 16,
  },
});
