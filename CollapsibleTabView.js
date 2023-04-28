import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import { TabView, TabBar } from './fin-one-tab-view/src';
import {} from 'react-native-safe-area-context';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

const TabBarHeight = 48;
const SearchHeight = 35;
const TABS_TOP = 50;
const SEARCH_TOP = 50;
const tab1ItemSize = (Dimensions.get('window').width - 30) / 2;
const tab2ItemSize = (Dimensions.get('window').width - 40) / 3;
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const TabScene = ({ numCols, data, renderItem, onGetRef, onScroll, onScrollEndDrag, onMomentumScrollEnd, onMomentumScrollBegin }) => {
	const insets = useSafeAreaInsets();
	const headerHeight = useHeaderHeight();

	return (
		<ScrollView scrollEventThrottle={16} ref={onGetRef} onScroll={onScroll} contentContainerStyle={{ paddingTop: headerHeight + TabBarHeight + SearchHeight+ 10 }}>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
			<Text>aaaaaa</Text>
		</ScrollView>
	);
};

const CollapsibleTabView = ({ navigation }) => {
	const [tabIndex, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'tab1', title: 'Accounts' },
		{ key: 'tab2', title: 'Cards' }
	]);
	const [tab1Data] = useState(Array(40).fill(0));
	const [tab2Data] = useState(Array(30).fill(0));
	const scrollY = useRef(new Animated.Value(0)).current;
	const topHeaderIcons = useRef(new Animated.Value(0)).current;
	let listRefArr = useRef([]);
	let listOffset = useRef({});
	let isListGliding = useRef(false);

	const insets = useSafeAreaInsets();
	const headerHeight = useHeaderHeight();

	const AnimateIonIcons = Animated.createAnimatedComponent(Ionicons);
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<AnimateIonIcons
					name="person-circle-outline"
					size={40}
					color="black"
					onPress={() => {
						navigation.toggleDrawer();
					}}
					style={{
						marginBottom: 10,
						transform: [{ translateY: topHeaderIcons }]
					}}
				/>
			),
			headerRight: () => <AnimateIonIcons name="md-notifications" size={28} color="black" />
		});
	}, []);

	// useEffect(() => {
	//     scrollY.addListener(({ value }) => {
	//         const curRoute = routes[tabIndex].key;
	//         listOffset.current[curRoute] = value;
	//     });
	//     return () => {
	//         scrollY.removeAllListeners();
	//     };
	// }, [routes, tabIndex]);

	// const syncScrollOffset = () => {
	//     const curRouteKey = routes[tabIndex].key;
	//     listRefArr.current.forEach((item) => {
	//         if (item.key !== curRouteKey) {
	//             if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
	//                 if (item.value) {
	//                     item.value.scrollToOffset({
	//                         offset: scrollY._value,
	//                         animated: false,
	//                     });
	//                     listOffset.current[item.key] = scrollY._value;
	//                 }
	//             } else if (scrollY._value >= HeaderHeight) {
	//                 if (
	//                     listOffset.current[item.key] < HeaderHeight ||
	//                     listOffset.current[item.key] == null
	//                 ) {
	//                     if (item.value) {
	//                         item.value.scrollToOffset({
	//                             offset: HeaderHeight,
	//                             animated: false,
	//                         });
	//                         listOffset.current[item.key] = HeaderHeight;
	//                     }
	//                 }
	//             }
	//         }
	//     });
	// };

	// const onMomentumScrollBegin = () => {
	//     isListGliding.current = true;
	// };
	// const onMomentumScrollEnd = () => {
	//     isListGliding.current = false;
	//     syncScrollOffset();
	// };
	// const onScrollEndDrag = () => {
	//     syncScrollOffset();
	// };

	const onScroll = Animated.event(
		// scrollX = e.nativeEvent.contentOffset.x
		[
			{
				nativeEvent: {
					contentOffset: {
						y: scrollY
					}
				}
			}
		]
	);

	const onScroll2 = (e) => {

		var offsetY = e.nativeEvent.contentOffset.y;
		if (offsetY < 0) {
			offsetY = 0;
		}
		scrollY.setValue(offsetY);
		console.debug(offsetY);
	};

	const renderHeader = () => {
		const y = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [0, -SearchHeight]
		});
		const scaleY = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [1, 0]
		});
		const opacity = scrollY.interpolate({
			inputRange: [0, SearchHeight - 10],
			outputRange: [1, 0]
		});
		return (
			<Animated.View
				style={[
					styles.header,
					{
						transform: [{ scaleY: scaleY }, { translateY: y }],
						opacity: opacity,
						top: insets.top + SEARCH_TOP,
						zIndex: 999
					}
				]}>
				<TextInput placeholder="Search" style={{ width: '100%', paddingLeft: 15 }} />
			</Animated.View>
		);
	};

	const BCKTabs = () => {
		var y = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [0, -SearchHeight],
			extrapolate: 'clamp'
		});

		return (
			<AnimatedBlurView
				intensity={100}
				style={{
					position: 'absolute',
					width: '100%',
					top: 0,
					height: SearchHeight + TabBarHeight + headerHeight + 10,
					transform: [{ translateY: y }]
				}}></AnimatedBlurView>
		);
	};

	// useEffect(() => {
	//     navigation.setOptions({
	//         renderSearchBar: renderHeader,
	//     });
	// });
	const rednerTab1Item = ({ item, index }) => {
		return (
			<View
				style={{
					borderRadius: 16,
					marginLeft: index % 2 === 0 ? 0 : 10,
					width: tab1ItemSize,
					height: tab1ItemSize,
					backgroundColor: '#aaa',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<Text>{index}</Text>
			</View>
		);
	};

	const rednerTab2Item = ({ item, index }) => {
		return (
			<View
				style={{
					marginLeft: index % 3 === 0 ? 0 : 10,
					borderRadius: 16,
					width: tab2ItemSize,
					height: tab2ItemSize,
					backgroundColor: '#aaa',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<Text>{index}</Text>
			</View>
		);
	};

	const renderLabel = ({ route, focused }) => {
		return <Text style={[styles.label, { opacity: focused ? 1 : 0.5 }]}>{route.title}</Text>;
	};

	const renderScene = ({ route }) => {
		const focused = route.key === routes[tabIndex].key;
		let numCols;
		let data;
		let renderItem;
		switch (route.key) {
			case 'tab1':
				numCols = 2;
				data = tab1Data;
				renderItem = rednerTab1Item;
				break;
			case 'tab2':
				numCols = 3;
				data = tab2Data;
				renderItem = rednerTab2Item;
				break;
			default:
				return null;
		}
		return (
			<TabScene
				numCols={numCols}
				data={data}
				renderItem={renderItem}
				onScroll={onScroll}
				// onMomentumScrollBegin={onMomentumScrollBegin}
				// onScrollEndDrag={onScrollEndDrag}
				// onMomentumScrollEnd={onMomentumScrollEnd}
				onGetRef={(ref) => {
					if (ref) {
						const found = listRefArr.current.find((e) => e.key === route.key);
						if (!found) {
							listRefArr.current.push({
								key: route.key,
								value: ref
							});
						}
					}
				}}
			/>
		);
	};

	const renderTabBar = (props) => {
		const y = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [SearchHeight, 0],
			extrapolateRight: 'clamp'
		});
		return (
			<Animated.View
				style={[
					{
						top: insets.top + TABS_TOP,
						position: 'absolute',
						transform: [{ translateY: y }],
						width: '100%',
						zIndex: 3,
						height: TabBarHeight,
						width: '100%'
					}
				]}>
				<TabBar
					{...props}
					onTabPress={({ route, preventDefault }) => {
						if (isListGliding.current) {
							preventDefault();
						}
					}}
					style={[styles.tab]}
					renderLabel={renderLabel}
					indicatorStyle={styles.indicator}
				/>
			</Animated.View>
		);
	};

	const renderTabView = () => {
		return (
			<TabView
				onIndexChange={(index) => setIndex(index)}
				navigationState={{ index: tabIndex, routes }}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				renderAfter={BCKTabs}
				initialLayout={{
					height: 0,
					width: Dimensions.get('window').width
				}}
			/>
		);
	};

	return (
		<Animated.View style={{ flex: 1, backgroundColor: 'white', overflow: 'hidden' }}>
			{renderHeader()}
			{renderTabView()}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	header: {
		top: 0,
		height: SearchHeight,
		width: '90%',
		backgroundColor: '#E6E6E6',
		justifyContent: 'center',
		position: 'absolute',
		marginLeft: 22,
		borderRadius: 500
	},
	label: { fontSize: 16, color: '#222' },
	tab: { elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent' },
	indicator: { backgroundColor: '#222' }
});

export default CollapsibleTabView;
