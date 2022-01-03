import Layout from "../src/components/Layout";

export default function Shipping() {
  return (
    <Layout>
      <div className="policy policy-container container mx-auto my-32 px-4 xl:px-0">
        <h1 className="text-2xl mb-5 uppercase">Shipping Policy</h1>
        <div className="page-content">
          <ol>
            <li>
              By placing the order on our store, you accept our shipping/return
              policy.&nbsp;
            </li>
            <li>
              We suggest you to read our Return Policies carefully before filing
              any claim. Make sure that the product is eligible for any claim to
              avoid any dissatisfaction.
            </li>
            <li>
              Returns are only accepted after approval by our customer support.
              To begin a return or any other query, please contact the support
              team at&nbsp;<a href="mailto:info@pilore.com">info@pilore.com</a>
              &nbsp;within 14 calendar days from the date package is delivered.
            </li>
            <li>
              Un-Used, unopened items can be returned within 14 calendar days of
              delivery, conditions applies.
            </li>
            <li>
              If the item is defective/damaged or not working, please file a
              claim and provide a proper verification as requested by the
              customer support representative. Unverified products will not be
              entertained with return, exchange or refund. Without verification,
              we can’t resolve your issue. Claims filed after 14 calendar days
              time window will not be accepted.
            </li>
            <li>
              You must always consider using a trackable shipping service or
              purchasing shipping insurance. We do not provide a return label or
              pay for returns shipping.&nbsp;
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
