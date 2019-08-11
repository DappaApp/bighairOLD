import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Button, Modal, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

class NailsDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Unhas',
    headerTintColor: '#FFF',
    headerBackground: (
      <LinearGradient
        colors={['#C42664','#C42664']}
        style={{ flex: 1 }}
        locations={[0.4, 1]}
        useAngle={true}
        angle={180}
        />
    ),
  };

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity 
          style={{width: '100%', marginTop: 25}} 
          onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
        >
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
          <View style={[styles.cardTouch]}>
            <Text>
              O serviço inclui remoção do esmalte, corte, cutilagem e esmaltação das unhas das mãos. Nossos profissionais utilizam materiais descartáveis e esterelizados em autoclave.
            </Text>
            <View style={[styles.line]}></View>
            <Text style={[styles.durationText]}>Duração: 30 a 45 minutos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{width: '100%', marginTop: 25}} onPress={() => this.props.navigation.navigate('')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
          <View style={[styles.cardTouch]}>
            <Text>
              O serviço inclui remoção do esmalte, corte, cutilagem e esmaltação das unhas das mãos. Nossos profissionais utilizam materiais descartáveis e esterelizados em autoclave.
            </Text>
            <View style={[styles.line]}></View>
            <Text style={[styles.durationText]}>Duração: 30 a 45 minutos</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <StatusBar barStyle="light-content" />
          <View style={[styles.modalHeader]}>
          
            <View style={{marginTop: 42}}>
            <View style={[styles.row]}>
            <Text style={[styles.titleModal]}>Serviço</Text>
              <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Icon name="times" size={22} style={[styles.closeModalBtn]} />
                </TouchableHighlight>
            </View>
              <View style={{marginTop: 60, backgroundColor: '#FFF'}}>
                
                <View style={[styles.cardAddress]}>
                  <View style={[styles.row]}>
                    <Icon name="map-marker" size={22} style={[]} color={'#C42664'} />
                    <Text style={{fontWeight: 'bold', color: '#616161', marginTop: 4, marginLeft: 10}}>Onde será o atendimento?</Text>
                  </View>  
                </View>
              
              </View>

             
            </View>
          </View>
        </Modal>

      
      </View>

      </ScrollView>
    );
  }
}

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'BigHair',
    headerTintColor: '#FFF',
    headerBackground: (
      <LinearGradient
        colors={['#C42664','#C42664']}
        style={{ flex: 1 }}
        locations={[0.4, 1]}
        useAngle={true}
        angle={180}
        />
    )
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <View style={[styles.row,styles.cityHomeBar]}>
            <Text style={{marginTop: 20, color: '#696969'}}>Grande São Paulo - SP</Text>
            <TouchableOpacity style={[styles.btnDefault]}>
              <Text style={{color: '#696969', fontWeight: 'bold', marginTop: 2}}>Trocar</Text>
            </TouchableOpacity>
          </View>

        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('NailsDetails')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

class OrderScreen extends React.Component{
  static navigationOptions = {
    title: 'BigHair',
    headerTintColor: '#FFF',
    headerBackground: (
      <LinearGradient
        colors={['#C42664','#C42664']}
        style={{ flex: 1 }}
        locations={[0.4, 1]}
        useAngle={true}
        angle={180}
        />
    )
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <View style={[styles.row,styles.cityHomeBar]}>
            <Text style={{marginTop: 20, color: '#696969'}}>Grande São Paulo - SP</Text>
            <TouchableOpacity style={[styles.btnDefault]}>
              <Text style={{color: '#696969', fontWeight: 'bold', marginTop: 2}}>Trocar</Text>
            </TouchableOpacity>
          </View>

        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    );
  }
}

