import {LoadingContainer, LoadingText} from "components/Loading/styled";
import {BgBottom, BgTop} from "assets/style/style";

const Loading = ({show}) => {
    return (
        <LoadingContainer className={!show ? 'none' : ''}>
            <BgTop primary/>
            <BgBottom/>
            <LoadingText>
                <span>S</span>
                <span>A</span>
                <span>D</span>
                <span>E</span>
            </LoadingText>
        </LoadingContainer>
    )
}

export default Loading;
