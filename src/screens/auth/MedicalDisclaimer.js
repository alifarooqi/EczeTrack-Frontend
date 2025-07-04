import React, { memo } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { WhiteBackground } from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import { theme } from '../../core/theme';

const MedicalDisclaimer = ({ navigation }) => {

  const _onAgree = async () => {
    navigation.navigate('TermsAndConditions');
  };

  const _onDisagree = async () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <WhiteBackground>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
      <SafeAreaView>
        <Header>Medical Disclaimer</Header>
        <ScrollView>
          <Text style={styles.paragraph}>
            WeDerm is not a licensed medical care provider and represents that it has no expertise in diagnosing medical conditions of any kind.{"\n\n"}

            If you engage in this program, you agree that you do so at your own risk, are voluntarily participating in these activities, assume all risk of injury to yourself, and agree to release and discharge WeDerm from any and all claims or causes of action, known or unknown, arising out of WeDerm.{"\n\n"}

            The information provided is not intended to be a substitute for professional medical advice, diagnosis or treatment.  Never disregard professional medical advice, or delay in seeking it, in case of emergency.{"\n\n"}

            Nothing in this disclaimer will:{"\n"}
            (a)	limit or exclude any liability for death or personal injury resulting from negligence;{"\n"}
            (b)	limit or exclude any liability for fraud or fraudulent misrepresentation;{"\n"}
            (c) limit any liabilities in any way that is not permitted under applicable law; or{"\n"}
            (d)	exclude any liabilities that may not be excluded under applicable law.{"\n"}

          </Text>
        </ScrollView>



        <View style={styles.row}>
          <Button
            mode="text"
            color={theme.colors.secondary}
            style={styles.button}
            onPress={_onDisagree}
          >
              Disagree
          </Button>

          <Button mode="contained" style={styles.button} onPress={_onAgree}>
              Agree
          </Button>
        </View>
      </SafeAreaView>

    </WhiteBackground>
  );
};

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginTop: 4,
      alignSelf: 'flex-end'
    },
    button : {
      width: '50%'
    },
    paragraph: {
      color: theme.colors.secondary,
      textAlign: 'justify',
      lineHeight: 20,
      fontSize: 16
    },
});

export default memo(MedicalDisclaimer);
