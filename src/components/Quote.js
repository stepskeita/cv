import React from "react";
import Card from "./layout/Card";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
  return (
    <Card>
      <div className="flex items-stretch">
        <div className="p-2">
          <FaQuoteLeft className="text-3xl" />
        </div>
        <div>
          "Life is like the whether. It can switch on you at any moment. Make
          the best "
        </div>
      </div>
    </Card>
  );
};

export default Quote;
