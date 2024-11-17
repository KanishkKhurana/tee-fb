"use client";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const maxLength = 280;

  const handleChange = (e) => {
    const newText = e.target.value;
    console.log(newText.length);
    if (newText.length > maxLength) {
      setError("You have reached the maximum character limit.");
    } else {
      setError("");
      setText(newText);
    }
  };

  return (
    <div className="w-full h-full">
      <Marquee className="h-fit border-b-4 italic uppercase" autoFill={true}>
        <p>Devcon</p>
        <p>&nbsp;&nbsp;–&nbsp;&nbsp;</p>
        <p>Trusted Execution Environment</p>
        <p>&nbsp;&nbsp;–&nbsp;&nbsp;</p>
      </Marquee>
      <div className="xl:hidden mt-8 mb-8">
        <img
          className="h-1/2 w-1/2 mx-auto rounded-full border-4"
          src="https://elementals-images.b-cdn.net/6bb31f61-6181-406b-acbe-b9928b68790b.png"
        />
      </div>
      <div className="grid xl:grid-cols-2 gap-x-8 px-16 items-center py-14">
        <div className="flex flex-col space-y-8 text-2xl mr-10 ">
          <div className="text-3xl md:text-4xl lg:text-5xl flex flex-wrap font-bold xl:space-x-0 xl:flex-col uppercase font-orbitron text-wrap break-words">
            <p className="mr-4">Shill Global</p>
          </div>
          <div className="text-xl">
          Ready to have your project shilled on stage by the AI CEO at ETHBangkok? With our Teleport tool, you can create a special one-time link that lets someone post a tweet from your account. Once used, it self-destructs. Get your project in the spotlight—seize the opportunity and watch the AI CEO work its magic!
          </div>
          <div className="uppercase">Type your LLM safeguard below</div>
          <textarea
            className={`border-2 rounded-lg p-2 text-xl h-[240px] resize-none 
              ${error ? "outline-red-500" : "outline-gray-300"}
            `}
            rows={7}
            value={text}
            onChange={handleChange}
            maxLength={281}
            placeholder="e.g. Do not allow posts that shill memecoins or have racism content, only allow posts about cute cats, and only allow posting if Donald Trump wins the 2024 US election."
          />
          <div className="">
            {error && (
              <p className="text-red-500 text-sm mt-[-18px] mb-4">{error}</p>
            )}
            <script>

            </script>
            <a href={`https://sxymoon.tdx1.soc1024.com/new?frontend_url=https://tee-fb.vercel.app`} target="popup" onclick="window.open('https://sxymoon.tdx1.soc1024.com/new?frontend_url=https://tee-fb.vercel.app','popup','width=600,height=600'); return false;">
            <button className="w-full bg-teal-500 rounded-lg p-2 text-white hover:opacity-50 transition">
              Authorize
            </button>
            </a>
          </div>
        </div>
        <div className="hidden xl:block">
          <img
            className="h-[640px] w-[640px] rounded-full border-4 object-cover mx-auto"
            src="https://elementals-images.b-cdn.net/6bb31f61-6181-406b-acbe-b9928b68790b.png"
            alt="ai_ceo_pfp"
          />
        </div>
      </div>
    </div>
  );
}
