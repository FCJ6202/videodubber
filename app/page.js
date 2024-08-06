'use client'

import react,{ useState } from "react";


export default function Home() {
  const [upvoteCount, setUpvoteCount] = useState(0);

  const handleUpvote = () => {
    setUpvoteCount(currentCount => currentCount + 1);
  };
  return (
    <div className="flex bg-white max-w-7xl mx-auto">
      <div
        className="flex-1 flex flex-col justify-between py-8 px-2 lg:px-20 xl:px-24"
      >
        <div className="text-pink-600 text-3xl p-4">💋</div>
        <div className="grid grid-cols-3 gap-4 bg-white shadow-md p-4 rounded-lg">
          <div className="flex gap-2 items-center col-span-2 space-x-3">
            <div>
              <h1 className="text-24 font-bold text-dark-gray text-2xl">VideoDubber - Fast Video Translator</h1>
              <h2 className="text-24 font-light text-light-gray text-2xl">Translate videos in your own voice, globalize in a click!</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 text-black rounded px-10 py-4 hover:bg-gray-300 w-1/3">Visit</button>
            <button onClick={handleUpvote} className="bg-red-500 text-white rounded px-10 py-4 w-2/3 hover:bg-red-600">UPVOTE {upvoteCount}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

