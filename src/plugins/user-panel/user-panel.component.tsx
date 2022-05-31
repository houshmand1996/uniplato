import { UserPanelContainer, UserAdder  , UserList} from 'plugins';
export const UserPanel = () => (
    <>
        <UserPanelContainer>
            <UserList />
            <UserAdder />
        </UserPanelContainer>
    </>
);