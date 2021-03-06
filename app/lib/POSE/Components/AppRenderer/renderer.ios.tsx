import * as React from "react";
import {Container, Header, Content, Title} from "native-base";
import FacebookSdk = require("../Presentation/SocialMedia/Facebook/FacebookSdk");
import LinkedInSdk = require("../Presentation/SocialMedia/LinkedIn/LinkedInSdk");
import Poser from "../Presentation/Poser";
import Navigation from "../Routing/NativeNavigation";
export default renderer;
export function renderer(props) {
  return (<Container>
      <Header>
          <Title>POSE</Title>
      </Header>
      <Content>
          <Poser></Poser>
           </Content>
  </Container>);
 // <Navigation></Navigation>
};
