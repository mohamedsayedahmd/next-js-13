"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
