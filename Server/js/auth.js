const successResponse = {
  success: true,
  isAuthenticated: true,
  customerid: 'UI000101',
};

const errorResponse = {
  success: true,
  isAuthenticated: false,
};

const technicalError = {
  success: false,
};

exports.postLogin = (req, res) => {
  const loginData = req.body.user;

  if (!req.body.client_id && !loginData) {
    res.status(401).send(technicalError);
    return;
  } else if (loginData.id && loginData.password) {
    res.status(201).send(successResponse);
    return;
  } else {
    res.status(400).send(errorResponse);
    return;
  }
};
