import Button from "../components/Button"
import Link from "next/link"

export default function Instructions() {
    return (
        <div className="text-left">
            <h1 className="text-4xl mb-4">Instructions</h1>

            <h2 className="text-xl mb-2">Prepare your question</h2>
            <p>
                You can ask what ever you want to the <i>I ching</i> but you must know that it is convenient to think
                a real question. You may have to take a time to think what is that you really want to know abot your
                present situation or your future scenaries.
            </p><br />
            <h2 className="text-xl mb-2">Thow coins</h2>
            <p>
                Once you have your question ready, you have to throw 6 rounds of three coins. This app, will help you
                to make it virtually.
            </p>
            <Link href="./consult">
                <Button>Toss coins</Button>
            </Link>
        </div>
    )
}