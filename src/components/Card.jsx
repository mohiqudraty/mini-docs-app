import { FaRegFileCode, FaDownload, FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference}  whileDrag={{scale:1.1}} dragElastic={0.5} 
        dragTransition={{bounceStiffness:100, bounceDamping: 140}}
        className='relative w-48 h-60 rounded-2xl bg-zinc-950/80 text-white py-8 px-5 overflow-hidden'>
<FaRegFileCode />
      <p className="text-sm font-semibold mt-5 leading-tight">{data.desc}</p>
<div className="footer absolute  bottom-0 left-0 w-full">
<div className="flex justify-between items-center mb-3 py-2 px-5">
<h5>{data.fileSize}</h5>
<span className="w-7 h-7  rounded-full flex flex-shrink-0 items-center justify-center bg-zinc-300 text-zinc-900 py-3">
  {
    data.isHave ?  
    <FaDownload size={"0.8em"} />
    :
    <FaWindowClose size={"0.8em"}/> 
  }
</span>
</div>
{
    data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.tagBg === "green" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
    <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
    </div>
}

</div>


        </motion.div>
    );
};

export default Card;