import CoinToss from "../components/CoinToss";
import Question from "../components/Question";

export default function Consult() {
    return (
        <section className="text-center">
            <h1 className="text-4xl m-10">Let make a consult!</h1>
            <Question />
            <div>
                <CoinToss />
            </div>
        </section>
    )
}