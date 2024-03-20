import React from "react";

export default function NavBar() {
  return (
    <nav
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-[calc(100vh-3rem)] w-64 p-1 rounded-md sticky top-6 z-[9999] border-[0.2px] border-slate-300 text-slate-100 flex flex-col   md:h-12 md:flex-row md:transition-none md:w-full md:bg-[#222] overflow-x-hidden overflow-y-auto md:overflow-visible "
    >
      <div className="flex px-3 min-h-12 items-center justify-between border-b border-[#363636] py-0 md:px-3 ">
        <div className="flex-1 items-center ml-1 flex gap-[0.35rem]">
          <a className="max-w-full inline-block" href="#">
            <div className=" w-6 h-4 min-h-4 min-w-6 -mt-1 -ml-[-0.1rem] ">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5723 0.0491879C19.5839 0.0267106 19.5675 0 19.5423 0H13.8501C13.8374 0 13.8259 0.00702586 13.8201 0.0182204L11.6271 4.24446C11.6214 4.25561 11.6099 4.26263 11.5973 4.26268L11.5711 4.26279C11.5516 4.26287 11.536 4.24648 11.5372 4.22703L11.7839 0.0361956C11.785 0.0167938 11.7696 0.000432944 11.7502 0.000432944H7.58043C7.56691 0.000432944 7.55546 0.0066851 7.55012 0.0191115C7.44705 0.258804 6.36907 2.74995 5.43637 4.27233C5.43026 4.28229 5.41957 4.28815 5.40788 4.2882L5.39505 4.28825C5.37614 4.28833 5.36085 4.27288 5.36113 4.25398L5.42319 0.0342746C5.42346 0.0154273 5.40826 0 5.38941 0H0.16659C0.147935 0 0.132812 0.0151226 0.132812 0.0337776V5.18042C0.132812 5.19908 0.147935 5.2142 0.16659 5.2142H4.65799C4.68768 5.2142 4.70264 5.24981 4.68182 5.27098C3.06502 6.91532 0.477578 7.16569 0.164209 7.19034C0.146393 7.19174 0.132812 7.20656 0.132812 7.22443V12.1263C0.132812 12.1462 0.150158 12.1617 0.16994 12.1599C4.70874 11.7372 7.89811 9.92174 10.0076 7.13683C10.014 7.12838 10.024 7.1234 10.0346 7.1234H10.0777C10.103 7.1234 10.1194 7.15025 10.1077 7.17274L7.63309 11.9418C7.62142 11.9643 7.63774 11.9911 7.66307 11.9911H13.4293C13.442 11.9911 13.4536 11.9841 13.4594 11.9728L19.5723 0.0491879Z"
                  fill="#146ef5"
                />
              </svg>
            </div>
          </a>
          <a
            className="max-w-full flex  visible max-h-8 text-[.85rem] items-center font-[600] "
            href="https://university.webflow.com"
          >
            Webfow University
          </a>
        </div>
      </div>
    </nav>
  );
}
