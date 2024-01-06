import React from 'react'

export default function AboutSection() {
  return (
    <section class='absolute top-40 right-0 w-96 text-white'>
      <h2 class='text-7xl'>En Pointe with Tradition and Talent</h2>
      <p class='my-8'>Balletique blends tradition with raw talent, shaping dancers into graceful performers who captivate hearts and minds.</p>
      <div class='flex justify-between items-center gap-4'>
        <button class='bg-white text-black rounded-3xl w-full py-3 hover:bg-gray-200'>Learn More</button>
        <button class='bg-black text-white rounded-3xl w-full py-3 hover:bg-gray-800'>Recent Recital</button>
      </div>
    </section>
  )
}
