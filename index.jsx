import React from "react";
import { Div } from "./Div";
import { DivWrapper } from "./DivWrapper";
import { InfoBlockWrapper } from "./InfoBlockWrapper";
import { MeetPlate } from "./MeetPlate";
import { MeetPlate1 } from "./MeetPlate1";
import { MeetPlate2 } from "./MeetPlate2";
import { MeetPlateWrapper } from "./MeetPlateWrapper";
import { SectionComponentNode } from "./SectionComponentNode";
import { UpperTabBar } from "./UpperTabBar";
import "./style.css";

export const AllEventsScreen = () => {
  return (
    <div className="all-events-screen">
      <div className="overlap-wrapper-2">
        <div className="overlap-10">
          <div className="overlap-11">
            <div className="go-button-wrapper">
              <div className="go-button-7">
                <div className="overlap-group-10">
                  <div className="text-wrapper-27">Иду!</div>
                </div>
              </div>
            </div>

            <div className="rectangle-9" />
          </div>

          <div className="meet-plate-3">
            <div className="go-button-7">
              <div className="overlap-group-10">
                <div className="text-wrapper-27">200 ₽</div>
              </div>
            </div>
          </div>

          <MeetPlate />
          <MeetPlateWrapper />
          <div className="meet-plate-4">
            <div className="go-button-8">
              <div className="overlap-group-10">
                <div className="text-wrapper-28">1200 ₽</div>
              </div>
            </div>
          </div>

          <InfoBlockWrapper />
          <DivWrapper />
          <Div />
          <SectionComponentNode />
          <MeetPlate1 />
          <MeetPlate2 />
          <UpperTabBar />
        </div>
      </div>
    </div>
  );
};
