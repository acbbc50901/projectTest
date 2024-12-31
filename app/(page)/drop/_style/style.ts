import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  .box {
    display: flex;
    gap: 20px;
    flex-direction: column;

    .row {
      display: flex;
      gap: 20px;
    }
  }
`