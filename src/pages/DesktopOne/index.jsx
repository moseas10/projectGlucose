import React from "react";

import { Img, PagerIndicator, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sfprotext items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col gap-[18px] items-center justify-start pb-2 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[423px] h-[573px] md:px-5 relative w-full">
              <div className="absolute bg-red-A700_0c flex flex-col gap-[43px] inset-x-[0] items-center justify-start mx-auto p-[17px] top-[0] w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between mt-0.5 w-[99%] md:w-full">
                  <Text
                    className="sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-gray-700 tracking-[0.03px]"
                    size="txtSFProTextBold2024"
                  >
                    9:41
                  </Text>
                  <Img
                    className="h-3.5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
                <Img
                  className="h-[42px] md:h-auto mb-[277px] object-cover w-[5%]"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
              </div>
              <div className="absolute bottom-[0] md:h-[315px] h-[360px] inset-x-[0] mx-auto w-[35%] sm:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-[317px] inset-x-[0] items-end justify-start mx-auto p-2 rounded-[158px] top-[0] w-[317px]">
                  <div className="bg-gradient  h-[49px] mb-[250px] mr-9 rounded-[24px] w-[49px]"></div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[302px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_imageremovebgpreview.png"
                  alt="imageremovebgpr"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-avenirltstd gap-[46px] items-center justify-start md:px-5 w-[31%] md:w-full">
            <div className="flex flex-col gap-[30.36px] items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[26.36px] md:text-[28.36px] text-[30.36px] text-center text-red-A700 w-auto"
                size="txtAvenirLTStdBlack3036"
              >
                Your GoTo AI Assistant!
              </Text>
              <Text
                className="max-w-[433px] md:max-w-full sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-center text-gray-700"
                size="txtAvenirLTStdBook2024"
              >
                Welcome to a world of smart driving with our AI-powered
                assistant.
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-[98%] md:w-full">
              <PagerIndicator
                className="flex gap-[5.06px] h-2.5 items-start justify-start w-[60px]"
                count={3}
                activeCss="inline-block cursor-pointer h-2.5 bg-red-A700_99 w-[30px] rounded-[5px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-red-A700_33 w-2.5"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-[15.18px] text-gray-700"
                  size="txtAvenirLTStdBook1518"
                >
                  <span className="text-gray-700 font-avenirltstd text-left font-normal">
                    By using GLUCOSE, you agree to our{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-red-A700 font-avenirltstd text-left font-normal underline"
                  >
                    Terms and Privacy Policy
                  </a>
                </Text>
                <Text
                  className="mt-[18px] text-[15.18px] text-gray-700"
                  size="txtAvenirLTStdRoman1518"
                >
                  Talk with GLUCOSE on your favorite messaging app
                </Text>
                <Img
                  className="h-[81px] sm:h-auto mt-[29px] object-cover w-[413px] md:w-full"
                  src="images/img_frame77.png"
                  alt="frameSeventySeven"
                />
                <a
                  href="javascript:"
                  className="mt-[29px] sm:text-[16.24px] md:text-[18.24px] text-[20.24px] text-red-A700 underline"
                >
                  <Text size="txtAvenirLTStdBlack2024">Learn More</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
