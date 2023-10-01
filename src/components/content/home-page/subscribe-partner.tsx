import React, { FC } from "react";

// common -> subscribe-form.tsx
import HPSubscribeForm from "../../common/subscribe-form";
import HPSubscribePartnerImg from "../../common/subscribe-partner-img";

// Import partner img
import Partner1 from "../../../assets/img/subscribe-twice.webp";
import Partner2 from "../../../assets/img/subscribe-heymel.webp";
import Partner3 from "../../../assets/img/subscribe-practal.webp";
import Partner4 from "../../../assets/img/subscribe-MTAQ.webp";

const HPSubscribePartner: FC = () => {
  return (
    <div className="subscribe-partner">
      <div className="subscribe-partner__content">
        <HPSubscribeForm />

        {/* Right Side */}
        <div className="coop-partner">
          <h3 className="section-heading coop-partner__heading">AS SEEN ON</h3>
          <div className="coop-partner__list">
            {/* Partner 1 */}
            <HPSubscribePartnerImg
              imageSrc={Partner1}
              linkUrl="https://twiceuponatime.com.au/"
              altText="Partner 1 - Twice"
            />

            {/* Partner 2 */}
            <HPSubscribePartnerImg
              imageSrc={Partner2}
              linkUrl="https://www.heymelcomms.training/podcast"
              altText="Partner 1 - Heymel"
            />

            {/* Partner 3 */}
            <HPSubscribePartnerImg
              imageSrc={Partner3}
              linkUrl="https://fractal.com.au/building-a-product-for-yourself-with-one-eye-on-the-market-with-lachlan-palmer-of-kashy/"
              altText="Partner 3 - Practal"
            />

            {/* Partner 4 */}
            <HPSubscribePartnerImg
              imageSrc={Partner4}
              linkUrl="https://www.mtaq.com.au/"
              altText="Partner 4 - MTA Queensland"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPSubscribePartner;
