import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CollapsibleTabView from './CollapsibleTabView';
import SearchScreen from './SearchScreen';
const Stack = createNativeStackNavigator();
function App() {
	return (
        <NavigationContainer contentStyle={{ backgroundColor: 'red' }}>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        headerShadowVisible: false
                    },
                    headerStyle: {
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    headerShadowVisible: false
                }}>
                <Stack.Screen
                    name="CollapsibleTabView"
                    component={CollapsibleTabView}
                    options={() => ({
                        contentStyle: {
                            backgroundColor: 'transparent'
                        },
                        headerTransparent: true,
                        headerTitle: ''
                    })}
                />
                <Stack.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={() => ({
                        contentStyle: {
                            // backgroundColor: 'transparent'
                        },
                        // headerTransparent: true,
                        headerTitle: 'SearchScreen'
                    })}
                    sharedElements={(route, otherRoute, showing) => {
                        const { item } = route.params;
                        return [`item.${item.id}.photo`];
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
	);
}
export default App;
