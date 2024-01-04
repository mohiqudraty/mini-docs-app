import React, {useRef} from "react";
import Card from "./Card";

const Foreground = () => {

const ref = useRef(null)
const data = [
  {
    desc: "JavaScript InterView Question & Answer PDF File",
    fileSize: ".20mb",
    isHave: true,
    tag: {isOpen: true, tagTitle: "Upload File", tagBg: "green"}
  },
  {
    desc: "React InterView Question & Answer PDF File",
    fileSize: ".20mb",
    isHave: false,
    tag: {isOpen: false, tagTitle: "Download Now", tagBg: "green"}
  },
  {
    desc: "HTML InterView Question & Answer PDF File",
    fileSize: ".20mb",
    isHave: true,
    tag: {isOpen: true, tagTitle: "Download Now", tagBg: "blue"}
  },
  {
    desc: "JavaScript InterView Question & Answer PDF File",
    fileSize: ".20mb",
    isHave: true,
    tag: {isOpen: true, tagTitle: "Upload File", tagBg: "green"}
  },
  {
    desc: "React InterView Question & Answer PDF File",
    fileSize: ".20mb",
    isHave: false,
    tag: {isOpen: false, tagTitle: "Download Now", tagBg: "green"}
  },
  {
    desc: "HTML InterView Question & Answer PDF File",
    fileSize: ".20mb",
    isHave: true,
    tag: {isOpen: true, tagTitle: "Download Now", tagBg: "blue"}
  },
  
]
  return <div ref={ref} className="fixed p-10 z-[3] w-full h-full top-0 left-0 flex gap-5 flex-wrap">
    {
      data.map((item, index) => {
      return <Card reference={ref} key={index} data={item}/>})
    }
  </div>;
};

export default Foreground;
