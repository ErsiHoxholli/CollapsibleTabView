import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CollapsibleTabView from './CollapsibleTabView';
import SearchScreen from './SearchScreen';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens();

const Stack = createSharedElementStackNavigator();

function SharedElementNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}>
			<Stack.Screen name="CollapsibleTabView" component={CollapsibleTabView} />
			<Stack.Screen
				name="SearchScreen"
				component={SearchScreen}
				options={() => ({
					gestureEnabled: false,
					transitionSpec: {
						open: {
							animation: 'timing',
							config: { duration: 300 }
						},
						close: {
							animation: 'timing',
							config: { duration: 300 }
						}
					},
					cardStyleInterpolator: ({ current: { progress } }) => {
						return {
							cardStyle: {
								opacity: progress
							}
						};
					}
				})}
			/>
		</Stack.Navigator>
	);
}
export default SharedElementNavigator;
