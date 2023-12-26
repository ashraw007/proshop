import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ashish',
    email: 'ashish@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rawat',
    email: 'rawat@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
