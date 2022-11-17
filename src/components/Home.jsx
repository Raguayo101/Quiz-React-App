import React from "react";

export default function Home(props) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-7xl text-[#293264]">Quizzical</h1>
      <p className="my-3 text-[#293264]">Lets get our trivia going!</p>

      <div className="flex justify-center items-center">
        <h1 className="font-bold text-bluee text-xl">Category</h1>
        <select
          name="category"
          id="category"
          className="border border-bluee rounded-lg p-2 text-bluee cursor-pointer mx-11 w-80"
          value={props.options.category}
          onChange={(e) => props.handleChange(e.target)}
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
      </div>

      <div className="flex justify-center items-center	my-11">
        <h1 className="font-bold text-bluee text-xl">Difficulty</h1>
        <select
          name="difficulty"
          id="difficulty"
          className="border border-bluee rounded-lg p-2 text-bluee cursor-pointer mx-11 w-80"
          value={props.options.difficulty}
          onChange={(e) => props.handleChange(e.target)}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-bluee text-xl mr-9">Type of question</h1>
        <select
          name="type"
          id="type"
          className="border border-bluee rounded-lg p-2 text-bluee cursor-pointer mr-24 w-80"
          value={props.options.type}
          onChange={(e) => props.handleChange(e.target)}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
      </div>

      <button
        onClick={props.toggle}
        className="mt-6 text-white bg-bluee rounded-lg p-3 w-48"
      >
        Stat quiz
      </button>
    </div>
  );
}
