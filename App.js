import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollapsibleTabView from "./CollapsibleTabView";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer contentStyle={{ backgroundColor: "red" }}>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        headerShadowVisible: false,
                    },
                    headerStyle: {
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerShadowVisible: false,
                }}
            >
                <Stack.Screen
                    name="CollapsibleTabView"
                    component={CollapsibleTabView}
                    options={() => ({
                        header: (props) => {
                            console.debug("props", props);
                            var HEaderBNCK = props.options.headerBackground;
                            return (
                                <View
                                    style={{
                                        flex: 1,
                                        position: "relative",
                                    }}
                                >
                                    <HEaderBNCK></HEaderBNCK>
                                    <SafeAreaView
                                        style={{
                                            zIndex: 2,
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                        }}
                                    >
                                        <View
                                            style={[
                                                {
                                                    flexDirection: "row",
                                                    flex: 1,
                                                },
                                                props.options.headerStyle,
                                            ]}
                                        >
                                            {props.options.headerLeft(props)}
                                            <View
                                                style={{
                                                    flex: 1,
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text>title Here</Text>
                                            </View>
                                            {props.options.headerRight(props)}
                                        </View>
                                        <View
                                            style={{
                                                flex: 1,
                                                backgroundColor: "red",
                                                position: "relative",
                                            }}
                                        >
                                            {props.options.renderSearchBar()}
                                        </View>
                                    </SafeAreaView>
                                </View>
                            );
                        },
                        headerBackground: (props) => {
                            return (
                                <View
                                    intensity={30}
                                    tint="light"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        zIndex: 1,
                                        backgroundColor: "red",
                                    }}
                                >
                                    <View
                                        style={{
                                            height: 150,
                                        }}
                                    ></View>
                                </View>
                            );
                        },
                        renderSearchBar: function () {
                            return (
                                <View
                                    style={{ flex: 1, backgroundColor: "red" }}
                                >
                                    <Text> Search Bar Default </Text>
                                </View>
                            );
                        },
                        headerStyle: {
                            height: 50,
                        },
                        contentStyle: {
                            backgroundColor: "red",
                        },
                        headerTransparent: true,
                        headerTitle: "",
                        headerLeft: () => (
                            <Ionicons
                                name="person-circle-outline"
                                size={40}
                                color="black"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                                style={{
                                    marginBottom: 10,
                                }}
                            />
                        ),
                        headerRight: () => (
                            <Ionicons
                                name="md-notifications"
                                size={28}
                                color="black"
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
