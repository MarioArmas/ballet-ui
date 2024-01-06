import React from 'react'
import Link from '../components/Link'

export default function Navbar() {
  return (
    <navbar class='text-white text-lg flex justify-between py-5'>
      <div class='flex justify-evenly items-center gap-x-14'>
        <h1 class='text-white text-3xl'>Balletique</h1>
        <Link link={"#"} text={"About"} />
        <Link link={"#"} text={"Classes"} />
        <Link link={"#"} text={"Schedule"} />
        <Link link={"#"} text={"Contact"} />
      </div>
      <button class='bg-black px-8 py-1 m-2 mr-0 border border-white rounded-3xl hover:bg-gray-800'>Register</button>
    </navbar>
  )
}