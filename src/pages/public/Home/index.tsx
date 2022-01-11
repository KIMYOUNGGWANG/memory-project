import React from "react";

import styled from "styled-components";

const LoginPage: React.FC = () => {
  return (
    <Container>
      <LoginSection>
      <LoginForm>
        
      </LoginForm>
        
      </LoginSection>
    </Container>
  );
};

export default LoginPage;

const LoginForm = styled.form`
  width:400px;
`;

const LoginSection = styled.div`
  height: 500px;
  background: red;
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
