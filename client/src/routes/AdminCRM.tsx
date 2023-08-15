import { useGetAllUsersQuery } from '../features/auth/authApiSlice';
import { AdminTableRow } from '../components/crm';

const AdminCRM = () => {
    const { data: users } = useGetAllUsersQuery()
    
    return (
        <>
            {users?.map((user) => (
                <AdminTableRow user={user} key={user.id} />
            ))
            }
        </>
    );
}

export default AdminCRM