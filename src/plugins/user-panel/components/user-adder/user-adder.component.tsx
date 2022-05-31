import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UserAdderContainer } from './user-adder.styles';
import { addUser , newUserCreator } from 'plugins';
import { useDispatch, useSelector } from 'react-redux';

export const UserAdder = () => {
    const newUser = useSelector(newUserCreator);
    const dispatch = useDispatch();
    const handleAddUser = () => dispatch(addUser(newUser));

    return (
        <>
            <UserAdderContainer>
                <Button  shape="circle" onClick={handleAddUser} type="primary" icon={<PlusOutlined />} size='large' /> 
            </UserAdderContainer>
        </>
    );
};