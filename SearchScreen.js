import * as React from 'react';
import { StyleSheet, View, Text, Animated, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const SEARCH_ELEMENT_ID = 'searchElementId';
const CANCEL_ELEMENT_ID = 'cancelElementId';
const SearchHeight = 35;

const SearchScreen = ({ navigation, route }) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={[styles.header, { top: insets.top }]}>
				<SharedElement id={SEARCH_ELEMENT_ID} style={{ flex: 1 }}>
					<View style={[styles.searchBackground, { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
						{Platform.OS === 'android' && (
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<Ionicons name="arrow-back" size={24} color="black" style={{ paddingLeft: 10 }} />
							</TouchableOpacity>
						)}
						<TextInput
							autoFocus={true}
							onFocus={() => {
								//onHeaderRemove();
								//navigation.push('SearchScreen', { sharedElementId: SEARCH_ELEMENT_ID });
							}}
							onBlur={() => {
								//onHeaderShow();
								//navigation.push('SearchScreen', { sharedElementId: SEARCH_ELEMENT_ID });
							}}
							placeholder="Search, etj etj etj eshte shume fiks"
							style={{ width: '100%', paddingLeft: 15 }}></TextInput>
					</View>
				</SharedElement>
				{Platform.OS === 'ios' && (
					<SharedElement id={CANCEL_ELEMENT_ID} style={{ flexBasis: 'auto' }}>
						<TouchableOpacity onPress={() => navigation.navigate('CollapsibleTabView')}>
							<Animated.View style={{ height: SearchHeight, width: 60, transform: [{ translateX: 0 }], overflow: 'hidden' }}>
								<View
									onPress={() => navigation.navigate('CollapsibleTabView')}
									style={{ flex: 1, alignContent: 'center', justifyContent: 'center', overflow: 'hidden', flexBasis: 'auto' }}>
									<Text style={{ color: '#0984f8', fontWeight: '500', fontSize: 17 }}> Cancel </Text>
								</View>
							</Animated.View>
						</TouchableOpacity>
					</SharedElement>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: 'relative',
		height: SearchHeight,
		width: '100%',
		paddingHorizontal: 20,
		flexDirection: 'row'
	},
	searchBackground: {
		backgroundColor: '#E6E6E6',
		justifyContent: 'center',
		position: 'absolute',
		borderRadius: 500,
		width: '98%',
		height: SearchHeight,
		flex: 1
	},
	label: { fontSize: 16, color: '#222' },
	tab: { elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent' },
	indicator: { backgroundColor: '#222' }
});

SearchScreen.sharedElements = (route, otherRoute, showing) => {
	return route.params.sharedElementIds;
};
export default SearchScreen;
