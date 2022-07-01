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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  Text,
  Alert
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile Page"
      onPress={() =>
        {
          navigation.navigate('Profile', { name: 'Jane' });
        }
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
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
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
