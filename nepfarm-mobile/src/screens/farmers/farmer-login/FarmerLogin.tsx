import React, {useState} from 'react';
import {
  Alert,
  // Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {SubmitHandler, useForm} from 'react-hook-form';

import {Label, PrimaryButton} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {MainAppRoutes} from 'routes/MainNavigator';
import {FormType, InputType} from 'components/atoms/Label';
import {heightToDp, widthToDp} from 'utils';
import {Colors, AppFonts, axiosInstance} from '@nepfarm/constants';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getError} from 'utils';
// import axios from 'axios';
import {
  handleAuth,
  // updateIsFirstLoad,
  // isLoadSuccess,
  // isLoadFailure,
  // isLoadInit,
  isLoginFailure,
  isLoginInit,
  isLoginSuccess,
} from 'custom-redux/slices';
import {AxiosError} from 'axios';

interface LoginFormData {
  phoneNumber: string;
  password: string;
}

// const baseURL = 'https://fakestoreapi.com';
// const baseURL = 'localhost.com/3000';

// const axiosInstance = axios.create({
//   baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export const getProduct = async () => {
//   const res = await axiosInstance.get('/products');

//   console.log('response', res.data, typeof res.data);
//   return res.data;
// };

// export const handleLogin = async (formData: FormData) => {
//   const axiosInstance = axios.create({
//     method: 'post',
//     url: baseURL,
//     data: formData,
//     headers: {'Content-Type': 'multipart/form-data'},
//   });

//   const res = await axiosInstance.get('/login');
//   return res.data;
// };

// const res = await axiosInstance.get('/login');
// return res.data;

const FarmerLogin = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {control, handleSubmit} = useForm();
  const isLoading = useSelector(
    (state: any) => state?.user?.isLoadingPage || false,
  );
  const userType = useSelector(
    (state: any) => state?.user?.registrationDetails.type || false,
  );

  // const userState = useSelector((state: any) => state.user);
  // const productList = userState?.productList || [];
  // const isLoading = userState?.isLoadingProducts || false;

  // const [products, setProducts] = useState([]);

  // useEffect(() => {

  // });

  // useEffect(() => {
  //   const getProduct = async () => {
  //     return async dispatch => {
  //       try {
  //         dispatch(updateIsFirstLoad());
  //         const res = await axiosInstance.get('/products');
  //         console.log('response', res.data, typeof res.data);
  //         dispatch(isLoadSuccess(res.data));
  //       } catch (error) {
  //         dispatch(isLoadFailure(error));
  //       }
  //     };
  //   };
  //   const data = async () => {
  //     try {
  //       dispatch(isLoadInit());
  //       const result = await getProduct();
  //       // setProducts(result);
  //       dispatch(isLoadSuccess(result));
  //     } catch (error) {
  //       dispatch(isLoadFailure(error));
  //     }
  //   };
  //   data();
  //   return data;
  // }, [dispatch]);

  // const renderProduct = ({item}) => {
  //   return (
  //     <View style={{flexDirection: 'row'}}>
  //       {/* <Image src={item.image} /> */}
  //       <Image
  //         source={{uri: item?.image}}
  //         style={{height: 50, width: 50}}
  //         resizeMode="cover"
  //       />
  //       <Text>{item?.title || ''}</Text>
  //     </View>
  //   );
  // };
  const handleLogin = async (formData: FormData) => {
    const endpoint =
      userType === 'farmer' ? '/farmer_login' : '/consumer_login';
    try {
      dispatch(isLoginInit());
      const res = await axiosInstance.post(endpoint, formData, {
        headers: {'content-type': 'multipart/form-data'},
      });

      dispatch(isLoginSuccess(res.data));
    } catch (error: any) {
      Alert.alert('Error! ', getError(error) || 'Unknown error');

      dispatch(isLoginFailure(getError(error) || 'Unknown error'));
    }
  };

  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.BottomTab});
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.Initial});
  };

  const onSubmit = async (values: LoginFormData) => {
    const formValues = new FormData();
    formValues.append('phone_number', values.phoneNumber);
    formValues.append('password', values.password);
    handleLogin(formValues);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headingStyle}>
          <Text style={styles.headingTextStyle}>Login</Text>
        </View>
        <View style={styles.labelContainer}>
          <Label
            name="phoneNumber"
            text="Enter your phone number below"
            defaultText="000-0000000"
            formType={FormType.Telephone}
            inputType={InputType.Telephone}
            control={control}
          />
          <Label
            name="password"
            text="Password"
            defaultText="●●●●●●●●●●"
            formType={FormType.Password}
            inputType={InputType.Text}
            control={control}
          />
        </View>

        <View style={styles.buttons}>
          <PrimaryButton
            handleOnPress={onPressBack}
            text="Back"
            isGhost={true}
            color={Colors.brand500}
          />
          <PrimaryButton
            handleOnPress={handleSubmit(onSubmit)}
            text="Login"
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    ...AppFonts.H3Bold,
  },
  headingStyle: {
    justifyContent: 'center',
    marginBottom: heightToDp(38),
  },
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.neutrals100,
    alignItems: 'center',
  },
  flexContainer: {
    gap: heightToDp(24),
  },
  contentContainer: {
    flex: 1,
    marginTop: heightToDp(84),
  },
  textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
  bottomContainer: {
    gap: heightToDp(10),
  },
  labelContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: heightToDp(35),
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthToDp(11),
    marginHorizontal: widthToDp(32),
  },
});

export default FarmerLogin;
