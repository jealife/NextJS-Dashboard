import React from "react";

export default function Footer() {
  return (
    <footer className="flex relative py-24 items-center flex-col  rounded-md border-t-[0.2px] border-slate-300   text-slate-100  ">
      <div className=" w-full  px-[calc(3rem*1)] block">
        <div className="grid md:grid-cols-1 grid-cols-5">
          <div className="flex flex-col gap-10">
            <a
              aria-label="Webflow&#x27;s homepage"
              href="https://webflow.com/?r=0"
              className="text-white inline-block max-w-full"
            >
              <div aria-label="hidden" className="flex text-white">
                <svg
                  width="65"
                  height="42"
                  viewBox="0 0 65 42"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Webflow logo</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64.8468 1.16213C64.8852 1.08715 64.8308 0.998047 64.7465 0.998047H45.758C45.7159 0.998047 45.6774 1.02148 45.658 1.05883L38.3421 15.1581C38.3228 15.1953 38.2844 15.2187 38.2425 15.2189L38.1564 15.2192C38.0914 15.2195 38.0397 15.1648 38.0435 15.0999L38.8664 1.12003C38.8702 1.05531 38.8187 1.00073 38.7539 1.00073H24.8443C24.7991 1.00073 24.761 1.02159 24.7431 1.06304C24.3993 1.86261 20.8034 10.1726 17.692 15.2511C17.6717 15.2843 17.636 15.3038 17.597 15.304L17.5541 15.3042C17.491 15.3044 17.44 15.2529 17.4409 15.1898L17.648 1.11238C17.6489 1.04951 17.5982 0.998047 17.5353 0.998047H0.112678C0.0504479 0.998047 0 1.04849 0 1.11073V18.2792C0 18.3415 0.0504478 18.3919 0.112678 18.3919H15.0966C15.1956 18.3919 15.2455 18.5107 15.1761 18.5813C9.78275 24.0677 1.15015 24.9031 0.104731 24.9853C0.0452979 24.99 0 25.0394 0 25.099V41.451C0 41.5173 0.0578629 41.5691 0.123853 41.563C15.2648 40.1531 25.9041 34.0968 32.9411 24.8066C32.9624 24.7785 32.9958 24.7619 33.0311 24.7619H33.1734C33.2579 24.7619 33.3123 24.8514 33.2734 24.9264L25.019 40.8343C24.9801 40.9093 25.0346 40.9989 25.1191 40.9989H44.3546C44.3969 40.9989 44.4356 40.9752 44.4549 40.9376L64.8468 1.16213Z"
                    fill="var(--theme--t_text-primary)"
                  />
                </svg>
              </div>
            </a>
            <div className="text-[#5a5a5a] ">
              © <span className="footer-copyright_year">2024</span>
              Webflow, Inc. <br />
              All rights reserved
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <div className="text-[.9rem] uppercase tracking-[.125rem] mb-5 ">Product</div>
              <ul
                aria-label="Product"
                role="list"
                className="flex flex-col text-[.9rem] items-start md:grid md:grid-cols-2 sm:grid-cols-1 "
              >
                <li className="mb-4">
                  <a
                    href="https://webflow.com/designer"
                    className="text-[#ababab] flex hover:text-white duration-200 transition-colors   leading-4 text-base "
                  >
                    <div>Designer</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/cms"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>CMS</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/ecommerce"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Ecommerce</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/interactions-animations"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Interactions</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/localization"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Localization</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/seo"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>SEO</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/editor"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Editor</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/hosting"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Hosting</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/devlink"
                    className="text-[#ababab] flex hover:text-white duration-200"
                  >
                    <div>DevLink</div>
                    <div className="mb-4-tag">Labs</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/figma-to-webflow"
                    className="text-[#ababab] flex hover:text-white duration-200"
                  >
                    <div>Figma to Webflow</div>
                    <div className="mb-4-tag">Labs</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/security"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Security</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/accessibility"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Accessibility</div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://webflow.com/features"
                    className="text-[#ababab] flex hover:text-white duration-200  "
                  >
                    <div>Feature index</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-10"></div>
          <div className="flex flex-col gap-10"></div>
          <div className="flex flex-col gap-10"></div>
        </div>
      </div>
    </footer>
  );
}
