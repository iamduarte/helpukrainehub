import React, { useState } from "react";

export default function AddCampaignForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    image: "",
    logoBackground: "#FFFFFF",
    link: "",
    email: "",
    tags: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //POST request to API with formData
    const res = await fetch("/api/v1/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Process formData as needed
    console.log(JSON.stringify(formData));
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-400 p-6 rounded-md shadow-xl text-black">
      <h2 className="text-2xl font-semibold mb-4">Campaign Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Campaign Name:
          </label>
          <input
            placeholder="Example Name"
            required
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="location">
            Location:
          </label>
          <input
            placeholder="City name, if not applicable type Online"
            required
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="link">
            Campaign URL:
          </label>
          <input
            placeholder="https://example.com"
            required
            type="url"
            name="link"
            id="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="image">
            Image Link:
          </label>
          <input
            placeholder="https://example.com/image.png (Optional)"
            type="url"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Campaign Email:
          </label>
          <input
            placeholder="example@example.com (Optional)"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            placeholder="Example description (Optional)"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md h-20"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-700 text-yellow-300 p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
