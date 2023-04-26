import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
    TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import { TabView, TabBar } from "react-native-tab-view";

const TabBarHeight = 48;
const HeaderHeight = 35;
const tab1ItemSize = (Dimensions.get("window").width - 30) / 2;
const tab2ItemSize = (Dimensions.get("window").width - 40) / 3;
const TabScene = ({
    numCols,
    data,
    renderItem,
    onGetRef,
    scrollY,
    onScrollEndDrag,
    onMomentumScrollEnd,
    onMomentumScrollBegin,
}) => {
    const windowHeight = Dimensions.get("window").height;

    const onScroll = (e) => {
        const animatedScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
                useNativeDriver: true,
            }
        );
        var offsetY = e.nativeEvent.contentOffset.y;
        if (offsetY < 0) {
            offsetY = 0;
        }
        scrollY.setValue(offsetY);
        console.debug(offsetY);
    };

    return (
        <Animated.FlatList
            scrollToOverflowEnabled={true}
            numColumns={numCols}
            ref={onGetRef}
            scrollEventThrottle={16}
            onScroll={onScroll}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListHeaderComponent={() => <View style={{ height: 10 }} />}
            contentContainerStyle={{
                paddingTop: HeaderHeight + TabBarHeight,
                paddingHorizontal: 10,
                minHeight: windowHeight - TabBarHeight,
            }}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

const CollapsibleTabView = () => {
    const [tabIndex, setIndex] = useState(0);
    const [routes] = useState([
        { key: "tab1", title: "Accounts" },
        { key: "tab2", title: "Cards" },
    ]);
    const [tab1Data] = useState(Array(40).fill(0));
    const [tab2Data] = useState(Array(30).fill(0));
    const scrollY = useRef(new Animated.Value(0)).current;
    let listRefArr = useRef([]);
    let listOffset = useRef({});
    let isListGliding = useRef(false);

    useEffect(() => {
        scrollY.addListener(({ value }) => {
            const curRoute = routes[tabIndex].key;
            listOffset.current[curRoute] = value;
        });
        return () => {
            scrollY.removeAllListeners();
        };
    }, [routes, tabIndex]);

    const syncScrollOffset = () => {
        const curRouteKey = routes[tabIndex].key;
        listRefArr.current.forEach((item) => {
            if (item.key !== curRouteKey) {
                if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
                    if (item.value) {
                        item.value.scrollToOffset({
                            offset: scrollY._value,
                            animated: false,
                        });
                        listOffset.current[item.key] = scrollY._value;
                    }
                } else if (scrollY._value >= HeaderHeight) {
                    if (
                        listOffset.current[item.key] < HeaderHeight ||
                        listOffset.current[item.key] == null
                    ) {
                        if (item.value) {
                            item.value.scrollToOffset({
                                offset: HeaderHeight,
                                animated: false,
                            });
                            listOffset.current[item.key] = HeaderHeight;
                        }
                    }
                }
            }
        });
    };

    const onMomentumScrollBegin = () => {
        isListGliding.current = true;
    };

    const onMomentumScrollEnd = () => {
        isListGliding.current = false;
        syncScrollOffset();
    };

    const onScrollEndDrag = () => {
        syncScrollOffset();
    };

    const renderHeader = () => {
        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [0, -HeaderHeight],
        });

        const scaleY = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [1, 0],
        });

        const opacity = scrollY.interpolate({
            inputRange: [0, HeaderHeight - 10],
            outputRange: [1, 0],
        });

        return (
            <Animated.View
                style={[
                    styles.header,
                    {
                        transform: [{ scaleY: scaleY }, { translateY: y }],
                        opacity: opacity,
                        zIndex: 999,
                    },
                ]}
            >
                <TextInput
                    placeholder="Search"
                    style={{ width: "100%", paddingLeft: 15 }}
                />
            </Animated.View>
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
                    backgroundColor: "#aaa",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
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
                    backgroundColor: "#aaa",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>{index}</Text>
            </View>
        );
    };

    const renderLabel = ({ route, focused }) => {
        return (
            <Text style={[styles.label, { opacity: focused ? 1 : 0.5 }]}>
                {route.title}
            </Text>
        );
    };

    const renderScene = ({ route }) => {
        const focused = route.key === routes[tabIndex].key;
        let numCols;
        let data;
        let renderItem;
        switch (route.key) {
            case "tab1":
                numCols = 2;
                data = tab1Data;
                renderItem = rednerTab1Item;
                break;
            case "tab2":
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
                scrollY={scrollY}
                onMomentumScrollBegin={onMomentumScrollBegin}
                onScrollEndDrag={onScrollEndDrag}
                onMomentumScrollEnd={onMomentumScrollEnd}
                onGetRef={(ref) => {
                    if (ref) {
                        const found = listRefArr.current.find(
                            (e) => e.key === route.key
                        );
                        if (!found) {
                            listRefArr.current.push({
                                key: route.key,
                                value: ref,
                            });
                        }
                    }
                }}
            />
        );
    };

    const renderTabBar = (props) => {
        const y = scrollY.interpolate({
            inputRange: [0, HeaderHeight],
            outputRange: [HeaderHeight, 0],
            extrapolateRight: "clamp",
        });
        return (
            <Animated.View
                style={{
                    top: 0,
                    zIndex: 1,
                    position: "absolute",
                    transform: [{ translateY: y }],
                    width: "100%",
                }}
            >
                <TabBar
                    {...props}
                    onTabPress={({ route, preventDefault }) => {
                        if (isListGliding.current) {
                            preventDefault();
                        }
                    }}
                    style={styles.tab}
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
                initialLayout={{
                    height: 0,
                    width: Dimensions.get("window").width,
                }}
            />
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {renderHeader()}
            {renderTabView()}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        top: 0,
        height: HeaderHeight,
        width: "90%",
        backgroundColor: "#E6E6E6",
        justifyContent: "center",
        position: "absolute",
        marginLeft: 22,
        borderRadius: 500,
    },
    label: { fontSize: 16, color: "#222" },
    tab: { elevation: 0, shadowOpacity: 0, backgroundColor: "#FFF" },
    indicator: { backgroundColor: "#222" },
});

export default CollapsibleTabView;