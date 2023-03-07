import React from "react";
import { TouchableOpacity, View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyle, images, theme } from "../config";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components";


export const Review = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView edges={["right", "left", "top"]} style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={images.Back} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={styles.headerLabel} >Reviews (245)</Text>
            </View>


            <ScrollView showsVerticalScrollIndicator={false} >
            {/* 1st BOX */}

            <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Roberto Yundt Jr.</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 3.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >4 days ago</Text>
            </View>

        {/* 2st BOX */}

        <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Darrin Olson</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 4.2 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >10 days ago</Text>
            </View>

            {/* 3rdt BOX */}

            <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Bryant Grimes</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 4.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >7 days ago</Text>
            </View>

                {/* 4th BOX */}

                <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Roberto Yundt Jr.</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 3.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >4 days ago</Text>
            </View>

                {/* 5th BOX */}

                <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Roberto Yundt Jr.</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 3.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >4 days ago</Text>
            </View>

             {/* 7th BOX */}

             <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Roberto Yundt Jr.</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 3.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >4 days ago</Text>
            </View>

             {/* 8th BOX */}

             <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Roberto Yundt Jr.</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 3.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >4 days ago</Text>
            </View>

             {/* 9th BOX */}

             <View style={styles.subContainer}>
                <View style={styles.flex} > 
                    <Text style={styles.txtHeading}>Roberto Yundt Jr.</Text>
                    <View style={styles.flex} >
                        <Text style={styles.txtReview}> 3.6 </Text>
                        <Image source={images.star} resizeMode="contain" />
                    </View>
                </View>
                <Text style={styles.detail} >Soluta laboriosam perferendis impedit ut facere. Et ab quo quo nihil eos corrupti occaecati sunt. Voluptatibus error veritatis repudiandae nihil vero nisi. Molestiae voluptatem amet laboriosam.</Text>
                <Text style={styles.time} >4 days ago</Text>
            </View>

            </ScrollView>

            <View style={styles.footer} >
                <Button style={styles.btn} >Post a Review</Button>
            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerLabel:{
        marginLeft: baseStyle.marginLeft(100),
        color: theme.colors.black,
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
    },
    flex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        
    },
    subContainer:{
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        backgroundColor: theme.colors.lightGrey,
        marginHorizontal: baseStyle.marginHorizontal(15),
        borderRadius: baseStyle.borderRadius(16),
        paddingVertical: baseStyle.paddingVertical(10),
        marginVertical: baseStyle.marginVertical(10)
    },
    detail:{
        marginVertical: baseStyle.marginVertical(10),
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        opacity: 0.6,
        fontFamily: theme.font.regular
    },
    txtHeading: {
        fontFamily: theme.font.Bold,
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15)
    },
    time:{
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        opacity: 0.6,
        fontFamily: theme.font.regular
    },
    txtReview:{
        fontFamily: theme.font.light,
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15)
    },
    footer: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        position: 'absolute',
        opacity: 1,
        bottom: 0,
        width: "100%",
        paddingVertical: baseStyle.paddingVertical(18),
        paddingHorizontal: baseStyle.paddingHorizontal(18),
        elevation: 5,
        shadowColor: theme.colors.black,
        shadowOffset: { height: -5, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 6,
    },
});