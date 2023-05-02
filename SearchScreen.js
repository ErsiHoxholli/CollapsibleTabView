import React, { useEffect } from 'react';
import { LayoutAnimation } from 'react-native';
import { Text } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const SearchScreen = () => {
	// const { searchInputRef } = route.params;

	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
	}, []);

	return (
		<SharedElement id={`item.0.photo`}>
			<Text>test</Text>
		</SharedElement>
	);
};

export default SearchScreen;
