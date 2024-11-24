import Button from "../_components/Button"
import Link from "next/link"
import ContentWrapper from "../_components/ContentWrapper"

export default function Instructions() {
    return (
        <ContentWrapper className="">
            <h1 className="title">Instructions</h1>

            <h2 className="subtitle">Prepare your question</h2>
            <p>
                You can ask what ever you want to the <i>I ching</i> but you must know that it is convenient to think
                a real question. You may have to take a time to think what is that you really want to know abot your
                present situation or your future scenaries.
            </p><br />
            <h2 className="subtitle">Thow coins</h2>
            <p>
                Once you have your question ready, you have to throw 6 rounds of three coins. This app, will help you
                to make it virtually.
            </p>
            <Link href="./consult">
                <Button>Toss coins</Button>
            </Link>
        </ContentWrapper>
    )
}