import { useAppSelector } from "../app/hooks";
import { useGetAllUsersByManagerQuery } from "../features/auth/authApiSlice";
import { ManagerTableRow } from '../components/crm';

const ManagerCRM = () => {
  const { id } = useAppSelector(state => state.persistedReducer.auth.user)
  const { data: users } = useGetAllUsersByManagerQuery(id)

  return (
    <>
      {users?.child?.map((user) => (
        <ManagerTableRow user={user} key={user.id} />
      ))
      }
    </>
  );
}

export default ManagerCRM