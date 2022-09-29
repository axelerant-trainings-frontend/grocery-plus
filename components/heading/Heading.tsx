import React from "react"
import headingType from "../../@types/heading.types"

function Heading({ title, variant, extraClasses }: headingType) {
  let classes = ""
  if (variant == "small") {
    classes = "font-normal text-3xl leading-2xl" //16px
  }
  if (variant == "medium") {
    classes = "font-normal text-4xl leading-3xl" //20-30
  }
  if (variant == "large") {
    classes = "font-normal text-5xl leading-4xl" //30-44
  }
  if (variant == "small-bold") {
    classes = "font-bold text-3xl leading-2xl" //16px
  }
  if (variant == "medium-bold") {
    classes = "font-bold text-4xl leading-3xl" //20-30
  }
  if (variant == "large-bold") {
    classes = "font-bold text-5xl leading-4xl" //30-44
  }
  return <p className={classes + " " + extraClasses}>{title}</p>
}

export default Heading
