import { set } from "mongoose";
import React, { useState, useEffect } from "react";

export default function FilterCampaign({ passedTags }) {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  //if passedTags is not empty, set selectedTags to passedTags
  useEffect(() => {
    if (passedTags && passedTags.length > 0) {
      setSelectedTags(passedTags);
    }
  }, [passedTags]);

  //get all campaigns from API, create an array of non repeated tags from all campaigns, console.log the array
  const getTags = async () => {
    const res = await fetch("/api/v1/campaigns");
    const campaigns = await res.json();
    const tags = campaigns.map((campaign) => campaign.tags);
    //convert the array of arrays tags into a single array of non repeated tags and whitout empty strings
    const nonRepeatedTags = [...new Set(tags.flat())];
    // exclude empty strings from the array
    const nonEmptyTags = nonRepeatedTags.filter((tag) => tag !== "");
    //sort the array alphabetically
    nonEmptyTags.sort();
    setTags(nonEmptyTags);
  };

  useEffect(() => {
    getTags();
  }, []);

  const handleTagClick = (tag) => {
    //if tag is already selected, remove it from the array
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
      return;
    }
    setSelectedTags([...selectedTags, tag]);
  };

  const handleSearch = () => {
    //navigate to /campaigns/tag=selectedTags[0]&tag=selectedTags[1]&tag=selectedTags[2]
    const query = selectedTags.join("&tag=");
    window.location.href = `/campaigns/tag=${query}`;
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body flex lg:flex-row lg:justify-evenly  items-center flex-col">
        <h2 className="card-title text-black">Filter by:</h2>
        <div>
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <button
                key={index}
                className={`btn m-1 rounded-full scale-75 ${
                  selectedTags.includes(tag)
                    ? "border-blue-700 bg-blue-700 text-yellow-300 hover:text-gray-700"
                    : "border-gray-700 bg-gray-100 text-gray-700 hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))
          ) : (
            <p>No tags available.</p>
          )}
        </div>
        <button
          className="btn bg-blue-700 text-yellow-300 w-full md:w-fit"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
