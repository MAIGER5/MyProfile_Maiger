import React from 'react'
import { CardStudy } from './CardStudy'
import { CardExperience } from './CardExperience'

export const B_CardEducationExp = () => {
  return (
    <div className="row border border-0 px-4">
      <CardStudy/>
      <CardExperience/>
    </div>
  )
}
