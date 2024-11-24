import CoinToss from "../_components/CoinToss";
import ContentWrapper from "../_components/ContentWrapper";
import Question from "../_components/Question";

export default function Consult() {
    return (
        <ContentWrapper className="">
            <h1 className="title">Let consult the I ching!</h1>
            <Question />
            <div>
                <CoinToss />
            </div>
        </ContentWrapper>
    )
}