import React from "react";
import Button from "./Button";

function Form() {
  return (
    <form name="apply" method="post" netlify="true">
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xl text-darkGray" htmlFor="full-name">
            Full Name
          </label>
          <input
            placeholder="John Smith"
            id="full-name"
            type="text"
            name="fullname"
            className="w-full rounded-md px-4 py-2 text-base focus:outline-none focus:ring focus:ring-primaryTransparent sm:text-lg"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xl text-darkGray" htmlFor="email">
            Email Address
          </label>
          <input
            placeholder="name@gmail.com"
            id="email"
            type="email"
            name="email"
            className="w-full rounded-md px-4 py-2 text-base focus:outline-none focus:ring focus:ring-primaryTransparent sm:text-lg"
            required
          />
        </div>

        <div className="space-y-2 lg:col-span-2">
          <label className="block text-xl text-darkGray" htmlFor="comment">
            Comment
          </label>
          <textarea
            placeholder="Leave youe comment here.."
            id="comment"
            name="comment"
            className="w-full rounded-md px-4 py-2 text-base focus:outline-none focus:ring focus:ring-primaryTransparent sm:text-lg"
            required
          ></textarea>
        </div>
      </div>

      <Button type="submit">Submit now</Button>
    </form>
  );
}

export default Form;
