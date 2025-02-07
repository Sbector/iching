import Link from "next/link"

export default function AboutPage() {
    return (
        <div>
            <h1 className="title">About</h1>
            <p>
                This is an online tool that will help you to ask questions to the book of changes <i>I ching</i>.
            </p>
            <br />
            <h2 className="subtitle">But what is <i>I ching</i>?</h2>
            <p>I ching, is an ancient Chinese divination text. The term <i>I ching</i> means <i>book of changes</i>.
                The original text was augmented during Zhou dinasty and later commented by confucian school but
                its origin is taoist.
                <br />
                It is belived that it describes the present situation of the consultant and gives advice to the best
                position for the future.
            </p>
            <br />
            <h2 className="subtitle">How can I use this tool?</h2>
            <p>This tool is concieved to help you in your first approach to the book. So first of all
                you need to have the book.
                <br />
                Once you have the book on your hands or your screen, you can go to the <Link className="text-green-600" href="./instructions">instructions</Link> and
                click on the &quot;I have a question&quot; button.
            </p>
        </div>
    )
}