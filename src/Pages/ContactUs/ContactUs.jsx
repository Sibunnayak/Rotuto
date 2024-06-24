import React from "react";

const ContactUs = () => {
  return (
    <section className="my-8 mx-8 lg:mx-32">
      <div className="bg-white rounded-3xl py-8 px-4 lg:px-16">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold mb-3 max-sm:text-xl">
                Contact Us
              </h2>
              <p className="text-xl">Last Updated: April 24, 2024</p>
            </div>
          </div>
          <div className="mt-4 row">
            <div className="text-center col mb-8">
              <h4 className="text-2xl font-bold mb-3 max-sm:text-lg">
                Get in Touch
              </h4>
              <p className="text-xl max-sm:text-base">
                We're here to help! Contact us for assistance.
              </p>
            </div>
            <div className="flex flex-col md:flex-row text-center">
              <div className="w-full mt-6 md:w-1/2 md:mr-5 mx-auto md:mx-0">
                <div>
                  <strong>Customer Support</strong>
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hello@leadesh.com"
                    className="text-blue-600 font-semibold"
                  >
                    hello@leadesh.com
                  </a>
                  <br />
                  <strong>Phone:</strong> +91 89770 02747
                </div>
              </div>
              <div className="mt-6 w-full md:w-1/2 mx-auto md:mx-0">
                <div>
                  <strong>Office Address:</strong>
                  <br />
                  Neonflake Enterprises OPC Pvt Ltd
                  <br />
                  LTD Villa 21, Polisetty Enclave
                  <br />
                  Karkhana, Secunderabad
                  <br />
                  Hyderabad, India 500 009
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
