import { users } from "../data"

export const authentication = (email, password) => {
  return users.find(user => ((user.email === email) && (user.password === password)));
}