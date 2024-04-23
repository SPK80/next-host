import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const Button = dynamic(() => import("remote/Button"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Input = dynamic(() => import("remote/Input"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const StyledWrap = styled.div`
  color: blue;
  button {
    color: red;
  }
`;

export default function Home() {
  return (
    <StyledWrap>
      <h1>Host</h1>
      <Button>button</Button>
      <Input />
    </StyledWrap>
  );
}
