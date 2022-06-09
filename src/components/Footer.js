import React from "react";

const Footer = () => {
  return (
    <>
      <div className="italic p-2 bg-[#dddddd] stacked-filters-footer">
        Contact:{" "}
        <a className="underline" href="mailto:abey@dvrpc.org@dvrpc.org">
          Amani Bey
        </a>
      </div>
      <footer className="bg-[#636363] text-white flex flex-col md:flex-row">
        <div id="footer-words">
          <a href="/">
            <img
              src={require("../images/footer-logo.png").default}
              alt="footer logo"
              id="footer-logo"
            />
          </a>
          <address>
            190 N Independence Mall West, 8th Floor,
            <br />
            Philadelphia, PA 19106-1520
            <br />
            <a href="tel:+1-215-592-1800">215.592.1800</a> |{" "}
            <a href="mailto:abey@dvrpc.org">abey@dvrpc.org</a> |{" "}
            <a href="/Policies/">Policies</a>
            <br />
            &copy; Delaware Valley Regional Planning Commission
          </address>
        </div>

        <div id="footer-contact-wrapper">
          <h3>Connect With Us!</h3>
          <div id="footer-social-wrapper">
            <a
              id="mailto"
              class="footer-social-link"
              href="https://signup.e2ma.net/signup/1808352/1403728/"
              rel="noopener"
              target="_blank"
            >
              <img
                loading="lazy"
                id="email-icon"
                class="footer-social"
                src={require("../images/email.png").default}
                alt="icon link to email"
              />
            </a>
            <span class="vr"></span>
            <a
              class="footer-social-link"
              href="https://www.facebook.com/DVRPC"
              rel="noopener"
              target="_blank"
            >
              <img
                loading="lazy"
                class="footer-social"
                src={require("../images/facebook.png").default}
                alt="icon link to facebook"
              />
            </a>
            <span class="vr"></span>
            <a
              class="footer-social-link"
              href="https://twitter.com/DVRPC"
              rel="noopener"
              target="_blank"
            >
              <img
                loading="lazy"
                class="footer-social"
                src={require("../images/twitter.png").default}
                alt="icon link to twitter"
              />
            </a>
            <span class="vr"></span>
            <a
              class="footer-social-link"
              href="https://www.instagram.com/dvrpc/?hl=en"
              rel="noopener"
              target="_blank"
            >
              <img
                loading="lazy"
                class="footer-social"
                src={require("../images/instagram.png").default}
                alt="icon link to instagram"
              />
            </a>
            <span class="vr"></span>
            <a
              class="footer-social-link"
              href="https://www.linkedin.com/company/delaware-valley-regional-planning-commission"
              rel="noopener"
              target="_blank"
            >
              <img
                loading="lazy"
                class="footer-social"
                src={require("../images/linkedin.png").default}
                alt="icon link to linkedin"
              />
            </a>
            <span class="vr"></span>
            <a
              class="footer-social-link"
              href="https://www.youtube.com/channel/UCEU8UI5_iGkVypHP93b5jLA"
              rel="noopener"
              target="_blank"
            >
              <img
                loading="lazy"
                class="footer-social"
                src={require("../images/youtube.png").default}
                alt="icon link to youtube"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
