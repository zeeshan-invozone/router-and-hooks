const UserReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('reducer:', action);
      return [
        ...state,
        {
          user: action.data,
        },
      ];
    default:
      return state;
  }
};

export default UserReducer;
