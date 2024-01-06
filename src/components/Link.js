import React from 'react'

export default function Link({ text, link }) {
  return (
    <a class='p-2 hover:opacity-75' href={link}>{text}</a>
  )
}
