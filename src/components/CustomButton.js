import React from 'react'

export default function CustomButton({ text }) {
  return (
    <div class='flex items-center justify-between w-full border-b-2 py-2 mt-2'>
      <p>{text}</p>
      <button class='bg-black px-5 m-2 border border-white rounded-3xl hover:bg-gray-800'>
        <p class='mb-1'>
          &#8594;
        </p>
      </button>
    </div>
  )
}
