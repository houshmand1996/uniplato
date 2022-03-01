import { DeleteContainer, UserCardContainer, UsernameContainer , removeUser } from 'plugins';
import { DeleteOutlined } from '@ant-design/icons';
import { sassVar } from 'core';
import { useDispatch } from 'react-redux';

interface IUserCardProps {
    userId: number;
}

export const UserCard = ({ userId }: IUserCardProps) => {

    const dispatch = useDispatch();

    const handleRemoveUser = () => dispatch(removeUser(userId));
    return (
        <>
            <UserCardContainer>
                <DeleteContainer type="text" shape="round" icon={<DeleteOutlined style={{ color: 'white' }} />} size='large' onClick={handleRemoveUser} />
                <UsernameContainer color={sassVar?.darkColor} >
                    User {userId}
                </UsernameContainer>
            </UserCardContainer>
        </>
    );
};

