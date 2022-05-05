import styled from "@emotion/styled";

const Number = styled.span`
  padding-left: 4px;
`;


export const NumberOfTurns = ({ numberOfTurns }) => {
  return (
    <div>
      <p>
        Number of turns:<Number>{numberOfTurns}</Number>
      </p>
    </div>
  );
};

