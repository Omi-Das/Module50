
import { getUserById } from '@/app/lib/data';

const UserDetailPage = async ({ params }) => {
    const { userid } = await params; 
    
    const user = await getUserById(userid);

    if (!user) return <div>User not found!</div>;

    return (
        <div className="p-12">
            <h2>User Details: {user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetailPage;
