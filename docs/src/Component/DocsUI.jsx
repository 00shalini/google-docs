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
               <div className="border-black border">
                  <div className="flex border-black border mt-2">
                    <div>
                      <input type="text" value="Untitled document" className="doc-name w-40 pl-2 h-15 place-items-center grid"/>
                      <div className="rename bg-black color text-slate-100 ml-14 mt-2 p-1 text-xs rounded place-items-center grid opacity-0">Rename</div>
                    </div>
                    <div className="ml-6">
                     
                       <img src={star} className="star-fav w-6 h-4 mt-1 ml-5" alt="star icon"/>
               
                       <div className="star  bg-black color text-slate-100 ml-2.5 mt-2 pt-0.5 pb-0.5 pl-1.5 pr-1.5 text-xs rounded place-items-center grid opacity-0">Star</div>
                    </div>
                    
                    <img src={send} className="w-4 h-4 ml-4 mt-1" alt="move-folder icon"/>
                    <img src={check} className="w-4 h-4 mt-1 ml-4" alt="status docs"/>
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