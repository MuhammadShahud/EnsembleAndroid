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
          console.log('responssseee', res.data.message.firstTime);

          await AsyncStorage.setItem('user', JSON.stringify(res.data.message));

          dispatch(Login(res.data.message));

          dispatch(GetCompany(res.data.message.companyId));
          if (!res.data.message.firstTime) {
            if (!res.data.message.firstTimeQuestion) {
              navigation.reset({
                index: 0,
                routes: [{name: 'drawer'}],
              });
            } else {
              navigation.reset({
                index: 0,
                routes: [{name: destination}],
              });
            }
          } else {
            navigation.navigate('resetpassword', {
              email: res.data.message.email,
              firstTime: true,
            });
          }
        });
    } catch (err) {
      console.log(
        `Err in login function: `,
        err.response.data.errors[0].message,
      );
      FlashMessage({
        message: err.response.data.errors[0].message,
        type: 'danger',
      });
    }
  };
};

export const GetUser = (navigation, destination, id) => {
  return async (dispatch, state) => {
    console.log('L', id);
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}user/${id}`)
        .then(async res => {
          console.log('responseUser', res.data);
          dispatch(Login(res.data));
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in getUSer function: `, err.message);
      // FlashMessage({
      //   message: err,
      //   type: 'danger',
      // });
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
            email: res.data.email,
          });
        });
    } catch (err) {
      console.log(`Err in forgetPass function: `, err);
      FlashMessage({
        message: 'Invalid email',
        type: 'danger',
      });
    }
  };
};

export const ResetPass = (newObj, setModalOpen, firstTime) => {
  return async (dispatch, state) => {
    console.log('L', newObj);
    try {
      console.log('M', firstTime);

      const response = await axios
        .post(`${state().AuthReducer.baseUrl}auth/changePass`, newObj)
        .then(async res => {
          console.log(res.data.user.id);
          firstTime
            ? dispatch(
                PatchUser(
                  {firstTime: false},
                  null,
                  null,
                  res.data.user.id,
                  true,
                ),
              )
            : null;
          setModalOpen(true);
        });
    } catch (err) {
      console.log(`Err in resetPass function: `, err.response.data);
      FlashMessage({
        message: err.response.data.errors[0].message,
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

export const GetGoals = (token, id) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', token);

      const response = await axios
        .get(`${state().AuthReducer.baseUrl}goals/?employeeId=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log('GetGoals', res.data);
          dispatch(Goals(res.data.results));
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
          console.log('ressssssss', res.data.result.employeeId);
          dispatch(GetGoals(token, res.data.result.employeeId));
          setVisible ? setVisible(true) : navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in PatchGoal function: `, err.response.data);
      // FlashMessage({
      //   message: err.response.data.message,
      //   type: 'danger',
      // });
    }
  };
};

export const PatchGoalSteps = (newObj, id, userId) => {
  return async (dispatch, state) => {
    console.log('L');
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWh1ZEBwbHVtdHJlZWdyb3VwLm5ldCIsImlhdCI6MTY2NDU2NzExNSwiZXhwIjoxNjk2MTAzMTE1fQ.bG940Pi5-Tf6CX4AMxLSZ2vLHZJr3XfgkBsIRvtkNeA';
    try {
      console.log('M', id);

      const response = await axios
        .patch(`http://192.168.0.209:3006/api/goals/steps/${id}`, newObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log('res.data', res.data);
          dispatch(GetGoals(token, userId));
        });
    } catch (err) {
      console.log(`Err in patchGoalStep function: `, err.response.data);
      // FlashMessage({
      //   message: err.response.data.message,
      //   type: 'danger',
      // });
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

export const PatchUser = (newObj, navigation, destination, id, firstTime) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj, destination, id, firstTime);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}user/${id}`, newObj)
        .then(async res => {
          console.log(res.data);
          if (!firstTime) {
            dispatch(Login(res.data));
            destination === 'Profile'
              ? navigation.navigate(destination, {userData: res.data})
              : navigation.navigate(destination);
          }
        });
    } catch (err) {
      console.log(`Err in patchUser function: `, err);
      // FlashMessage({
      //   message: err.response.data.message,
      //   type: 'danger',
      // });
    }
  };
};

export const PatchUserFirstTime = (
  newObj,
  id,
) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M' )

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}user/${id}`, newObj)
        .then(async res => {
          dispatch(Login(res.data));
        });
    } catch (err) {
      console.log(`Err in patchUser function: `, err);
      // FlashMessage({
      //   message: err.response.data.message,
      //   type: 'danger',
      // });
    }
  };
};

export const ChangeUserPass = (newObj, id, setModalVisible) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj, id);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}user/changePass/${id}`, newObj)
        .then(async res => {
          console.log(res.data);
          setModalVisible(true);
        });
    } catch (err) {
      console.log(`Err in ChangeUserPass function: `, err);
      // FlashMessage({
      //   message: err.response.data.message,
      //   type: 'danger',
      // });
    }
  };
};

export const PatchProfilePic = (newObj, navigation, destination, id) => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      console.log('M', newObj, id);

      const response = await axios
        .patch(`${state().AuthReducer.baseUrl}user/profilePic/${id}`, newObj, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(async res => {
          console.log(res.data);
          dispatch(Login(res.data));
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in PatchProfilePic function: `, err.response.data);
      // FlashMessage({
      //   message: err.response,
      //   type: 'danger',
      // });
    }
  };
};

export const GetSurveys = obj => {
  return async (dispatch, state) => {
    console.log('L', obj);
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}survey?companyId=${obj}`)
        .then(async res => {
          console.log('responseSurveys', res.data);
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
        .then(res => {
          console.log('idddd', res.data);
          dispatch(Login(res.data.result));
          navigation.navigate(destination);
        });
    } catch (err) {
      console.log(`Err in PatchSurveys function: `, err);
    }
  };
};

export const GetNoti = id => {
  return async (dispatch, state) => {
    console.log('L');
    try {
      const response = await axios
        .get(`${state().AuthReducer.baseUrl}noti?companyId=${id}`)
        .then(async res => {
          console.log('responseNoti', res.data.result);
          dispatch(Noti(res.data.result.results));
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
