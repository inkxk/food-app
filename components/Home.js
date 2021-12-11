import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

Feather.loadFont();

export default Home = () => {

    const renderCategoryItem = ({ item }) => {
        return (
            <View 
                style={[
                    styles.categoryItemWrapper, 
                    { 
                        backgroundColor: item.selected ? colors.primary : colors.white,
                        marginLeft: item.id == 1 ? 20 : 0
                    }
                ]}
            >
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper, { backgroundColor: item.selected ? colors.white : colors.secondary }]}>
                    <Feather name="chevron-right" size={8} style={styles.categorySelectIcon} color={item.selected ? colors.black : colors.white} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                    <Feather name="menu" size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>

            {/* Title */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titleSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList 
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>

            {/* Popular */}
            <View>
                
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },            
    titlesWrapper: { 
        marginTop: 30,
        paddingHorizontal: 20
    },
    titleSubtitle: { 
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        color: colors.textDark
    },
    titlesTitle: { 
        fontFamily: 'Montserrat_700Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2
    },
    searchText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        paddingHorizontal: 20
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20
    },
    categoryItemWrapper: {
        marginRight: 20,
        borderRadius: 20
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        marginTop: 10
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 13,
        marginBottom: 20
    },
    categorySelectIcon: {
        alignSelf: 'center'
    }
})
