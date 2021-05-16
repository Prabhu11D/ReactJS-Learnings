import React from "react";
import Button from "./Right/Button";
import Card from "./Right/Card";
import Cardless from "./Right/Cardless";
import CreditCardForm from "./Right/CreditCardForm";
import PriceCard from "./Right/PriceCard";

function Billing() {
  return (
    <div>
      <Cardless>
        <div className="logout">
          <a href="#">Logout</a>
        </div>
      </Cardless>

      <Card
        title="Payment Information"
        desc="Enter your credit card information"
      >
        <CreditCardForm />
        <div
          className="creditCardBtn"

        >
          <Button name="SAVE" />
        </div>
      </Card>

      <Card title="Plan" desc="You are on the Free plan">
        <div className="price-table">
          <PriceCard
            plan="Free 😊"
            price="$0/month"
            features={["View and export up to 100 sign-ups"]}
          />
          <PriceCard
            plan="Growth 📈"
            price="$20/month"
            features={[
              "View and export up to 500 sign-ups",
              "Customize look and feel of waitlist page",
              'No "Powered by Referlist" watermark',
            ]}
          />
          <PriceCard
            plan="Pro 🔥"
            price="$50/month"
            features={[
              "3,000 sign-ups",
              "Customize look and feel of waitlist page",
              "API access",
              "Seed your waitlist so it's not empty at launch",
              'No "Powered by Referlist" watermark',
              "Contact for discount pricing over 3k",
            ]}
          />
        </div>
      </Card>
    </div>
  );
}

export default Billing;
