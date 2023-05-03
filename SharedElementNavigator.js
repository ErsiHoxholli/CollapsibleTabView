import * as React from 'react';
import CollapsibleTabView from './CollapsibleTabView';
import SearchScreen from './SearchScreen';
import { Platform } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

enableScreens();
const Stack = createSharedElementStackNavigator();

function SharedElementNavigator(props) {
	if (Platform.OS == 'web') {
		return (
			<>
				<CollapsibleTabView {...props} />;
			</>
		);
	}

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerStatusBarHeight: 0,
				headerStyle: {
					position: 'fixed',
					top: 0
				},
				headerTransparent: true
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
