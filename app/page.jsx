import Button from "./_components/Button"
import Link from "next/link"
import ContentWrapper from "./_components/ContentWrapper"

export default function HomePage() {
  return (
    <ContentWrapper className="justify-center mt-[-100px]">
      <div>
        <h1 className="title">Welcome!</h1>
        <h2 className="subtitle">Do you have a question for the I ching?</h2>
      </div>
      <div className="mx-auto">
       <Link href="./consult">
       <Button>I have a question</Button>
       </Link>
       <Link href="./about">
       <Button>What is iching?</Button>
       </Link>
      </div>
    </ContentWrapper>
  )
}
