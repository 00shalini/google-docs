import React from "react";
import "../index.css";
import "./DocsUI.css";
import logo from "../assets/images/docs-logo.jpg";
import star from "../assets/images/star.png";
import send from "../assets/images/send.png";
import check from "../assets/images/check.png";
import history from "../assets/images/history.png";
import videorecord from "../assets/images/video-record.png";
import message from "../assets/images/message.png";
import downarrow from "../assets/images/downward-arrow.png";
import padlock from "../assets/images/padlock.png";
import profile from "../assets/images/profile-user.png";
import undo from "../assets/images/undo.png";
import redo from "../assets/images/redo.png";
import printer from "../assets/images/printer.png";
import spellcheck from "../assets/images/spell-check.png";
import paintroller from "../assets/images/paint-roller.png";
import underline from "../assets/images/underline.png";
import bold from "../assets/images/bold-text.png";
import italic from "../assets/images/italic-font.png";
import pencil from "../assets/images/pencil.png";
import minus from '../assets/images/minus-sign.png';

const DocsUI = () => {
  return (
    <div className="w-full">
      <div className="header flex">
        <div className="border-black border">
          <img
            src={logo}
            alt="docs-logo"
            className="home-cont w-10 mt-3 ml-4"
          />
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
              <div className="tool-bar1 text-[#202124] tracking-wide cursor-pointer">
                File
              </div>
              <div className="tool-back1"></div>
            </div>
            <div className="tool-bar-cont2 relative inline-block">
              <div className="tool-bar2 text-[#202124] tracking-wide cursor-pointer">
                Edit
              </div>
              <div className="tool-back2"></div>
            </div>
            <div className="tool-bar-cont3 relative inline-block">
              <div className="tool-bar3 text-[#202124] tracking-wide cursor-pointer">
                View
              </div>
              <div className="tool-back3"></div>
            </div>
            <div className="tool-bar-cont4 relative inline-block">
              <div className="tool-bar4 text-[#202124] tracking-wide cursor-pointer">
                Insert
              </div>
              <div className="tool-back4"></div>
            </div>
            <div className="tool-bar-cont5 relative inline-block">
              <div className="tool-bar5 text-[#202124] tracking-wide cursor-pointer">
                Format
              </div>
              <div className="tool-back5"></div>
            </div>
            <div className="tool-bar-cont6 relative inline-block">
              <div className="tool-bar6 text-[#202124] tracking-wide cursor-pointer">
                Tools
              </div>
              <div className="tool-back6"></div>
            </div>
            <div className="tool-bar-cont7 relative inline-block">
              <div className="tool-bar7 text-[#202124] tracking-wide cursor-pointer">
                Extensions
              </div>
              <div className="tool-back7"></div>
            </div>
            <div className="tool-bar-cont8 relative inline-block">
              <div className="tool-bar8 text-[#202124] tracking-wide cursor-pointer">
                Help
              </div>
              <div className="tool-back8"></div>
            </div>
          </div>
        </div>
        <div className="border-black border w-96 ml-80 flex">
          <div className="history-cont w-10">
            <img src={history} alt="history" className="absolute w-6 mt-5" />
            <div className="history-div"></div>
            <div className="history w-48 bg-black color h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
              Last edit was 24 minutes ago
            </div>
          </div>
          <div className="message-cont w-10">
            <img
              src={message}
              alt="message"
              className="absolute w-7 mt-5 ml-5"
            />
            <div className="message-div"></div>
            <div className="message  bg-black color w-64 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
              Open comment history (Ctrl+Alt+Shift+A)
            </div>
          </div>
          <div className="video-cont w-24">
            <img
              src={videorecord}
              alt="videorecord"
              className="absolute w-9 mt-4 ml-9"
            />
            <img
              src={downarrow}
              alt="downarrow"
              className="absolute w-3 mt-7 ml-20"
            />
            <div className="video-div"></div>
            <div className="video  bg-black color w-64 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
              Join a call here or present this tab to the call
            </div>
          </div>
          <div className="share-cont w-32">
            <img
              src={padlock}
              alt="padlock"
              className="absolute w-5 mt-6 ml-10 "
            />
            <p className="text-[#001d35] font-semibold mt-6 ml-16 text-sm">
              Share
            </p>
            <div className="share-div"></div>
            <div className="share  bg-black color w-32 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
              Private to only me
            </div>
          </div>
          <div className="profile-cont w-16">
            <img
              src={profile}
              alt="profile"
              className="absolute w-8 mt-5 ml-7 "
            />
            <div className="profile-div"></div>
            <div className="profile  bg-gray-400 color w-48 h-13 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded grid">
              <p className="font-bold">Google Account</p>
              <p className="font-bold text-gray-600">Shalini Sharma</p>
              <p className="font-bold text-gray-600">
                shalini07061997@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 border-black w-full border">
        <div
          className="h-10 rounded-3xl bg-[#edf2fa] border mx-auto mt-2 flex"
          style={{ width: "97%" }}
        >
          <div className="w-64 ml-3 border-black border h-10">
            <div className="undo-cont w-9 h-10">
              <img
                src={undo}
                alt="undo"
                className="absolute w-4 mt-2.5 ml-2 "
              />
              <div className="undo-div"></div>
              <div className="undo  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Undo(Ctrl+Z)
              </div>
            </div>
            <div className="redo-cont w-9">
              <img
                src={redo}
                alt="redo"
                className="absolute w-4 mt-2.5 ml-2 "
              />
              <div className="redo-div"></div>
              <div className="redo  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Redo(Ctrl+Y)
              </div>
            </div>
            <div className="printer-cont w-9">
              <img
                src={printer}
                alt="printer"
                className="absolute w-4 mt-3 ml-2.5 "
              />
              <div className="printer-div"></div>
              <div className="printer  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Print(Ctrl+P)
              </div>
            </div>
            <div className="spell-cont w-9">
              <img
                src={spellcheck}
                alt="spellcheck"
                className="absolute w-5 mt-2.5 ml-2.5 "
              />
              <div className="spell-div"></div>
              <div className="spell  bg-black color w-60 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Spelling and grammer check(Ctrl+Alt+X)
              </div>
            </div>
            <div className="format-cont w-9">
              <img
                src={paintroller}
                alt="format"
                className="absolute w-5 mt-2.5 ml-2 "
              />
              <div className="format-div"></div>
              <div className="format  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Paint format
              </div>
            </div>
            <div className="zoom-cont w-16 h-10">
              <p className="zoom-100 ml-48 font-bold">100%</p>
              <img
                src={downarrow}
                alt="downarrow"
                className="absolute w-3"
                style={{
                  marginLeft: "47px",
                  marginTop: "-17px",
                  color: "rgb(92, 92, 92)",
                }}
              />
              <div className="zoom-div"></div>
              <div className="zoom  bg-black color w-12 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Zoom
              </div>
            </div>
          </div>
          <div className="w-56 border-black border h-10">
            <div className="styles-cont w-28 h-10 border">
              <p className="styles-txt ml-2 mt-2.5 font-bold">Normal text</p>
              <img
                src={downarrow}
                alt="downarrow"
                className="absolute w-3"
                style={{
                  marginLeft: "90px",
                  marginTop: "-16px",
                  color: "rgb(92, 92, 92)",
                }}
              />
              <div className="styles-div"></div>
              <div className="styles  bg-black color w-12 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Styles
              </div>
            </div>
          </div>
          <div className="w-24 border-black border h-10">
            <div className="font-cont w-28 h-10 border">
              <p className="font-txt mt-2.5 font-bold">Arial</p>
              <img
                src={downarrow}
                alt="downarrow"
                className="absolute w-3"
                style={{
                  marginLeft: "80px",
                  marginTop: "-16px",
                  color: "rgb(92, 92, 92)",
                }}
              />
              <div className="font-div"></div>
              <div className="font  bg-black color w-12 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Font
              </div>
            </div>
          </div>
          <div className="w-32 border-black border h-10">
            <div className="dec-cont w-6 h-10 border">
              <img
                src={minus}
                alt="minus"
                className="absolute w-3"
                style={{
                  marginLeft: "5px",
                  marginTop:'13px'
                  
                }}
              />
              <div className="dec-div"></div>
              <div className="dec  bg-black color w-56 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Decrease font size(Ctrl+Shift+,)
              </div>
            </div>
            <div className="font-inp-cont w-8 h-10">
              <p value="10" className="w-8 font-inp border text-center border-slate-600 rounded-sm">10</p>
              <div className="font-tool  bg-black color w-16 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Font size
              </div>
            </div>
          </div>
          <div className="w-24 border-black border h-10"></div>
          <div className="w-72 border-black border h-10"></div>
          <div className="w-12 border-black border h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default DocsUI;
