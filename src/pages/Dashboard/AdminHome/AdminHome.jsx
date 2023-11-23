import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBox, FaDollarSign, FaList, FaUsers } from "react-icons/fa";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import { Helmet } from "react-helmet-async";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('order-stats');
            return res.data
        }
    })

    //custom shape for the bar charts 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //custom shape for the pie charts

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })


    return (
        <div className="text-center ">

            <Helmet>
                <title>Boss Chef |Admin Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10'">

                Hi, Welcome
                <span className="font-bold ml-2 text-[#D1A054]">
                    {
                        user?.displayName ? user.displayName : 'Back'
                    } </span>
            </h2>

            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">

                <div className="flex  gap-4 items-center p-2 justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <div className="text-white">
                        <div className="text-2xl font-semibold">Revenue</div>
                        <div className="font-bold text-3xl text-secondary">${stats.revenue}</div>
                    </div>
                    <FaDollarSign className='text-3xl md:text-4xl lg:text-5xl text-secondary'></FaDollarSign>
                </div>
                <div className="flex items-center  gap-4 p-2 justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <div className="text-white">
                        <div className="text-2xl font-semibold">Users</div>
                        <div className="font-bold text-3xl text-cyan-300">{stats.users}</div>
                    </div>
                    <FaUsers className='text-3xl md:text-4xl lg:text-5xl text-cyan-300'></FaUsers>
                </div>
                <div className="flex  gap-4 items-center p-2 rounded-lg justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="text-white">
                        <div className="text-2xl font-semibold">Menu Items</div>
                        <div className="font-bold text-3xl text-white">{stats.menuItems}</div>
                    </div>
                    <FaList className='text-3xl md:text-4xl lg:text-5xl text-white'></FaList>
                </div>
                <div className="flex gap-4 items-center p-2 justify-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">

                    <div className="text-white">
                        <div className="text-2xl font-semibold">Orders</div>
                        <div className="font-bold text-3xl text-green-500">{stats.orders}</div>
                    </div>
                    <FaBox className='text-3xl md:text-4xl lg:text-5xl text-green-500'></FaBox>
                </div>



            </div>

            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className="">
                    <BarChart
                        width={400}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;