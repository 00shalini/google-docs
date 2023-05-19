import React from "react";
import '../index.css';
import './DocsUI.css';
import logo from '../assets/images/docs-logo.jpg';
import star from '../assets/images/star.png';
import send from '../assets/images/send.png';
import check from '../assets/images/check.png';

const DocsUI = () => {
    return (
        <div>
            <div className="header flex">
               <div className="border-black border">
                  <img src={logo} alt="docs-logo" className="w-10 mt-3 ml-4"/>
               </div>
               <div className="border-black border ml-3">
                  <div className="flex border-black border">
                    <input type="text" value="Untitled document" className="doc-name"/>
                    <img src={star} className="w-4 h-4" alt="star icon"/>
                    <img src={send} className="w-4 h-4" alt="move-folder icon"/>
                    <img src={check} className="w-4 h-4" alt="status docs"/>
                    </div>
                  <div className="flex border-black border">
                    <div>File</div>
                    <div>Edit</div>
                    <div>View</div>
                    <div>Insert</div>
                    <div>Format</div>
                    <div>Tools</div>
                    <div>Extensions</div>
                    <div>Help</div>
                  </div>
               </div>
               <div className="border-black"></div>
               <div className="border-black"></div>
               <div className="border-black"></div>
               <div className="border-black"></div>
               <div className="border-black"></div>
            </div>
            <div className="">
               hello
            </div>
           
        </div>
    )
}

export default DocsUI;