import { createContext } from "react";

const UserContext = createContext({
    user:{
    name: "Preet ",
    email: "user@example.com",
}})
export default UserContext;