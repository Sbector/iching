import Button from "./components/Button"

export default function HomePage() {
  return (
    <div>
      <div>
        <h1 className="text-xl">Whelcome to <span>iching</span>!</h1>
      </div>
      <div>
        <p>Do you have a question for the iching?</p>
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
