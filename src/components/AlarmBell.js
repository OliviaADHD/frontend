import React from "react";
import {Colors} from "../css/general/style";
import {ExternalContainer, ContainerView, BellImage, RoundNumber, RoundView} from "../css/components/alarm"

class AlarmBell extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ExternalContainer>
                <ContainerView>
                    <BellImage
                        source={require('../../assets/images/Bell.png')}
                        resizeMode="contain">
                        {this.props.showAlarm && <RoundView>
                            <RoundNumber>{this.props.alarmNumber}</RoundNumber>
                        </RoundView>
                        }
                    </BellImage>
                </ContainerView>
            </ExternalContainer>
        );
    }
}

export default AlarmBell;