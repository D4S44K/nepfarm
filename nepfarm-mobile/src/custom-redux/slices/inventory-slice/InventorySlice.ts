import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstance} from '@nepfarm/constants';
import {Alert} from 'react-native';
import {getError} from 'utils';

const initialState = {
  farmerId: '',
  productsList: [],
  isLoadingProductError: null,
  isloadingProduct: false,
};

// export const handleAuth = () => async (dispatch: any) => {
//   console.log('test');
//   try {
//     dispatch(isLoginInit());
//     const res = await axiosInstance.post(
//       '/consumer_login',
//       {},
//       {
//         headers: {'content-type': 'multipart/form-data'},
//       },
//     );
//     console.log('this is res: ', res, res.data);
//     dispatch(isLoginSuccess(res.data));
//   } catch (error: any) {
//     console.log('Error', getError(error));
//     console.log('type: ', typeof error);
//     Alert.alert('You had an error: ', getError(error) || 'Unknown error');

//     dispatch(isLoginFailure(error));
//   }
// };

export const authSlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    // isLoginInit: state => {
    //   return {
    //     ...state,
    //     isLoadingPage: true,
    //     isLoadingPageError: null,
    //   };
    // },
    // isLoginSuccess: (state, action) => {
    //   return {
    //     ...state,
    //     isLoadingPage: false,
    //     isSignedIn: true,
    //     isLoadingPageError: action.payload,
    //   };
    // },
    // isLoginFailure: (state, action) => {
    //   return {
    //     ...state,
    //     isLoadingPage: false,
    //     isLoadingPageError: action.payload,
    //   };
    // },
    isLoadInit: state => {
      return {
        ...state,
        isLoadingProduct: true,
        isLoadingPageError: null,
      };
    },
    isLoadSuccess: (state, action) => {
      return {
        ...state,
        isloadingProduct: false,
        isLoadingProductError: action.payload,
      };
    },
    isLoadFailure: (state, action) => {
      return {
        ...state,
        isloadingProduct: false,
        isLoadingProductError: action.payload,
      };
    },
    getProducts: (state, action) => {
      return {
        ...state,
        productsList: action.payload,
      };
    },
    // addProduct: (state, action) => {
    //   state.productsList.push({
    //     id: action.payload.id,
    //     quantity: action.payload.quantity,
    //     units: action.payload.units,
    //   });
    // },

    // editProduct
    // updateFarmerProfileDescription: (state, action) => {
    //   state.registrationDetails.description = action.payload.description;
    // },
    // updateFarmerProfileTags: (state, action) => {
    //   state.registrationDetails.productTags = action.payload.productTags;
    // },
    // updateIsFirstLoad: state => {
    //   state.isFirstLoad = false;
    // },
    // updateUserType: (state, action) => {
    //   state.registrationDetails.type = action.payload;
    // },
    // updatePhoneNumber: (state, action) => {
    //   state.userId.phoneNumber = action.payload;
    //   state.registrationDetails.phoneNumber = action.payload;
    // },

    // updateSignUpPage2: (state, action) => {
    //   state.registrationDetails.fullName = action.payload.fullName;
    //   state.userId.fullName = action.payload.fullName;
    //   state.registrationDetails.password = action.payload.password;
    //   state.registrationDetails.emailAddress = action.payload.emailAddress;
    // },

    // updateAddress: (state, action) => {
    //   state.registrationDetails.address = action.payload.address;
    //   state.registrationDetails.reference = action.payload.reference;
    //   if (state.registrationDetails.type === 'consumer') {
    //     state.isSignedIn = true;
    //   }
    // },

    // updateToken: (state, action) => {
    //   state.token = action.payload;
    // },

    // updateUserData: (state, action) => {
    //   state.userId = action.payload.user;
    //   state.registrationDetails.address = action.payload.address;
    //   state.registrationDetails.type = action.payload.type;
    //   state.isSignedIn = action.payload.isSignedIn;
    // },
  },
});

export const {
  updateIsFirstLoad,
  updatePhoneNumber,
  updateAddress,
  updateSignUpPage2,
  updateToken,
  updateUserData,
  isLoadInit,
  isLoadFailure,
  isLoadSuccess,
  isLoginInit,
  isLoginFailure,
  isLoginSuccess,
  updateUserType,
  updateFarmerProfileDescription,
  updateFarmerProfileTags,
} = authSlice.actions;

export default authSlice.reducer;

// export const handleAuth = (formData: FormData, apiEndpoint: string) =>
//   createAsyncThunk('nepfarm' + apiEndpoint, async (dispatch: any) => {
//     console.log('this is formData: ', formData);
//     try {
//       dispatch(isLoginInit());
//       const res = await axiosInstance.post(apiEndpoint, formData, {
//         headers: {'content-type': 'multipart/form-data'},
//       });
//       console.log('this is res: ', res, res.data);
//       dispatch(isLoginSuccess(res.data));
//     } catch (error: any) {
//       console.log('Error', getError(error));
//       console.log('type: ', typeof error);
//       Alert.alert('You had an error: ', getError(error) || 'Unknown error');

//       dispatch(isLoginFailure(error));
//     }
//   });
