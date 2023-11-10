import CoinToss from "../components/CoinToss";
import Question from "../components/Question";

export default function Consult() {
    return(
        <div>
            <h1 className="text-xl mb-6">Let make a consult!</h1>
            <Question/>
            <div>
                <CoinToss/>
                
            </div>
        </div>
    )
}