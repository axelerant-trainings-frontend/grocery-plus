import React from "react"
import textType from "../../@types/text.types"

function Text({ title, variant, extraClasses }: textType) {
  let classes = ""
  if (variant == "small") {
    classes = "font-normal text-md leading-xs"
  }
  if (variant == "medium") {
    classes = "font-normal text-lg leading-sm"
  }
  if (variant == "large") {
    classes = "font-normal text-xl leading-lg"
  }
  if (variant == "Xlarge") {
    classes = "font-normal text-2xl leading-xl"
  }
  if (variant == "small-bold") {
    classes = "font-bold text-md leading-xs"
  }
  if (variant == "medium-bold") {
    classes = "font-bold text-lg leading-sm"
  }
  if (variant == "large-bold") {
    classes = "font-bold text-xl leading-lg"
  }
  if (variant == "Xlarge-bold") {
    classes = "font-bold text-2xl leading-xl"
  }
  return <p className={classes + " " + extraClasses}>{title}</p>
}

export default Text
