import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  padding: 2.5rem;
  margin: 5rem auto;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  height: calc(100vh - 10rem);
  background: ${(props) => props.theme['gray-800']};
`
