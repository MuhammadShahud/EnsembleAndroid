const initialState = {
  baseUrl: 'https://onboard-backendd.herokuapp.com/api/',
  login: {
    name: 'Muhammad Shahud',
    email: 'shahud@plumtreegroup.net',
    password: '$2b$10$4d9GIb8FdoCM.tLIdjW4cOJh6Sw.FxQcwzS34mJn1E1w8Gl5cjt.u',
    companyId: '636bee4fb501b64b83cc5004',
    teamId: '636c0dfc25e953503e7c89f2',
    profileData: {
      number: '123494302',
      location: 'location',
      publicBio: 'publicBio',
      dOB: '2019-04-28T09:45:15.000Z',
      _id: '636d3d1bc248764314d60e2f',
    },
    questions: {
      name: 'Shahud',
      pronouns: 'pronouns',
      jobTitle: 'Mern Stack Developer',
      threeDesc: 'threeDesc',
      descKid: 'descKid',
      achievment: 'achievment',
      rockstarSkills: ['rockstarSkills', 'rockstarSkills', 'rockstarSkills'],
      Hobbies: ['Hobbies', 'Hobbies', 'Hobbies'],
      _id: '636d3d1bc248764314d60e2e',
    },
    profilePic: 'uploads/shahud.jpeg',
    id: '636d2c64c248764314d60e2a',
  },
  goals: {},
  team: {},
  company: {},
};

export const BASE_URL = state => state.AuthReducer.baseUrl;
export const USER = state => state.AuthReducer.login;
export const GOALS = state => state.AuthReducer.goals;
export const COMPANY = state => state.AuthReducer.company;
export const TEAM = state => state.AuthReducer.team;

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        baseUrl: action.load,
      };

    case 'Login':
      return {
        ...state,
        login: action.load,
      };

    case 'Goals':
      return {
        ...state,
        goals: action.load,
      };

    case 'Team':
      return {
        ...state,
        team: action.load,
      };

    case 'Company':
      return {
        ...state,
        company: action.load,
      };
  }

  return state;
}
