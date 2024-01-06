import React from 'react'
import CustomButton from '../components/CustomButton'

export default function ButtonSection() {
  return (
    <section class='flex-row justify-evenly text-white w-80 text-xl absolute bottom-1/4'>
      <CustomButton text={'Beginner Classes'} />
      <CustomButton text={'Intermediate Ballet'} />
      <CustomButton text={'Contemporary Fusion'} />
    </section>
  )
}
