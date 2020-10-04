export const fetchUserData = () => (dispatch) => {
  const data = {
    customerid: 'UI000101',
  };
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      } else {
        throw new Error('Data not found');
      }
    })
    .then((users) =>
      dispatch({
        type: 'FETCH_USER_DATA',
        payload: users[0].customer,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
