import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm"; 

//TODO: add publishable key
const stipePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle
                heading={"Payment"}
                subHeading={"Pay fast to grab your food "}
            ></SectionTitle>
            <div>
                <Elements
                    stripe={stipePromise} >
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;