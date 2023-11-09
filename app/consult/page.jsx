import CoinToss from "../components/CoinToss";
import Question from "../components/Question";

export default function Consult() {
    return(
        <div>
            <h1>Let make a consult!</h1>
            <Question/>
            <div>
                <CoinToss/>
                <CoinToss/>
                <CoinToss/>
                <CoinToss/>
                <CoinToss/>
                <CoinToss/>
            </div>
        </div>
    )
}