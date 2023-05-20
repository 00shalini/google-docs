import React from "react";
import "../index.css";
import "./DocsUI.css";
import logo from "../assets/images/docs-logo.jpg";
import star from "../assets/images/star.png";
import send from "../assets/images/send.png";
import check from "../assets/images/check.png";

const DocsUI = () => {
  return (
    <div>
      <div className="header flex">
        <div className="border-black border">
          <img src={logo} alt="docs-logo" className="w-10 mt-3 ml-4" />
        </div>
        <div className="border-black border" style={{ width: "450px" }}>
          <div className="flex border-black border mt-2">
            <div>
              <input
                type="text"
                value="Untitled document"
                className="doc-name w-40 pl-2 h-15 place-items-center grid"
              />
              <div className="rename bg-black color text-slate-100 ml-14 mt-2 p-1 text-xs rounded place-items-center grid opacity-0">
                Rename
              </div>
            </div>
            <div className="ml-6 star-cont">
              <img
                src={star}
                className="w-4 h-4 ml-1.5 mt-0.5 absolute"
                alt="star icon"
              />
              <div className="star-div"></div>
              <div className="star  bg-black color text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid opacity-0">
                Star
              </div>
            </div>
            <div className="send-cont">
              <img
                src={send}
                className="send-img w-4 h-4 mt-1 absolute"
                alt="move-folder icon"
              />
              <div className="send-div"></div>
              <div className="send  bg-black color text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid opacity-0">
                Move
              </div>
            </div>
            <div className="check-cont">
              <img
                src={check}
                className="check-img w-4 h-4 mt-1 ml-1 absolute"
                alt="status docs"
              />
              <div className="check-div"></div>
              <div className="check  bg-black color text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid opacity-0">
                See document status
              </div>
            </div>
          </div>
          <div className="tool-bar-cont flex border-black border w-full justify-around">
            <div className="tool-bar-cont1 relative inline-block">
              <div className="tool-bar1 text-[#202124] tracking-wide cursor-pointer">File</div>
              <div className="tool-back1"></div>
            </div>
            <div className="tool-bar-cont2 relative inline-block">
              <div className="tool-bar2 text-[#202124] tracking-wide cursor-pointer">Edit</div>
              <div className="tool-back2"></div>
            </div>
            <div className="tool-bar-cont3 relative inline-block">
              <div className="tool-bar3 text-[#202124] tracking-wide cursor-pointer">View</div>
              <div className="tool-back3"></div>
            </div>
            <div className="tool-bar-cont4 relative inline-block">
              <div className="tool-bar4 text-[#202124] tracking-wide cursor-pointer">Insert</div>
              <div className="tool-back4"></div>
            </div>
            <div className="tool-bar-cont5 relative inline-block">
              <div className="tool-bar5 text-[#202124] tracking-wide cursor-pointer">Format</div>
              <div className="tool-back5"></div>
            </div>
            <div className="tool-bar-cont6 relative inline-block">
              <div className="tool-bar6 text-[#202124] tracking-wide cursor-pointer">Tools</div>
              <div className="tool-back6"></div>
            </div>
            <div className="tool-bar-cont7 relative inline-block">
              <div className="tool-bar7 text-[#202124] tracking-wide cursor-pointer">Extensions</div>
              <div className="tool-back7"></div>
            </div>
            <div className="tool-bar-cont8 relative inline-block">
              <div className="tool-bar8 text-[#202124] tracking-wide cursor-pointer">Help</div>
              <div className="tool-back8"></div>
            </div>
          </div>
        </div>
        <div className="border-black">

        </div>
        
      </div>
      <div className="">hello</div>
    </div>
  );
};

export default DocsUI;
