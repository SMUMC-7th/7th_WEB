import { getAllUsers } from '../../apis/auth';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../../context/LogInContext';
import { TUser } from '../../type/type';

const Admin = () => {
    const { isLogin, role } = useAuthContext();
    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers,
        enabled: !!isLogin && role !== 'admin',
    });

    return (
        <div className="w-full h-full flex pb-[20px] pl-[30px] pr-[30px] flex-col items-center bg-slate-100">
            <div className="  w-[60%] items-center flex flex-col h-full pt-[100px]">
                <div className="text-[25px] font-[700]">유저 목록</div>
                <br />
                <table className="w-[450px]">
                    <thead>
                        <tr className="bg-slate-300">
                            <th className="w-[80px] border-solid border-slate-100 border-r-[1px] text-[18px]">
                                id
                            </th>
                            <th className="w-[300px] border-solid border-slate-100 border-r-[1px] text-[18px]">
                                email
                            </th>
                            <th className="w-[100px] border-solid border-slate-100 border-r-[1px] text-[18px]">
                                role
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user: TUser) => (
                            <tr
                                className=" bg-white  border-solid border-slate-300"
                                key={user.id}
                            >
                                <td className="w-[80px] border-b-[1px] text-center  border-r-[1px]">
                                    {user.id}
                                </td>
                                <td className="w-[300px]  border-b-[1px]  border-r-[1px] pl-[10px]">
                                    {user.email}
                                </td>
                                <td className="w-[100px]  border-b-[1px] text-center">
                                    {user.role}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
