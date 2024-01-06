import React from 'react'

export default function Link({ text, link }) {
  return (
    <a class='hover:opacity-75' href={link}>{text}</a>
  )
}
