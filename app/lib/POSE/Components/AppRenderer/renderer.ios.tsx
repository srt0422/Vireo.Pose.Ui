import React = require("react");
import {Container, Header, Content, Title} from "native-base";
import FacebookSdk = require("../Presentation/SocialMedia/Facebook/FacebookSdk");
import LinkedInSdk = require("../Presentation/SocialMedia/LinkedIn/LinkedInSdk");
import Poser from "../Presentation/Poser";

export = function(props) {
  return (
    <Container>
        <FacebookSdk appId="764673526884567"></FacebookSdk>
        {/*<LinkedInSdk apiKey="75v5vlraic1sa6"></LinkedInSdk>*/}
        <Header>
            <Title>POSE</Title>
        </Header>
        <Content>
            <Poser></Poser>
            {/* <Navigation></Navigation> */}
        </Content>
    </Container>
  );
};
