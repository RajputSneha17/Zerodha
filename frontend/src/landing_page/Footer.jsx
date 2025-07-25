import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "#f8f6f6" }}>
      <div className="container-fluid mt-5 ">
        <div className="row p-5">
          <div className="col">
            <img
              className="m-2 img-fluid"
              src="assets/logo.svg"
              style={{ width: "150px" }}
              alt=""
            />
            <p className="text-secondary small m-2">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <p className="m-2">
              <i className="fa-brands fa-x-twitter me-3"></i>
              <i className="fa-brands fa-square-facebook me-3"></i>
              <i className="fa-brands fa-instagram me-3"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </p>
            <hr className="text-secondary" />
            <p className="m-2">
              <i className="fa-brands fa-youtube me-3"></i>
              <i className="fa-brands fa-whatsapp me-3"></i>
              <i className="fa-brands fa-telegram"></i>
            </p>
          </div>

          <div className="col">
            <h5 className="mb-3">Account</h5>
            <a href="#" className="d-block small text-dark mt-2">
              Open demat account
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Minor demat account
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              NRI demat account
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Commodity
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Dematerialisation
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Fund transfer
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              MTF
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Referral program
            </a>
          </div>

          <div className="col">
            <h5 className="mb-3">Support</h5>
            <a href="#" className="d-block small text-dark mt-2 mt-2">
              Contact us
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Support portal
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              How to file a complaint?
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Status of your complaints
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Bulletin
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Circular
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Z-Connect blog
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Downloads
            </a>
          </div>

          <div className="col">
            <h5 className="mb-3">Company</h5>
            <a href="#" className="d-block small text-dark mt-2">
              About
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Philosophy
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Press & media
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Careers
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Zerodha Cares (CSR)
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Zerodha.tech
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Open source
            </a>
          </div>

          <div className="col">
            <h5 className="mb-3">Quick links</h5>
            <a href="#" className="d-block small text-dark mt-2">
              Upcoming IPOs
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Brokerage charges
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Market holidays
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Economic calendar
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Calculators
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Markets
            </a>
            <a href="#" className="d-block small text-dark mt-2">
              Sectors
            </a>
          </div>
        </div>

        <div>
          <p className="text-secondary small">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p className="text-secondary small">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="text-secondary small">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="text-secondary small">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="text-secondary small">
            Attention investors: 1 Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2 Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge. 3 Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>

          <p className="text-secondary small">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          {/* LAST LINKS - CENTERED AND SPACED */}
          <div className="text-center mt-4 mb-4">
            <a href="#" className="me-3 small text-secondary">
              NSE
            </a>
            <a href="#" className="me-3 small text-secondary">
              BSE
            </a>
            <a href="#" className="me-3 small text-secondary">
              MCX
            </a>
            <a href="#" className="me-3 small text-secondary">
              Terms & Conditions
            </a>
            <a href="#" className="me-3 small text-secondary">
              Policies & Procedures
            </a>
            <a href="#" className="me-3 small text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="me-3 small text-secondary">
              Disclosure
            </a>
            <a href="#" className="me-3 small text-secondary">
              For Investor's Attention
            </a>
            <a href="#" className="small text-secondary">
              Investor Charter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
