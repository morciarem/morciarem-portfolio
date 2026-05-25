import React from "react";
import Image from "next/image";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <Image src="/whatsapp-svgrepo-com.svg" alt="Whatsapp" width={24} height={24} />
                        <span className="text-[15px] ml-[6px]">+49 15737064285</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <Image src="/google-gmail-svgrepo-com.svg" alt="Email" width={24} height={24} />
                        <span className="text-[15px] ml-[6px]">morciarem@gmail.com</span>    
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer