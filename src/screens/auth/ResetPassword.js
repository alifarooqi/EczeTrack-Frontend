import React, { memo, useState } from 'react';
import { WhiteBackground } from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import { passwordValidator } from '../../core/utils';
import {resetPassword} from '../../ApiManager';

import { useTranslation } from 'react-i18next';

const ResetPassword = ({route,  navigation }) => {
  const { t, i18n } = useTranslation();

  // const [token, setToken] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [password2, setPassword2] = useState({ value: '', error: '' });

  const token = navigation.getParam('token', '');

  const _onLoginPressed = async () => {
    const passwordError = passwordValidator(password.value);
    const password2Error = passwordValidator(password2.value);

    if (passwordError || password2Error) {
      setPassword({ ...password, error: t(passwordError) });
      setPassword2({ ...password2, error: t(password2Error) });
      return;
    }

    if (password.value !== password2.value) {
      setPassword2({ ...password2, error: t("The passwords dont match") });
      return;
    }

    const response = await resetPassword(token, password.value);
    if (response && response.code){
      setPassword({ error: t(response.message) });
    }
    else {
      navigation.navigate('TabNavigator');
    }
  };

  return (
    <WhiteBackground>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>{t('Reset password')}</Header>

{/*
      <TextInput
        label="Token"
        returnKeyType="next"
        value={token.value}
        onChangeText={text => setToken({ value: text, error: '' })}
        error={!!token.error}
        errorText={token.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
*/}

      <TextInput
        label={t("Password")}
        returnKeyType="next"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label={t("Confirm Password")}
        returnKeyType="done"
        value={password2.value}
        onChangeText={text => setPassword2({ value: text, error: '' })}
        error={!!password2.error}
        errorText={password2.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        {t('Reset Password')}
      </Button>

    </WhiteBackground>
  );
};

export default memo(ResetPassword);
