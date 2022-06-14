import styled from "@emotion/styled";

const TopicElement = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  align-items: baseline;
  grid-template-columns: 2fr 1fr;
  background: white;
  text-transform: capitalize;
  outline: none !important;

  .topic-name {
      margin: 1rem 0;
  }

  h2 {
    display: inline;
    padding-bottom: 0.1em;
    text-decoration: none;
    background-image: linear-gradient(black, black);
    background-size: 0 1px;
    background-position: 0 96%;
    background-repeat: no-repeat;
    transition: 0.25s ease;
  }

  &:focus,
  &:hover {
      cursor: pointer;
      h2 {
		background-size: 100% 1px;
      }
  }

  h5 {
      margin: 0;
      text-align: right;
  }
	
`;

export { TopicElement };
