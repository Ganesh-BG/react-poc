const teamDetails = [
  {
    id: 000100,
    name: 'Raj Kumar',
    username: 'UIraj01',
  },
  {
    id: 000200,
    name: 'Ravi Kiran',
    username: 'UIravi02',
  },
  {
    id: 000300,
    name: 'Nirvik Dey',
    username: 'UInirvik03',
  },
  {
    id: 000400,
    name: 'Prem Kumar',
    username: 'UIprem04',
  },
  {
    id: 000500,
    name: 'Anil Thota',
    username: 'UIanil05',
  },
  {
    id: 000600,
    name: 'Tim Wheel',
    username: 'UItim06',
  },
  {
    id: 000700,
    name: 'Sam Sanjuson',
    username: 'UIsam07',
  },
  {
    id: 000000,
    name: 'Nicholas Pooran V',
    username: 'UInicholas08',
  },
];

const error = {
  success: false,
};

exports.postTeam = (req, res) => {
  if (!req.body.uid) {
    res.status(400).send(error);
    return;
  }
  res.status(201).send(teamDetails);
};
