import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const SearchScreen = ({ navigation, route }) => {
	const SEARCH_ELEMENT_ID = 'searchElementId';
	return (
		<View style={{ paddingTop: 100 }}>
			<TouchableOpacity onPress={() => navigation.goBack('CollapsibleTabView', { sharedElementId: SEARCH_ELEMENT_ID })}>
				<SharedElement id={SEARCH_ELEMENT_ID}>
					<Text>Test Shared Element Transition</Text>
				</SharedElement>
			</TouchableOpacity>
		</View>
	);
};

SearchScreen.sharedElements = (route, otherRoute, showing) => {
	return [route.params.sharedElementId];
};
export default SearchScreen;
