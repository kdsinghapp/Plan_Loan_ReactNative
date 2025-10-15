import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View, StyleSheet, useWindowDimensions, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HTML from 'react-native-render-html';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import strings from '../Languages';
 
const LegalPoliciesScreen = () => {
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState<string>('');
    const { width } = useWindowDimensions();

 const navigation = useNavigation()
 
  const handleBackPress = () => {
    navigation.goBack();
  };
    return (
        <SafeAreaView style={styles.container}>
             
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 11, paddingBottom: 15, marginBottom: 32 }}>
                  <TouchableOpacity onPress={handleBackPress} style={{ width: 36, height: 36, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      source={require('../assets/images/icons//back.png')}
                       resizeMode="stretch"
                    />
                  </TouchableOpacity>
                  <Text style={{ flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#334155' }}>
                  {strings.terms}
                  </Text>
                  <View style={{ width: 36, height: 36 }} />
                </View>
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
                    <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur. Proin urna lorem odio consectetur pharetra nisi sit et. Ut venenatis in id tortor arcu viverra tempor orci felis. Metus urna venenatis accumsan mi id. Molestie ipsum egestas varius mollis tellus neque nec ultrices vel. Integer cursus fermentum nisl pharetra massa id nibh aliquam. Nulla pellentesque diam tellus erat ac consequat a amet scelerisque. Ornare magna consequat ut egestas ridiculus consequat. Dictumst habitasse nunc arcu elit. Massa adipiscing penatibus ut mauris. Nibh porttitor ornare interdum scelerisque eros duis gravida amet sodales. Pellentesque at vehicula mus suspendisse aliquam.
Amet dui diam integer purus vitae. Lobortis mauris enim at vestibulum ultrices tortor. Nulla a sed neque quam sed in diam proin. Congue sit arcu volutpat nisi maecenas cursus fusce quam donec. Velit orci pharetra nisl pharetra ligula imperdiet. Donec sit dignissim bibendum tortor semper. Sem odio neque viverra in purus fames. Lacus in nec porttitor mi. Proin metus risus adipiscing in nibh fames. Imperdiet nulla ornare hac turpis vestibulum mauris id. Maecenas sed fames sed nulla rutrum odio. Tristique augue placerat mattis tincidunt et. Amet in sit magna convallis odio in vestibulum dignissim semper. Risus netus lacus vitae posuere a sed magna egestas.
Urna pellentesque neque convallis rhoncus quisque viverra placerat duis eros. In viverra eget in velit lacus viverra. Platea mattis at cum blandit curabitur pretium lacus. Mattis egestas mi eget aliquet. Vestibulum tortor augue nibh posuere. Mattis at lacus neque massa neque purus gravida bibendum. Duis ac eu.
Lorem ipsum dolor sit amet consectetur. Proin urna lorem odio consectetur pharetra nisi sit et. Ut venenatis in id tortor arcu viverra tempor orci felis. Metus urna venenatis accumsan mi id. Molestie ipsum egestas varius mollis tellus neque nec ultrices vel. Integer cursus fermentum nisl pharetra massa id nibh aliquam. Nulla pellentesque diam tellus erat ac consequat a amet scelerisque. Ornare magna consequat ut egestas ridiculus consequat. Dictumst habitasse nunc arcu elit. Massa adipiscing penatibus ut mauris. Nibh porttitor ornare interdum scelerisque eros duis gravida amet sodales. Pellentesque at vehicula mus suspendisse aliquam.
Amet dui diam integer purus vitae. Lobortis mauris enim at vestibulum ultrices tortor. Nulla a sed neque quam sed in diam proin. Congue sit arcu volutpat nisi maecenas cursus fusce quam donec. Velit orci pharetra nisl pharetra ligula imperdiet. Donec sit dignissim bibendum tortor semper. Sem odio neque viverra in purus fames. Lacus in nec porttitor mi. Proin metus risus adipiscing in nibh fames. Imperdiet nulla ornare hac turpis vestibulum mauris id. Maecenas sed fames sed nulla rutrum odio. Tristique augue placerat mattis tincidunt et. Amet in sit magna convallis odio in vestibulum dignissim semper. Risus netus lacus vitae posuere a sed magna egestas.
Urna pellentesque neque convallis rhoncus quisque viverra placerat duis eros. In viverra eget in velit lacus viverra. Platea mattis at cum blandit curabitur pretium lacus. Mattis egestas mi eget aliquet. Vestibulum tortor augue nibh posuere. Mattis at lacus neque massa neque purus gravida bibendum. Duis ac eu.
</Text>
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
        marginHorizontal:20
     },
    illustrationWrapper: {
        alignItems: 'center',
        marginBottom: 16,
    },
    illustration: {
        width: '80%',
        height: 44,
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
