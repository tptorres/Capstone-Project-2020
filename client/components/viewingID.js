import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ImageStore,
  SafeAreaView,
  FlatList,
  Modal,
} from 'react-native';
import { Avatar, Button, Divider, Icon } from 'react-native-elements';
import { IconButton } from 'react-native-paper';

const Nav = ({ navigation, setMainView }) => {
  const [onPortfolio, setPortfolio] = useState(true);

  const passUp = bool => {
    setPortfolio(bool);
    setMainView(bool);
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => passUp(true)} style={styles.navPortfolio}>
        <IconButton icon={onPortfolio ? 'briefcase' : 'briefcase-outline'} size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => passUp(false)} style={styles.navReviews}>
        <IconButton icon={!onPortfolio ? 'comment-text-multiple' : 'comment-text-multiple-outline'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const PortfolioItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image style={styles.portfolioImage} source={{ uri: item.image }} />
    </TouchableOpacity>
  );
};

const ReviewItem = ({ item }) => {};

const viewingID = ({ route, navigation }) => {
  const {
    item: { name, image, id, description },
  } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Request', { name })} style={styles.connectBtn}>
          <Text style={styles.connectText}>Connect</Text>
        </TouchableOpacity>
      ),
    });
  });

  const [modalOpen, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [mainView, setMainView] = useState(true);
  const [columnCount, setCount] = useState(2);

  const portfolioImages = [
    {
      id: '1',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description:
        'Testing how exactly i will do things in this way and which they will be playing. As you can see this room exhibits qualites of a major hardcore fucking man  and that is his life goal to be and be ambgious as hell.',
    },
    {
      id: '2',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly i will do things in this way and which they will be playing',
    },
    {
      id: '3',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly i will do things in this way and which they will be playing',
    },
    {
      id: '4',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '5',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '6',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '7',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '8',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
    {
      id: '9',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https://i.ytimg.com/vi/JZOIUT88EVc/hqdefault.jpg&f=1&nofb=1',
      description: 'Testing how exactly I will do things in this way and which they will be playing',
    },
  ];

  const reviews = [
    {
      key: '1',
      name: 'Stephania Sam',
      rating: 5,
      description: 'They were extremely helpful in getting my room to where i wanted it to be!',
    },
    {
      key: '2',
      name: 'Henry Smith',
      rating: 4,
    },
    {
      key: '3',
      name: 'Stacey Wayne',
      rating: 3,
    },
    {
      key: '4',
      name: 'Roger Davis',
      rating: 4,
    },
    {
      key: '5',
      name: 'Amy Yam',
      rating: 4,
    },
    {
      key: '6',
      name: 'Janice Lema',
      rating: 4,
    },
    {
      key: '7',
      name: 'Stephen Chia',
      rating: 5,
    },
    { key: '8', name: 'Ranee Rausch', rating: 4 },
    { key: '9', name: 'Denis Pinter', rating: 3 },
    { key: '10', name: 'Juliana Whitner', rating: 4 },
    { key: '11', name: 'Darnell Ferrero', rating: 2 },
    { key: '12', name: 'Karrie Noblitt', rating: 2 },
    { key: '13', name: 'Mohamed Li', rating: 5 },
    {
      key: '14',
      name: 'Aurelia Farnum',
      rating: 3,
    },
    { key: '15', name: 'Ben Breeding', rating: 3 },
    { key: '16', name: 'Ollie Moniz', rating: 4 },
    { key: '17', name: 'Daniel Carrales', rating: 4 },
  ];

  const setupModal = item => {
    setModal(!modalOpen);
    setModalInfo(item);
  };

  const closeModal = () => {
    setModal(!modalOpen);
    setModalInfo({});
  };

  const setupLayout = bool => {
    setMainView(bool);
    setCount(bool ? 2 : 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Avatar size={115} rounded source={{ uri: image }} />
        <Text style={styles.headerText}>{description}</Text>
      </View>
      <View>
        <Nav setMainView={bool => setupLayout(bool)} />
      </View>
      <View style={styles.mainView}>
        {mainView ? (
          <FlatList
            data={portfolioImages}
            numColumns={columnCount}
            key={columnCount}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PortfolioItem onPress={() => setupModal(item)} item={item} />}
          />
        ) : (
          <FlatList
            data={reviews}
            numColumns={columnCount}
            key={columnCount}
            renderItem={({ item }) => <PortfolioItem onPress={() => setupModal(item)} item={item} />}
          />
        )}

        <Modal animationType='fade' visible={modalOpen} transparent>
          <TouchableOpacity onPressOut={() => closeModal()} style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalImageContainer}>
                <Image style={styles.modalImage} source={{ uri: modalInfo.image }} />
              </View>
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalText}>{modalInfo.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Avenir-Roman',
    width: 250,
    lineHeight: 23,
  },
  nav: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 10,
  },
  navPortfolio: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'grey',
  },
  navReviews: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 0.3,
    borderLeftColor: 'grey',
  },
  connectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectText: {
    fontSize: 17,
    color: '#007FFF',
    marginRight: 10,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioImage: {
    width: 150,
    height: 150,
    margin: 20,
    borderWidth: 0.5,
    borderColor: 'black',
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  modalView: {
    height: 400,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 400,
    height: 250,
  },
  modalTextContainer: {
    padding: 15,
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Avenir-Roman',
  },
});

export default viewingID;
