import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>We collect minimal user data necessary for service improvement.</p>
          <p>
            Your information is securely stored, protecting it from unauthorized
            access.
          </p>
          <p>
            We don't share your data with third parties unless required by law.
          </p>
          <p>
            We retain your data only as long as necessary for the purpose it was
            collected.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
