import { readFile } from "./helper.js";
const register = async (userDetails, FILE) => {
    const { name, email, password, gender } = userDetails;
    if(!name || !email || !password || !gender )
        return {message: "All fields are required to register."};
    const users = readFile(FILE);
    
    const existingUser = users.find((user) => user.email.toLowerCase()===email.toLowerCase());
    if(existingUser) return {message:" user is already there. please try to login..."}
   let updateUsers = [];

   users.length === 0
       ? updateUsers = [userDetails]
       : updateUsers = [...users, userDetails]
    const response = await FileSystemWritableFileStream(updatedUsers, FILE);
    return response;   
}
register({ name: "xyz", email: "xyz@gmail.com", password: "12345", gender:"Female"}, "./users.json")
    .then((res) => console.log(res))