import Link from "next/link";
import Layout from "../src/components/Layout";

export default function Policies() {
  return (
    <Layout>
      <div className="policy policy-container container mx-auto my-32 px-4 xl:px-0">
        <h1 className="text-2xl mb-5 uppercase"> MedQuota Rules</h1>
        <span className="mb-20">
          Get to know MedQuota legal terms and policies
        </span>
        <div className="policy-img">
          <img src="https://www.safeguardingworcestershire.org.uk/wp-content/uploads/2020/02/Policies-and-Procedures.jpg" />
        </div>
        <div className="page-content cl-orange mt-6">
          <Link href="/shipping">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Shipping Policy
            </a>
          </Link>
          <Link href="/privacy">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Privacy Policy
            </a>
          </Link>
          <Link href="/privacy">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Return & Refund Policy
            </a>
          </Link>
          <Link href="/terms">
            <a className="block mt-4 lg:inline-block lg:mt-0  mr-10">
              Terms & Conditions
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
