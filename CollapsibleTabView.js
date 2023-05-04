import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, TouchableNativeFeedback, Platform, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { TabView, TabBar } from './fin-one-tab-view/src';
import {} from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import { useFocusEffect } from '@react-navigation/native';

const TabBarHeight = 48;
const SearchHeight = 35;
const TABS_TOP = 10;
const SEARCH_TOP = 10;
const BACKGROUND_PADDING_BOTTOM = 10;
const tab1ItemSize = (Dimensions.get('window').width - 30) / 2;
const tab2ItemSize = (Dimensions.get('window').width - 40) / 3;
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const SEARCH_ELEMENT_ID = 'searchElementId';
const CANCEL_ELEMENT_ID = 'cancelElementId';

const TabScene = ({ onGetRef, onScroll }) => {
	const insets = useSafeAreaInsets();
	const headerHeight = useHeaderHeight();

	const scrollY = useRef(new Animated.Value(0)).current;
	const topY = scrollY.interpolate({
		inputRange: [0, SearchHeight],
		outputRange: [SearchHeight, 0],
		extrapolate: 'clamp'
	});

	return (
		<Animated.ScrollView
			contentContainerStyle={{ paddingTop: headerHeight + TabBarHeight + SearchHeight + 10 }}
			decelerationRate="normal"
			// contentInset={topY}
			//snapToOffsets={[0, SearchHeight]}
			snapToEnd={false}
			scrollEventThrottle={16}
			ref={onGetRef}
			onScroll={(e) => {
				Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									y: scrollY
								}
							}
						}
					],
					{
						useNativeDriver: false
					}
				);
				onScroll(e);
			}}
			// contentContainerStyle={{ paddingTop: headerHeight + TabBarHeight + SearchHeight + 10 }}
		>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text style={{ color: 'red' }}>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
		</Animated.ScrollView>
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
	const contentY = useRef(new Animated.Value(0)).current;
	const topHeaderIcons = useRef(new Animated.Value(0)).current;
	let listRefArr = useRef([]);
	let listOffset = useRef({});
	let isListGliding = useRef(false);

	const nav = navigation.getParent() || navigation;

	const insets = useSafeAreaInsets();
	const headerHeight = useHeaderHeight();
	const backGroundBlurHeightAnimated = useRef(new Animated.Value(SearchHeight + TabBarHeight + headerHeight + BACKGROUND_PADDING_BOTTOM)).current;
	const SEARCH_TOPAnimated = useRef(new Animated.Value(headerHeight + SEARCH_TOP)).current;
	const TABS_TOPAnimated = useRef(new Animated.Value(headerHeight + SearchHeight + TABS_TOP)).current;

	const AnimateIonIcons = Animated.createAnimatedComponent(Ionicons);

	const setContentsHeaderTop = useCallback(
		function (headerHeight) {
			backGroundBlurHeightAnimated.setValue(SearchHeight + TabBarHeight + headerHeight + BACKGROUND_PADDING_BOTTOM);
			SEARCH_TOPAnimated.setValue(SEARCH_TOP + headerHeight);
			TABS_TOPAnimated.setValue(TABS_TOP + SearchHeight + headerHeight);
		},
		[navigation, SEARCH_TOPAnimated, TABS_TOPAnimated, contentY]
	);

	const onHeaderShow = useCallback(
		function () {
			nav.setOptions({
				headerShown: true
			});
			// contentY.setValue(insets.top - headerHeight);
			// Animated.timing(contentY, {
			// 	duration: 200,
			// 	toValue: 0,
			// 	useNativeDriver: true
			// }).start();
			console.debug('on header show ', headerHeight);

			contentY.setValue(0);
			setContentsHeaderTop(headerHeight);
		},
		[navigation, SEARCH_TOPAnimated, TABS_TOPAnimated, contentY]
	);

	const onHeaderRemove = useCallback(
		function () {
			console.debug('on header remove ', headerHeight);
			contentY.setValue(headerHeight);
			setContentsHeaderTop(0);
			// Animated.timing(contentY, {
			// 	duration: 200,
			// 	toValue: insets.top,
			// 	useNativeDriver: true
			// }).start();
			nav.setOptions({
				headerShown: false
			});
		},
		[navigation, SEARCH_TOPAnimated, TABS_TOPAnimated, contentY]
	);

	useFocusEffect(
		useCallback(() => {
			onHeaderShow();

			return () => {
				onHeaderRemove();
			};
		}, [])
	);

	useEffect(() => {
		nav.setOptions({
			headerLeft: () => (
				<AnimateIonIcons
					name="person-circle-outline"
					size={40}
					color="black"
					onPress={() => {
						navigation.navigate();
					}}
					style={{
						marginBottom: 10,
						transform: [{ translateY: topHeaderIcons }]
					}}
				/>
			),
			headerRight: () => (
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<AnimateIonIcons
						name="md-stats-chart-sharp"
						size={24}
						color="black"
						style={{ marginRight: 15 }}
						onPress={() => {
							navigation.navigate();
						}}
					/>
					<AnimateIonIcons
						name="md-star"
						size={24}
						color="black"
						style={{ marginRight: 15 }}
						onPress={() => {
							navigation.navigate();
						}}
					/>
					<AnimateIonIcons
						name="md-notifications"
						size={24}
						color="black"
						onPress={() => {
							navigation.navigate();
						}}
					/>
				</View>
			)
		});
	}, []);

	const onScroll = Animated.event(
		[
			{
				nativeEvent: {
					contentOffset: {
						y: scrollY
					}
				}
			}
		],
		{
			useNativeDriver: true
		}
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
		// const y = scrollY.interpolate({
		// 	inputRange: [0, SearchHeight],
		// 	outputRange: [0, -SearchHeight],
		// 	extrapolate: 'clamp'
		// });
		const scaleY = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [1, 0],
			extrapolate: 'clamp'
		});
		const opacity = scrollY.interpolate({
			inputRange: [0, SearchHeight - 10],
			outputRange: [1, 0],
			extrapolate: 'clamp'
		});

		const zIndex = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [SearchHeight, 0],
			extrapolate: 'clamp'
		});

		return (
			<Animated.View
				style={[
					styles.header,
					{
						top: SEARCH_TOPAnimated,
						zIndex: zIndex
					}
				]}>
				<SharedElement id={SEARCH_ELEMENT_ID} style={{ flex: 1 }}>
					<Animated.View
						style={[
							styles.searchBackground,
							{
								transform: [{ translateY: -SearchHeight / 2 }, { scaleY: scaleY }, { translateY: SearchHeight / 2 }],
								opacity: opacity
							}
						]}>
						<>
							<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5, padding: 10 }}>
								<TouchableWithoutFeedback
									onPress={() => {
										navigation.push('SearchScreen', { sharedElementIds: [SEARCH_ELEMENT_ID, CANCEL_ELEMENT_ID] });
									}}>
									<View style={{ flex: 1 }}>
										<Text style={{ color: '#aaa', paddingLeft: 5, justifyContent: 'center', alignItems: 'center' }}>Search</Text>
									</View>
								</TouchableWithoutFeedback>
							</View>
						</>
					</Animated.View>
				</SharedElement>
				<SharedElement id={CANCEL_ELEMENT_ID} style={{ flexBasis: 0 }}>
					<Animated.View style={{ height: SearchHeight, width: 50, transform: [{ translateX: 50 }], overflow: 'hidden' }}>
						<View onPress={() => navigation.navigate('CollapsibleTabView')} style={{ flex: 1, alignContent: 'center', justifyContent: 'center', flexBasis: '0%' }}>
							<Text style={{}}> Cancel </Text>
						</View>
					</Animated.View>
				</SharedElement>
			</Animated.View>
		);
	};

	const BCKTabs = () => {
		var y = scrollY.interpolate({
			inputRange: [0, SearchHeight],
			outputRange: [0, -SearchHeight],
			extrapolate: 'clamp'
		});

		var elevation = scrollY.interpolate({
			inputRange: [-SearchHeight, 0, SearchHeight],
			outputRange: [0, 0, 3],
			extrapolate: 'clamp'
		});
		const BackgroundViewComponent = Platform.OS === 'android' ? Animated.View : AnimatedBlurView;
		return (
			<BackgroundViewComponent
				intensity={100}
				style={{
					position: 'absolute',
					width: '100%',
					top: 0,
					height: backGroundBlurHeightAnimated,
					transform: [{ translateY: y }],
					...Platform.select({
						android: {
							backgroundColor: 'rgb(255,255,255)',
							zIndex: 1,
							elevation: elevation
						}
					})
				}}></BackgroundViewComponent>
		);
	};

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
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									y: scrollY
								}
							}
						}
					],
					{
						useNativeDriver: false
					}
				)}
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
			outputRange: [0, -SearchHeight],
			extrapolate: 'clamp'
		});
		return (
			<Animated.View
				style={[
					{
						top: TABS_TOPAnimated,
						//position: 'absolute',
						transform: [{ translateY: y }],
						zIndex: 2,
						elevation: 6,
						height: TabBarHeight,
						width: "55%",
						paddingHorizontal: 20
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
				style={{ zIndex: 6, elevation: 5 }}
				onIndexChange={(index) => setIndex(index)}
				navigationState={{ index: tabIndex, routes }}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				renderAfter={BCKTabs}
				initialLayout={{
					height: 0,
					//width: Dimensions.get('window').width
				}}
			/>
		);
	};

	return (
		<Animated.View style={{ flex: 1, backgroundColor: 'white', overflow: 'hidden', transform: [{ translateY: contentY }] }}>
			{renderHeader()}
			{renderTabView()}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
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
		width: '100%',
		height: SearchHeight,
		flex: 1
	},
	label: { fontSize: 16, color: '#222' },
	tab: { elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent', height: TabBarHeight, width: 'auto' },
	indicator: { backgroundColor: '#222' }
});

export default CollapsibleTabView;
