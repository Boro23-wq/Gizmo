import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Gizmo Admin',
    email: 'admin@gizmo.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sintu Boro',
    email: 'boro@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dave Boro',
    email: 'dave@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
