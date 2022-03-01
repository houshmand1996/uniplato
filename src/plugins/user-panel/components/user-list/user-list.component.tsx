import { UserCard , selectUsers, User } from 'plugins';
import { UserListContainer } from './user-list.styles';
import { useSelector } from 'react-redux';

export const UserList = () => {
    const users:User[] = useSelector(selectUsers);
    return (<>
        <UserListContainer>
            {
                users.map((user) => <UserCard key={user.id} userId={user.id} />)
            }
        </UserListContainer>
    </>);
};  