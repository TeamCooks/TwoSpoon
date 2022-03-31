import styled from '@emotion/styled';

export const StyledP = styled.p`
  background: rgba(36, 36, 36, 0.8);
  backdrop-filter: blur(2px);
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  padding: 10px 30px;
  border-radius: 15px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  word-break: break-all;
  text-align: center;
`;