class AccountScreen extends React.Component{
  static navigationOptions = {
    title: 'BigHair',
    headerTintColor: '#FFF',
    headerBackground: (
      <LinearGradient
        colors={['#C42664','#C42664']}
        style={{ flex: 1 }}
        locations={[0.4, 1]}
        useAngle={true}
        angle={180}
        />
    )
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <View style={[styles.row,styles.cityHomeBar]}>
            <Text style={{marginTop: 20, color: '#696969'}}>Grande São Paulo - SP</Text>
            <TouchableOpacity style={[styles.btnDefault]}>
              <Text style={{color: '#696969', fontWeight: 'bold', marginTop: 2}}>Trocar</Text>
            </TouchableOpacity>
          </View>

        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    );
  }
}

class HelpScreen extends React.Component{
  static navigationOptions = {
    title: 'BigHair',
    headerTintColor: '#FFF',
    headerBackground: (
      <LinearGradient
        colors={['#C42664','#C42664']}
        style={{ flex: 1 }}
        locations={[0.4, 1]}
        useAngle={true}
        angle={180}
        />
    )
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <View style={[styles.row,styles.cityHomeBar]}>
            <Text style={{marginTop: 20, color: '#696969'}}>Grande São Paulo - SP</Text>
            <TouchableOpacity style={[styles.btnDefault]}>
              <Text style={{color: '#696969', fontWeight: 'bold', marginTop: 2}}>Trocar</Text>
            </TouchableOpacity>
          </View>

        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={() => this.props.navigation.navigate('Details')}>
          <Image
          style={[styles.homeIcons]}
          source={require('./assets/images/bighairexample.jpg')}
          />
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  homeIcons: {
    width: '90%',
    height: 200,
    marginLeft: '5%',
    borderRadius: 10,
    marginBottom: 20,
  }, 
  row: {
    flexDirection: 'row',
  },
  cityHomeBar: {},
  btnDefault: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginLeft: 155,
    marginTop: 10,
    marginBottom: 10,
    height: 40
  },
  cardTouch: {
    width: '90%',
    
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginLeft: '5%',
    marginTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    textAlign: 'center',
    height: 'auto',
  },
  cardAddress: {
    width: '90%',
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginLeft: '5%',
    marginTop: '-7%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    textAlign: 'center',
    height: 150,
  },
  line: {
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor: '#757575',
    borderBottomWidth: 0.5,
  },
  durationText:{
    marginBottom: 15,
  },
  modalHeader: {
    backgroundColor: '#C42664', width: '100%', height: 85
  },
  titleModal: {
    marginLeft: 170, 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginTop: 12,
  },
  closeModalBtn: {
    color: '#FFF',
    marginLeft: 140,
    marginTop: 10
  },
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  NailsDetails: NailsDetailsScreen,
});

const OrderStack = createStackNavigator({
  Order: OrderScreen,
  
});

const AccountStack = createStackNavigator({
  Account: AccountScreen,
  
});

const HelpStack = createStackNavigator({
  Account: AccountScreen,
  
});

/*const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen}
});*/

export default createAppContainer(createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        
        tabBarLabel: "Serviços",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="briefcase" size={22} style={{marginTop: 5}} color={focused ? '#C42664' : 'gray'} />
        )
      },
    },
    Pedidos: {
      screen: OrderStack,
      navigationOptions: {
        tabBarLabel: "Meus Pedidos",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="shopping-cart" size={22} style={{marginTop: 5}} color={focused ? '#C42664' : 'gray'} />
        )
      },
    },
    Conta: {
      screen: AccountStack,
      navigationOptions: {
        tabBarLabel: "Minha Conta",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="user" size={22} style={{marginTop: 5}} color={focused ? '#C42664' : 'gray'} />
        )
      },
    },
    Ajuda: {
      screen: HelpStack,
      navigationOptions: {
        tabBarLabel: "Ajuda",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="question" size={22} style={{marginTop: 5}} color={focused ? '#C42664' : 'gray'} />
        )
      },
    },
  },
  {
    /* Other configuration remains unchanged */
    tabBarOptions: {
      activeTintColor: '#C42664',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
    
  }
));


