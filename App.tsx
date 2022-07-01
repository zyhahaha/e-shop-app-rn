// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//     </NavigationContainer>
//   );
// };

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Button, Text, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  disFlex: {
    display: 'flex',
  },
  flexOne: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const TabBar = ({navigation}) => {
  return (
    <View style={styles.disFlex}>
      <Button
        style={styles.flexOne}
        title="Home"
        onPress={() => {
          navigation.navigate('Profile', {name: 'Jane'});
        }}
      />
      <Button
        style={styles.flexOne}
        title="Home"
        onPress={() => {
          navigation.navigate('Profile', {name: 'Jane'});
        }}
      />
      <Button
        style={styles.flexOne}
        title="Home"
        onPress={() => {
          navigation.navigate('Profile', {name: 'Jane'});
        }}
      />
    </View>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <TabBar navigation={undefined} />
    // <Button
    //   title="Go to Jane's profile Page"
    //   onPress={() =>
    //     {
    //       navigation.navigate('Profile', { name: 'Jane' });
    //     }
    //   }
    // />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
