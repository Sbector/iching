import Button from "./components/Button"

export default function HomePage() {
  return (
    <div className="grid h-80 place-content-center">
      <div>
        <h1 className="text-4xl mb-4">Welcome!</h1>
      </div>
      <p className="text-xl mb-5">Do you have a question for the i ching?</p>
      <div className="mx-auto">
        <a href="./consult">
          <Button>I have a question</Button>
        </a>
        <a href="./about">
        <Button>What is iching?</Button>
        </a>
      </div>
    </div>
  )
}
