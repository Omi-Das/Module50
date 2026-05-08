import AddUserModal from "../components/AddUserModal";
import UserTable from "../components/UserTable";
import { createUser, deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";


const UsersPage = async() => {
    const users = await getUsers()
    return (
        <div>
            <div className= "flex justify-between">
                 <h2>Users: {users.length}</h2>
           <AddUserModal createUserAction = {createUser}></AddUserModal>
            </div>
            <UserTable deleteUserAction = {deleteUser} users={users}/>
        </div>
    );
};

export default UsersPage;