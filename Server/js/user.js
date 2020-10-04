const users = [
  {
    success: true,
    customer: {
      id: 'UI000101',
      name: 'Kamlesh Kumar',
      last_login: '02 Oct 2020',
      balance: '$4200',
      details: [
        {
          due: '05 Aug 2020',
          desc: 'Room Rent',
          amount: '$700',
          status: 'Not Paid',
        },
        {
          due: '08 Aug 2020',
          desc: 'Fuel Charges',
          amount: '$50',
          status: 'Paid',
        },
        {
          due: '09 Aug 2020',
          desc: 'Groceries',
          amount: '$100',
          status: 'Paid',
        },
        {
          due: '12 Aug 2020',
          desc: 'Semester Exam Fee',
          amount: '$700',
          status: 'Not Paid',
        },
      ],
    },
  },
];

const error = {
  success: false,
};

exports.postUser = (req, res, next) => {
  const customerID = req.body.customerid;
  if (!customerID) {
    res.status(400).send(error);
    return;
  } else if (customerID === users[0].customer.id) {
    res.status(201).send(users);
    return;
  }
  res.status(400).send(error);
};
