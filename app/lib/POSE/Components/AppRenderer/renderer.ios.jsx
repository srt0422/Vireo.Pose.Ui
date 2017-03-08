import * as React from "react";
import { Container, Header, Content, Title } from "native-base";
import Poser from "../Presentation/Poser";
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
}
;
