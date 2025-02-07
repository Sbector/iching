import Button from "./_components/Button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="title">Welcome!</h1>
      <h2 className="subtitle">Do you have a question for the I ching?</h2>
      <div className="mx-auto">
        <Link href="./consult">
          <Button>I have a question</Button>
        </Link>
        <Link href="./about">
          <Button>What is iching?</Button>
        </Link>
      </div>
    </div>
  )
}
