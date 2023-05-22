import React, { useState } from "react";
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
import highlighter from '../assets/images/highlighter.png';
import insert from '../assets/images/insert.png';
import comment from '../assets/images/comment.png';
import picture from '../assets/images/image.png';
import align from '../assets/images/align-right.png';
import linespacing from '../assets/images/line-spacing.png';
import listwithbullet from '../assets/images/list-with-bullets.png'
import menu from '../assets/images/menu.png';
import uparrow from '../assets/images/up-arrow.png';
import folder from '../assets/images/folder.png';
import document from '../assets/images/document.png';
import copy from '../assets/images/copy.png';
import adduser from '../assets/images/add-user.png';
import email from '../assets/images/email.png';
import download from '../assets/images/download.png';
import edit from '../assets/images/edit.png';
import googledrive from '../assets/images/google-drive.png';
import cut from '../assets/images/scissors.png';
import list from '../assets/images/list.png';
import selectall from '../assets/images/select-all.png';
import deleteall from '../assets/images/bin.png';
import find from '../assets/images/find.png';
import check1 from '../assets/images/check (1).png';
import fullscreen from '../assets/images/switch-to-full-screen-button.png';
import table from '../assets/images/table.png';
import drawing from '../assets/images/technical-drawing.png';
import graph from '../assets/images/stats.png';
import emoji from '../assets/images/happy.png';
import dropdown from '../assets/images/down-chevron.png';
import omega from '../assets/images/omega.png';
import pi from '../assets/images/pi.png';
import justification from '../assets/images/justification.png';
import column from '../assets/images/columns.png';
import hashtag from '../assets/images/hashtag.png';
import citation from '../assets/images/quotation-mark.png';
import notification from '../assets/images/notification.png';
import mic from '../assets/images/mic.png';
import adddoc from '../assets/images/text-document-add-button-with-plus-sign.png';
import googleappscript from '../assets/images/google-apps-script.png';
import question from '../assets/images/question.png';
import graduation from '../assets/images/graduation.png';
import frequency from '../assets/images/frequency.png';
import warning from '../assets/images/warning.png';
import keyboard from '../assets/images/keyboard.png';

