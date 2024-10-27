import React, { useState } from "react";
import CheckIcon from "../images/icon-check.svg";
import CircleBG from "../images/pattern-circles.svg";
import BGImg from "../images/bg-pattern.svg";
import "../index.css";

const PricingComponent = () => {
  const pageviewOptions = [
    { pageviews: "10K", price: 8 },
    { pageviews: "50K", price: 12 },
    { pageviews: "100K", price: 16 },
    { pageviews: "500K", price: 24 },
    { pageviews: "1M", price: 36 },
  ];

  const [selectedIndex, setSelectedIndex] = useState(2);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const calculatePrice = (price) => {
    return isYearlyBilling ? (price * 0.75).toFixed(2) : price.toFixed(2);
  };

  const handleSliderChange = (event) => {
    setSelectedIndex(Number(event.target.value));
  };

  const toggleBilling = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center font-manrope flex-col ${
        isDarkMode
          ? "bg-darkBackground text-darkText"
          : "bg-veryPaleBlueBackground text-grayishBlueText"
      }`}
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "100% 50%, cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        position: "relative",
      }}
    >
      <div className="absolute top-4 right-4 flex items-center">
        <span className="mr-2">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        <div
          onClick={toggleTheme}
          className={`cursor-pointer w-10 h-5 flex items-center p-1 rounded-full ${
            isDarkMode ? "bg-darkToggle" : "bg-lightGrayishBlueToggle"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
              isDarkMode ? "translate-x-4" : "translate-x-0"
            } transition-transform`}
          ></div>
        </div>
      </div>

      <div
        className={`bg-transparent max-w-lg text-center w-full flex items-center justify-center`}
        style={{
          backgroundImage: `url(${CircleBG})`,
          height: "80%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "20px",
        }}
      >
        <div className="w-full px-4">
          <h2 className="text-2xl sm:text-lg font-extrabold mb-2">
            Simple, traffic-based pricing
          </h2>
          <p className="text-[15px] sm:text-sm mb-4">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
      </div>

      <div
        className={`p-6 rounded-lg shadow-md max-w-2xl mx-auto w-[90%] md:w-[80%] lg:w-[60%] ${
          isDarkMode ? "bg-darkCard" : "bg-whitePricingBackground"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10">
          <p className="font-semibold text-sm mb-2 md:mb-0">
            {pageviewOptions[selectedIndex].pageviews} PAGEVIEWS
          </p>
          <p className="text-4xl font-bold text-center md:text-right">
            ${calculatePrice(pageviewOptions[selectedIndex].price)}{" "}
            <span className="text-lg font-medium">
              / {isYearlyBilling ? "year" : "month"}
            </span>
          </p>
        </div>

        <div className="px-4 md:px-10">
          <input
            type="range"
            min="0"
            max={pageviewOptions.length - 1}
            value={selectedIndex}
            onChange={handleSliderChange}
            className="w-full mt-4 slider"
            style={{
              background: `linear-gradient(to right, ${
                isDarkMode ? "hsl(174, 77%, 65%)" : "hsl(174, 77%, 80%)"
              } ${(selectedIndex / (pageviewOptions.length - 1)) * 100}%, ${
                isDarkMode ? "#444" : "#ebe9e7"
              } ${(selectedIndex / (pageviewOptions.length - 1)) * 100}%)`,
            }}
          />
        </div>

        <div className="flex items-center justify-center px-4 md:px-10 pt-10">
          <span className="mr-2">Monthly Billing</span>
          <div
            onClick={toggleBilling}
            className={`cursor-pointer rounded-full w-10 h-5 flex items-center p-1 transition-colors ${
              isYearlyBilling ? "bg-softCyan" : "bg-lightGrayishBlueToggle"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                isYearlyBilling ? "translate-x-4" : "translate-x-0"
              } transition-transform`}
            ></div>
          </div>
          <span className="ml-2">
            Yearly Billing{" "}
            <span className="bg-lightGrayishRed text-lightRed px-2 py-1 rounded-lg font-bold text-xs md:text-sm">
              25% discount
            </span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between p-6 md:p-10">
          <div className="mt-4 text-left">
            <ul className="space-y-2">
              <li className="flex items-center text-sm sm:text-xs md:text-sm">
                <img src={CheckIcon} alt="Check" className="mr-2" />
                <span>Unlimited websites</span>
              </li>
              <li className="flex items-center text-sm sm:text-xs md:text-sm">
                <img src={CheckIcon} alt="Check" className="mr-2" />
                <span>100% data ownership</span>
              </li>
              <li className="flex items-center text-sm sm:text-xs md:text-sm">
                <img src={CheckIcon} alt="Check" className="mr-2" />
                <span>Email reports</span>
              </li>
            </ul>
          </div>

          <button className="bg-darkDesaturatedBlue text-paleBlue hover:text-darkDesaturatedBlue font-bold h-10 w-40  rounded-full mt-6 hover:bg-grayishBlueText transition sm:mt-4 sm:px-2 sm:text-xs md:text-sm">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
