import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = data => {
  return {
    type: 'Login',
    load: data,
  };
};

export const Goals = data => {
  return {
    type: 'Goals',
    load: data,
  };
};

export const Company = data => {
  return {
    type: 'Company',
    load: data,
  };
};

export const Team = data => {
  return {
    type: 'Team',
    load: data,
  };
};

export const Surveys = data => {
  return {
    type: 'Surveys',
    load: data,
  };
};

export const Noti = data => {
  return {
    type: 'Noti',
    load: data,
  };
};

export const FlashMessage = data => {
  showMessage(data);
};

export const LoginFunction = (newObj, navigation, destination) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M');

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/signin`, newObj)
        .then(async res => {
          console.log('responssseee', res);

          await AsyncStorage.setItem('user', JSON.stringify(res.data.message));
          dispatch(Login(res.data.message));
          navigation.reset({
            index: 0,
            routes: [{name: destination}],
          });
        });
    } catch (err) {
      console.log(`Err in login function: `, err.response);
      FlashMessage({
        message: err.error,
        type: 'danger',
      });
    }
  };
};

export const ForgetPass = (newObj, navigation, destination) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M');

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/forgetPass`, newObj)
        .then(async res => {
          console.log(res.data);
          dispatch(Login(res.data));
          navigation.navigate(destination, {
            forgetCode: res.data.forgetCode,
          });
        });
    } catch (err) {
      console.log(`Err in login function: `, err);
      FlashMessage({
        message: err.error,
        type: 'danger',
      });
    }
  };
};

export const ResetPass = (newObj, setModalOpen) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/changePass`, newObj)
        .then(async res => {
          console.log(res.data);

          setModalOpen(true);
        });
    } catch (err) {
      console.log(`Err in resetPass function: `, err.response.data);
      FlashMessage({
        message: err.errors,
        type: 'danger',
      });
    }
  };
};

export const PostGoal = (newObj, navigation, destination, token) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}goals`, newObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log(res.data);
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in postGoal function: `, err.response.data);
      FlashMessage({
        message: err.errors,
        type: 'danger',
      });
    }
  };
};

export const GetGoals = token => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', token);

      const response = await axios
        .get(`${state().AuthReducer.baseUrl}goals`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log(res.data);
          dispatch(Goals(res.data.result));
        });
    } catch (err) {
      console.log(`Err in getGoal function: `, err.response.data);
    }
  };
};

export const PatchGoal = (
  newObj,
  navigation,
  destination,
  token,
  id,
  setVisible,
) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}goals/${id}`, newObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log(res.data);
          dispatch(GetGoals(token));
          setVisible ? setVisible(true) : navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in postGoal function: `, err.response.data);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const GetCompany = id => {
  return async (dispatch, state) => {
    console.log('L', id);
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}company/${id}`)
        .then(async res => {
          console.log('responseCompany', res.data);
          dispatch(Company(res.data));
        });
    } catch (err) {
      console.log(`Err in getCompany function: `, err.message);
      // FlashMessage({
      //   message: err,
      //   type: 'danger',
      // });
    }
  };
};

export const GetTeam = id => {
  return async (dispatch, state) => {
    console.log('L', id);
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}team/${id}`)
        .then(async res => {
          console.log('responseTeam', res.data);
          dispatch(Team(res.data));
        });
    } catch (err) {
      console.log(`Err in getTeam function: `, err);
      // FlashMessage({
      //   message: err,
      //   type: 'danger',
      // });
    }
  };
};

export const PatchUser = (newObj, navigation, destination, id) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}user/${id}`, newObj)
        .then(async res => {
          console.log(res.data);
          dispatch(Login(res.data));
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in patchUser function: `, err);
      FlashMessage({
        message: err.response.data.message,
        type: 'danger',
      });
    }
  };
};

export const PatchProfilePic = (newObj, navigation, destination, id) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj,id);

      const response = await axios
        .patch(
          `http://192.168.1.10:3005/api/user/profilePic/${id}`,
          newObj,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
    
        .then(async res => {
          console.log(res.data);
          dispatch(Login(res.data));
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in PatchProfilePic function: `, err);
      // FlashMessage({
      //   message: err.response,
      //   type: 'danger',
      // });
    }
  };
};

export const GetSurveys = () => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}survey`)
        .then(async res => {
          console.log('responseSurveys', res.data.result);
          dispatch(Surveys(res.data.result));
        });
    } catch (err) {
      console.log(`Err in getSurvey function: `, err);
      // FlashMessage({
      //   message: err,
      //   type: 'danger',
      // });
    }
  };
};

export const PatchSurveys = (newObj, navigation, destination, id) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}survey/${id}`, newObj)
        .then(async res => {
          console.log(res.data);
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in patchUser function: `, err.response);
    }
  };
};

export const GetNoti = () => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}noti`)
        .then(async res => {
          console.log('responseNoti', res.data.result);
          dispatch(Noti(res.data.result));
        });
    } catch (err) {
      console.log(`Err in getNoti function: `, err);
      // FlashMessage({
      //   message: err,
      //   type: 'danger',
      // });
    }
  };
};
