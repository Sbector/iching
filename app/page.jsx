import Button from "./components/Button"
import Link from "next/link"

export default function HomePage() {
  return (
    <section className="text-center place-self-center">
      <div>
        <h1 className="text-4xl mb-4">Welcome!</h1>
        <p className="text-xl mb-5">Do you have a question for the i ching?</p>
      </div>
      <div className="mx-auto">
       <Link href="./consult">
       <Button>I have a question</Button>
       </Link>
       <Link href="./about">
       <Button>What is iching?</Button>
       </Link>
      </div>
    </section>
  )
}
