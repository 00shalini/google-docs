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
import padlock from '../assets/images/padlock.png';
import profile from '../assets/images/profile-user.png';

const DocsUI = () => {
  return (
    <div className="w-full">
      <div className="header flex">
        <div className="border-black border">
          <img src={logo} alt="docs-logo" className="home-cont w-10 mt-3 ml-4" />
          
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
            <p className="text-[#001d35] font-semibold mt-6 ml-16 text-sm">Share</p>
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
                <p className="font-bold text-gray-600">shalini07061997@gmail.com</p>
              </div>
          </div>
        </div>
      </div>
      <div className="h-14 border-black w-full border">
        <div className="h-10 rounded-3xl bg-[#edf2fa] border mx-auto mt-2" style={{width:'97%'}}>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
        </div>
      </div>
    </div>
  );
};

export default DocsUI;
