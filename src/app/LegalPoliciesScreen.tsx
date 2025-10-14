import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View, StyleSheet, useWindowDimensions, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HTML from 'react-native-render-html';
 
const LegalPoliciesScreen = () => {
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState<string>('');
    const { width } = useWindowDimensions();

 
 

    return (
        <SafeAreaView style={styles.container}>
             
        
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={styles.illustrationWrapper}>
                    {/* <Image
                        source={imageIndex.aboutus}
                        style={styles.illustration}
                        resizeMode="contain"
                    /> */}
                </View>

                {content ? (
                    <HTML
                        source={{ html: content }}
                        contentWidth={width}
                        tagsStyles={styles.htmlStyles}
                    />
                ) : (
                    <Text style={styles.bodyText}>No content available</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contentContainer: {
        padding: 12,
    },
    illustrationWrapper: {
        alignItems: 'center',
        marginBottom: 16,
    },
    illustration: {
        width: '80%',
        height: hp(30),
    },
    htmlStyles: {
        p: {
            fontSize: 14,
            color: '#333',
            lineHeight: 24,
             fontWeight: '500',
            marginTop: 8,
         },
        h1: {
            fontSize: 22,
            color: '#000',
            marginBottom: 10,
         },
        h2: {
            fontSize: 18,
            color: '#222',
            marginBottom: 8,
         },
        a: {
            color: '#007bff',
        },
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#666',
     },
});

export default LegalPoliciesScreen;
