/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import TextSection from './components/TextSection';

function HomeScreen({navigation}): JSX.Element {
  const handleNavigateToPosts = () => {
    navigation.navigate('Posts');
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TextSection
          title="Kilka słów o nas"
          subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
              quibusdam sed amet tempora."
          ctaButtonText="Zobacz więcej"
          ctaButtonOnclick={handleNavigateToPosts}
        />

        <ImageBackground
          source={require('../../assets/images/bg1.png')}
          style={styles.servicesSection}>
          <Text style={styles.servicesSectionText}>
            Budowa domów z drewna budowa bram wjazdowych wykończenie wnętrz
            altany ogrodowe kamienne elementy architektury remonty
          </Text>
        </ImageBackground>

        <TextSection
          title="Kilka słów o nas"
          subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
              quibusdam sed amet tempora."
          ctaButtonText="Zobacz więcej"
          ctaButtonOnclick={() => {}}
        />

        <ImageBackground
          source={require('../../assets/images/bg1.png')}
          style={styles.aboutUsSection}>
          {/* Usually it'd be a svg but I dont have one */}
          {/* Didn't add this grid cuz for mobile it would just take out precoius vertical space */}
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.aboutUsSectionText}>
            Budowa domów z drewna budowa bram wjazdowych wykończenie wnętrz
            altany ogrodowe kamienne elementy architektury remonty
          </Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesSection: {
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  servicesSectionText: {
    fontSize: 24,
    lineHeight: 38,
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
  },
  aboutUsSection: {
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  aboutUsSectionText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '500',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 24,
  },
});

export default HomeScreen;
