import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm"; 
import { Helmet } from "react-helmet-async";

//TODO: add publishable key
const stipePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <Helmet>
        <title>Boss Chef | Payment</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <SectionTitle
                heading={"Payment"}
                subHeading={"Pay fast to grab your food "}
            ></SectionTitle>
            <div  className="w-10/12 md:3/5 lg:w-2/5 mx-auto my-6">
                <Elements
                    stripe={stipePromise} >
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;