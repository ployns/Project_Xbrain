import React from "react";

import PaypalCheckoutButton from "../../components/paypalcheckoutbutton";

export default function Payment() {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 100,
  };
  return (
    <div className="bg-purple-200 w-full h-full">
      <div
        // px-80
        className="flex justify-center items-center px-12 py-12 h-screen font-body"
      >
        <div
          // mx-40
          className=" container justify-center items-center py-3 bg-white-100 rounded-lg shadow-lg border border-gray-50"
        >
          <div className="flex justify-center flex-wrap h-full g-6 text-gray-800">
            <form>
              <div className="font-extrabold items-start text-6xl text-center">
                ชำระเงิน
              </div>

              <div className="font-extrabold items-start text-2xl text-center mt-3">
                ราคา 100 บาท
              </div>
              <img
                className="m-5"
                src={`https://i.pinimg.com/originals/10/3e/e6/103ee6509e82d0a379405b8a3a27f5ce.gif`}
                alt=""
              />

              <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
