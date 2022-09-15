import styled from "styled-components";

export const Container = styled.div`
  animation-duration: 0.5s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100px;
    }

    to {
      margin-left: 0%;
    }
  }
  background: var(--grey-4);
  width: 80%;
`;

export const UserDescription = styled.div`
  height: 118px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
`;

export const TechContainer = styled.div`
  margin-top: 10px;
  transition: 0.5s;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-3);
  border-radius: 4px;
  padding: 22px 19px;
  padding: 0.8rem;
`;

export const TechHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
`;
