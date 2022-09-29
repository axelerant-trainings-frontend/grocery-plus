import React from "react"
import headingType from "../@types/heading.types"
import textType from "../@types/text.types"
import Heading from "../components/heading/Heading"
import Text from "../components/text/Text"

function testingcomponents() {
  const heading = {
    title: "This is heading text",
    variant: "small",
    extraClasses: "text-red-900",
  } as headingType
  const bodytext = {
    title: "This is body text",
    variant: "large",
    extraClasses: "text-blue-200",
  } as textType
  return (
    <>
      <Heading {...heading} />
      <Text {...bodytext} />
    </>
  )
}

export default testingcomponents
