const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return {
        ...state,
        user: {
          name: action.payload.name,
          lastlogin: action.payload.last_login,
          balance: action.payload.balance,
          tabledata: action.payload.details,
        },
      };

    default:
      return state;
  }
}
