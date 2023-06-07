import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const KEY = "pk_test_51NDRrwFB6F7Pi0esz6SpiWYLrIiYtbCfmOXANSGId6OAt3xPIaBCPJfxkQkQH11MI00DNbdwIm8M9E3qKd1pNcdi00WcU6F7nN";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = token => setStripeToken(token);

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: 2000
                    }
                );
                console.log(res.data);
                history.push("/success");
            } catch(err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken, history]);

    return (
        <div
            style={{
                height: "100hv",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout 
                    name="Lama Shop" 
                    image="https://avatars.githubusercontent.com/u/1486366?v=4"
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={20 * 100}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    )
}

export default Pay
