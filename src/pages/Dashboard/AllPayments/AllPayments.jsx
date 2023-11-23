import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title>Boss Chef | All Payment</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <SectionTitle
                subHeading={"Check Out all Payments"}
                heading={"All Payment History"}
            ></SectionTitle>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">Total Payments :{payments.length}</h2>

            <div className="overflow-x-auto font-bold">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Amount</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>$ {payment.price}</td>
                                <td>{payment.email}</td>
                                <td> {payment.transactionId}</td>
                                <td>{payment.date}</td>
                                <td>{payment.status}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;