const DocsUI = () => {

  const [fileDrop, setFileDrop] = useState(false);
  const [editDrop ,setEditDrop] = useState(false);
  const [viewDrop , setViewDrop] = useState(false);
  const [insertDrop , setInsertDrop] = useState(false);
  const [formatDrop , setFormatDrop] = useState(false);
  const [toolDrop , setToolDrop] = useState(false);
  const [extensionDrop, setExtensionDrop] = useState(false);
  const [helpDrop , setHelpDrop] = useState(false);
  var [fontSize, setFontSize] = useState(14);

  const handleFontSize = (e) => {
    e.preventDefault();
    const id = e.target.id;
     if (id === 'add') {
      setFontSize(fontSize => fontSize+1);
     } else {
       if (id === 'minus'){
        setFontSize(fontSize => fontSize- 1);
       }
     }
  }

  const handleShowDropDown = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === 'file-id'){
      setFileDrop(!fileDrop);
      setEditDrop(false);
      setViewDrop(false);
      setInsertDrop(false);
      setFormatDrop(false);
      setToolDrop(false);
      setExtensionDrop(false);
      setHelpDrop(false)
    } else if (id === 'edit-id') {
      setEditDrop(!editDrop);
      setFileDrop(false);
      setViewDrop(false);
      setInsertDrop(false);
      setFormatDrop(false);
      setToolDrop(false);
      setExtensionDrop(false);
      setHelpDrop(false)
    } else if (id === 'view-id') {
      setViewDrop(!viewDrop);
      setEditDrop(false);
      setFileDrop(false);
      setInsertDrop(false);
      setFormatDrop(false);
      setToolDrop(false);
      setExtensionDrop(false);
      setHelpDrop(false)
    } else if (id === 'insert-id') {
      setInsertDrop(!insertDrop);
      setViewDrop(false);
      setEditDrop(false);
      setFileDrop(false);
      setFormatDrop(false);
      setToolDrop(false);
      setExtensionDrop(false);
      setHelpDrop(false)
    }else if (id === 'format-id') {
      setFormatDrop(!formatDrop);
      setInsertDrop(false);
      setViewDrop(false);
      setEditDrop(false);
      setFileDrop(false);
      setToolDrop(false);
      setExtensionDrop(false);
      setHelpDrop(false)
    }else if (id === 'tool-id') {
      setToolDrop(!toolDrop);
      setFormatDrop(false);
      setInsertDrop(false);
      setViewDrop(false);
      setEditDrop(false);
      setFileDrop(false);
      setExtensionDrop(false);
      setHelpDrop(false)
    }else if (id === 'extension-id') {
      setToolDrop(false);
      setFormatDrop(false);
      setInsertDrop(false);
      setViewDrop(false);
      setEditDrop(false);
      setFileDrop(false);
      setExtensionDrop(!extensionDrop);
      setHelpDrop(false)
    }else if (id === 'help-id') {
      setHelpDrop(!helpDrop);
      setToolDrop(false);
      setFormatDrop(false);
      setInsertDrop(false);
      setViewDrop(false);
      setEditDrop(false);
      setFileDrop(false);
      setExtensionDrop(false);
    }
    
  }
  return (
    <div className="w-full">
      <div className="header flex">
        <div className="">
          <img
            src={logo}
            alt="docs-logo"
            className="home-cont w-10 mt-3 ml-4"
          />
        </div>
        <div className="" style={{ width: "450px" }}>
          <div className="flex  mt-2">
            <div>
              <input
                type="text"
                placeholder="Untitled document"
                className="doc-name w-40 pl-2 h-15 place-items-center grid rounded"
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
          <div className="tool-bar-cont flex  w-full justify-around">
            <div className="tool-bar-cont1 relative inline-block" onClick={handleShowDropDown}>
              <div className=" text-[#202124] tracking-wide cursor-pointer" id="file-id">
                File
              </div>
              <div className="tool-back1"></div>
              <div className={` w-80 bg-white z-50 h-56 overflow-y-scroll ${ fileDrop ? 'show': 'hide'}`}>
                 <div className=" w-full h-9 mt-2 flex div-hover">
                    <img src={document} alt="new file" className="w-5 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">New</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={folder} alt="open file" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Open</p>
                    <p className="ml-44 mt-2.5" style={{color:' rgb(92, 92, 92)'}}>Ctrl+O</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={copy} alt="copy file" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5"> Make a copy</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={adduser} alt="share user" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Share</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={email} alt="email" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Email</p></div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={download} alt="download" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Download</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={edit} alt="rename" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Rename</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={send} alt="move" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Move</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={googledrive} alt="google drive" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Add shortcut to drive</p>
                 </div>
              </div>
            </div>
            <div className="tool-bar-cont2 relative inline-block" onClick={handleShowDropDown}>
              <div className="tool-bar2 text-[#202124] tracking-wide cursor-pointer" id="edit-id">
                Edit
              </div>
              <div className="tool-back2"></div>
              <div className={` w-80 bg-white z-50 h-72 overflow-y-scroll ${ editDrop ? 'show': 'hide'}`}>
                 <div className=" w-full h-9 mt-2 flex div-hover">
                    <img src={undo} alt="undo" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Undo</p>
                    <p className="ml-44 mt-2.5" style={{color:' rgb(92, 92, 92)'}}>Ctrl+Z</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={redo} alt="redo" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Redo</p>
                    <p className="ml-44 mt-2.5" style={{color:' rgb(92, 92, 92)'}}>Ctrl+Y</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={copy} alt="copy file" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5"> Make a copy</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={adduser} alt="share user" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Share</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={email} alt="email" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Email</p></div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={download} alt="download" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Download</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={edit} alt="rename" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Rename</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={send} alt="move" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Move</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={googledrive} alt="google drive" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Add shortcut to drive</p>
                 </div>
              </div>
            </div>
            <div className="tool-bar-cont3 relative inline-block" onClick={handleShowDropDown}>
              <div className="tool-bar3 text-[#202124] tracking-wide cursor-pointer" id="view-id">
                View
              </div>
              <div className="tool-back3"></div>
              <div className={` w-96 bg-white z-50 h-72 overflow-y-scroll ${ viewDrop ? 'show': 'hide'}`}>
                 <div className=" w-full h-9 mt-2 mb-5 flex div-hover">
                    <img src={pencil} alt="mode" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Mode</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={check1} alt="check" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Show print layout</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <p className="ml-9 mt-2.5">Show ruler</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={check1} alt="share user" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Show outline</p>
                    <p className="ml-28 mt-2.5 font-semibold text-right" style={{color:' rgb(92, 92, 92)'}}>Ctrl+Alt+A Ctrl+Alt+H</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <p className="ml-9 mt-2.5">Show equation toolbar</p>
                  </div>
                 <div className=" w-full h-9 flex div-hover">
                    <p className="ml-9 mt-2.5">Show non printing characters</p>
                    <p className="mt-2.5 font-semibold text-right" style={{color:' rgb(92, 92, 92)' ,marginLeft:"90px"}}>Ctrl+Alt+P</p>
                 </div>
                 <div className=" w-full h-9 mt-5 flex div-hover">
                    <img src={fullscreen} alt="rename" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-5 mt-2.5">Full screen
                    </p>
                 </div>
                
              </div>
            </div>
            <div className="tool-bar-cont4 relative inline-block" onClick={handleShowDropDown}>
              <div className="tool-bar4 text-[#202124] tracking-wide cursor-pointer" id="insert-id">
                Insert
              </div>
              <div className="tool-back4"></div>
              <div className={` w-80 bg-white z-50 h-72 overflow-y-scroll ${ insertDrop ? 'show': 'hide'}`}>
                 <div className=" w-full h-9 mt-2 flex div-hover">
                    <img src={picture} alt="iamge" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Image</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={table} alt="table" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Table</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={drawing} alt="drawing" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Drawing</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={graph} alt="chart" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Chart</p>
                    
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={minus} alt="minus" className="w-4 h-4 mt-2.5 ml-2"/>   
                    <p className="ml-3 mt-2.5">Horizontal line</p>
                  </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={emoji} alt="emoji" className="w-4 h-4 mt-1.5 ml-2"/>   
                    <p className="ml-3 mt-1.5">Emoji</p>
                  </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={dropdown} alt="dropdown" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Drop down
                    </p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={omega} alt="special char" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Special characters
                    </p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={pi} alt="equation" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Equation
                    </p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={hashtag} alt="page number" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Page numbers
                    </p>
                 </div>
              </div>
            </div>
            <div className="tool-bar-cont5 relative inline-block" onClick={handleShowDropDown}> 
              <div className="tool-bar5 text-[#202124] tracking-wide cursor-pointer" id="format-id">
                Format
              </div>
              <div className="tool-back5"></div>
              <div className={` w-80 bg-white z-50 h-72 overflow-y-scroll ${ formatDrop ? 'show': 'hide'}`}>
                 <div className=" w-full h-9 mt-2 flex div-hover">
                    <img src={bold} alt="text" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Text</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={justification} alt="paragraph" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Paragraph styles</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={align} alt="linespacing" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Line & paragraph spacing</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={column} alt="columns" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Columns</p>
                    
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={listwithbullet} alt="bullets" className="w-4 h-4 mt-2.5 ml-2"/>   
                    <p className="ml-3 mt-2.5">Bullets & numbering</p>
                  </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={hashtag} alt="page" className="w-4 h-4 mt-1.5 ml-2"/>   
                    <p className="ml-3 mt-1.5">Page numbers</p>
                  </div>
                  <div className=" w-full h-9 flex div-hover">
                    <img src={picture} alt="image" className="w-4 h-4 mt-1.5 ml-2"/>   
                    <p className="ml-3 mt-1.5">Image</p>
                  </div>
                  <div className=" w-full h-9 flex div-hover">
                    <img src={minus} alt="borders" className="w-4 h-4 mt-1.5 ml-2"/>   
                    <p className="ml-3 mt-1.5">Borders & lines</p>
                  </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={table} alt="table" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Table
                    </p>
                 </div>
              </div>
            </div>
            <div className="tool-bar-cont6 relative inline-block" onClick={handleShowDropDown}>
              <div className="tool-bar6 text-[#202124] tracking-wide cursor-pointer" id="tool-id">
                Tools
              </div>
              <div className="tool-back6"></div>
              <div className={` w-80 bg-white z-50 h-68 ${ toolDrop ? 'show': 'hide'}`}>
              <div className=" w-full h-9 mt-2 flex div-hover">
                    <img src={spellcheck} alt="spelling" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Spellings & grammer</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={citation} alt="citation" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Citation</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={mic} alt="mic" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Voice typing</p>
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={notification} alt="notfication" className="w-4 h-4 mt-2.5 ml-2"/>
                    <p className="ml-3 mt-2.5">Notification</p>
                    
                 </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={listwithbullet} alt="bullets" className="w-4 h-4 mt-2.5 ml-2"/>   
                    <p className="ml-3 mt-2.5">Bullets & numbering</p>
                  </div>
                 <div className=" w-full h-9 flex div-hover">
                    <img src={hashtag} alt="page" className="w-4 h-4 mt-1.5 ml-2"/>   
                    <p className="ml-3 mt-1.5">Page numbers</p>
                  </div>
                  <div className=" w-full h-9 flex div-hover">
                    <img src={picture} alt="image" className="w-4 h-4 mt-1.5 ml-2"/>   
                    <p className="ml-3 mt-1.5">Image</p>
                  </div>
              </div>
            </div>
            <div className="tool-bar-cont7 relative inline-block" onClick={handleShowDropDown}>
              <div className="tool-bar7 text-[#202124] tracking-wide cursor-pointer" id="extension-id">
                Extensions
              </div>
              <div className="tool-back7"></div>
              <div className={` w-80 bg-white z-50 h-34 ${ extensionDrop ? 'show': 'hide'}`}>
                <div className=" w-full h-9 mt-3 flex div-hover">
                  <img src={adddoc} alt="adddoc" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Add ons</p>
                </div>
                <div className=" w-full h-9 flex div-hover">
                  <img src={googleappscript} alt="appscript" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Apps script</p>
                </div>
              </div>
            </div>
            <div className="tool-bar-cont8 relative inline-block" onClick={handleShowDropDown}>
              <div className="tool-bar8 text-[#202124] tracking-wide cursor-pointer" id="help-id">
                Help
              </div>
              <div className="tool-back8"></div>
              <div className={` w-80 bg-white z-50 h-60 ${ helpDrop ? 'show': 'hide'}`}>
                
                <div className=" w-full h-9 mt-3 flex"> 
                  <input type="text" placeholder="Search the menus(Alt+/)" className="inp m-auto w-72 h-full outline-none bg-[#e2e4e5] hover:bg-white rounded"/>
                </div>
                <div className=" w-full h-9 mt-3 flex div-hover">
                  <img src={question} alt="help" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Help</p>
                </div>
                <div className=" w-full h-9 flex div-hover">
                  <img src={graduation} alt="training" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Training</p>
                </div>
                <div className="w-full h-9 flex div-hover">
                  <img src={frequency} alt="updates" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Updates</p>
                </div>
                <div className=" w-full h-9 flex div-hover">
                  <img src={warning} alt="warning" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Report abuse</p>
                </div>
                <div className=" w-full h-9 flex div-hover">
                  <img src={keyboard} alt="keyboard" className="w-4 h-4 mt-2.5 ml-2"/>   
                  <p className="ml-3 mt-2.5">Keyboard shortcuts</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className=" w-96 ml-80 flex">
          <div className="history-cont w-10">
            <img src={history} alt="history" className="absolute w-5 mt-6 ml-1" />
            <div className="history-div"></div>
            <div className="history w-48 bg-black color h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
              Last edit was 24 minutes ago
            </div>
          </div>
          <div className="message-cont w-10">
            <img
              src={message}
              alt="message"
              className="absolute w-6 mt-6 ml-5"
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
              className="absolute w-8 mt-5 ml-9"
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
          <div className="share-cont w-32 h-16">
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
            <div className="profile z-50  bg-gray-400 color w-48 h-13 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded grid">
              <p className="font-bold">Google Account</p>
              <p className="font-bold text-gray-600">Shalini Sharma</p>
              <p className="font-bold text-gray-600">
                shalini07061997@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 w-full" style={{marginTop:'-6px'}}>
        <div
          className="h-10 rounded-3xl bg-[#edf2fa] mx-auto mt-2 flex"
          style={{ width: "97%" }}
        >
          <div className="w-64 ml-3 h-10">
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
            <div className="redo-cont w-9 h-10">
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
            <div className="printer-cont w-9 h-10">
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
            <div className="spell-cont w-9 h-10">
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
            <div className="format-cont w-9 h-10">
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
          <div className="w-56 h-10">
            <div className="styles-cont w-28 h-10">
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
          <div className="w-24 h-10">
            <div className="font-cont w-28 h-10">
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
          <div className="w-32 h-10">
            <div className="dec-cont w-6 h-10" id="minus" onClick={handleFontSize}>
              <img
                src={minus}
                alt="minus"
                className="absolute w-3"
                style={{
                  marginLeft: "5px",
                  marginTop:'9px'
                  
                }}
                id="minus"
              />
              <div className="dec-div" id="minus"></div>
              <div className="dec  bg-black color w-56 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Decrease font size(Ctrl+Shift+,)
              </div>
            </div>
            <div className="font-inp-cont w-8 h-10">
              <p className="w-8 font-inp text-center border-slate-600 rounded-sm">{fontSize}</p>
              <div className="font-tool  bg-black color w-16 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Font size
              </div>
            </div>
            <div className="inc-cont w-6 h-10" id="add" onClick={handleFontSize}>
              <p id="add" className="w-8 inc-txt text-center text-2xl">+</p>
              <div className="inc-div" id="add"></div>
              <div className="inc  bg-black color w-56 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
              Increase font size(Ctrl+Shift+.)
              </div>
            </div>
          </div>
          <div className="w-48 h-10 flex pl-2 pr-2" style={{marginLeft:'-120px'}}>
              <div className="bold-cont w-9 h-10">
                <img
                  src={bold}
                  alt="bold"
                  className="absolute w-3"
                  style={{
                    marginLeft: "12px",
                    marginTop:'13px'
                    
                  }}
                  
                />
                <div className="bold-div"></div>
                <div className="bold  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                  Bold(Ctrl+B)
                </div>
            </div>
            <div className="italic-cont w-9 h-10">
              <img
                src={italic}
                alt="italic"
                className="absolute w-3"
                style={{
                  marginLeft: "10px",
                  marginTop:'13px'
                  
                }}
              />
              <div className="italic-div"></div>
              <div className="Italic  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Italic(ctrl+I)
              </div>
            </div>
            <div className="underline-cont w-9 h-10">
              <img
                src={underline}
                alt="underline"
                className="absolute w-3"
                style={{
                  marginLeft: "10px",
                  marginTop:'13px'
                  
                }}
              />
              <div className="underline-div"></div>
              <div className="Underline  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Underline(Ctrl+U)
              </div>
            </div>
            <div className="text-color-cont w-9 h-10">
             <p className="text-color-txt mt-2.5 ml-3 font-bold">A</p>
            <div className="text-color-div"></div>
            <div className="border-b-4 border-b-black w-5 m-auto" style={{marginTop:'-8px'}}></div>
              <div className="text-color  bg-black color w-16 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Text color
              </div>
            </div>
            <div className="highlighter-cont w-9 h-10">
              <img
                src={highlighter}
                alt="highlighter"
                className="absolute w-3"
                style={{
                  marginLeft: "10px",
                  marginTop:'13px'
                  
                }}
              />
              <div className="highlighter-div"></div>
              <div className="highlighter  bg-black color w-28 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Highlighter color
              </div>
            </div>
          </div>
          <div className="w-28 h-10 flex">
            <div className="insert-cont w-9 h-10">
              <img
                src={insert}
                alt="insert"
                className="absolute w-5"
                style={{
                  marginLeft: "8px",
                  marginTop:'10px'
                  
                }}
              />
              <div className="insert-div"></div>
              <div className="insert  bg-black color w-28 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Insert link(Ctrl+K)
              </div>
            </div>
            <div className="comment-cont w-9 h-10">
              <img
                src={comment}
                alt="comment"
                className="absolute w-5"
                style={{
                  marginLeft: "8px",
                  marginTop:'10px'
                  
                }}
              />
              <div className="comment-div"></div>
              <div className="comment  bg-black color w-40 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Add comment(Ctrl+Alt+M)
              </div>
            </div>
            <div className="picture-cont w-9 h-10">
              <img
                src={picture}
                alt="picture"
                className="absolute w-5"
                style={{
                  marginLeft: "8px",
                  marginTop:'10px'
                  
                }}
              />
              <div className="picture-div"></div>
              <div className="picture  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Insert image
              </div>
            </div>
          </div>
          <div className="w-60 h-10 flex">
            <div className="align-cont w-12 h-10">
              <img
                src={align}
                alt="align"
                className="absolute w-4"
                style={{
                  marginLeft: "8px",
                  marginTop:'11px'
                  
                }}
              />
              <img
                src={downarrow}
                alt="downarrow"
                className="absolute w-3"
                style={{
                  marginLeft: "32px",
                  marginTop:'15px',
                  color:'#5c5c5c'
                }}
              />
              <div className="align-div"></div>
              <div className="align  bg-black color w-20 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Text align
              </div>
            </div>
            <div className="line-space-cont w-9 h-10">
              <img
                src={linespacing}
                alt="linespace"
                className="absolute w-5"
                style={{
                  marginLeft: "8px",
                  marginTop:'10px'
                  
                }}
              />
              <div className="line-space-div"></div>
              <div className="line-space  bg-black color w-40 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Line & paragraph spacing
              </div>
            </div>
            <div className="menu-cont w-9 h-10">
              <img
                src={menu}
                alt="menu"
                className="absolute w-5"
                style={{
                  marginLeft: "8px",
                  marginTop:'10px'
                  
                }}
              />
              <div className="menu-div"></div>
              <div className="menu  bg-black color w-12 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                More
              </div>
            </div>
            <div className="edit-cont w-16 h-10 ml-14">
              <img
                src={pencil}
                alt="edit"
                className="absolute w-4"
                style={{
                  marginLeft: "8px",
                  marginTop:'12px'
                  
                }}
              />
                <img
                src={downarrow}
                alt="downarrow"
                className="absolute w-3"
                style={{
                  marginLeft: "32px",
                  marginTop:'15px',
                  color:'#5c5c5c'
                }}
              />
              <div className="edit-div"></div>
              <div className="edit  bg-black color w-24 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Editing mode
              </div>
            </div>
          </div>
          <div className="w-12 h-10">
            <div className="uparrow-cont w-9 h-10">
              <img
                src={uparrow}
                alt="uparrow"
                className="absolute w-3"
                style={{
                  marginLeft: "10px",
                  marginTop:'8px'
                  
                }}
              />
              <div className="uparrow-div"></div>
              <div className="uparrow  bg-black color w-44 h-6 text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">
                Hide the menus(Ctrl+Shift+F)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex pl-7 pt-2">
        <div className="list-with-bullet-cont h-10 w-5">
          <img src={listwithbullet} alt="list with bullet" className="w-5"/>
          <div className="list-with-bullet-div"></div>
          <div className="list-with-bullet w-36 h-6 bg-black text-slate-100 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid">Show document outline</div>
        </div>
        <div className="w-8/12 ml-44 bg-white border" style={{height:"700px"}}>
           <textarea type="textarea" className="w-10/12 h-5/6 mt-14 ml-16 border-none outline-none" placeholder="Type @ to insert"></textarea>
        </div>
      </div>
    </div>
  );
};

export default DocsUI;
