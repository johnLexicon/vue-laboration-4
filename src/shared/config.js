const host =
  // process.env.NODE_ENV === 'development'
  false
    ? 'http://localhost:3000'
    : 'https://lexicon-express-users.herokuapp.com/api';
export const API = {
  users: `${host}/users`,
  admins: `${host}/admins`,
};
