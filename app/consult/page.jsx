import CoinToss from "../_components/CoinToss";

export default function Consult() {
    return (
        <div>
            <h1 className="title">Let consult the I ching!</h1>
            <label htmlFor="question" className="">Enter your question </label><br />
            <textarea id="question" type="text" name="question" className="min-w-full bg-gray-200 dark:bg-gray-300 dark:text-black" />
            <div>
                <CoinToss />
            </div>
        </div>

    )
}