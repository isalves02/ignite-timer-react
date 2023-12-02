import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 3.5rem;
  }
`

export const BaseCountDownButton = styled.button`
  border: 0;
  width: 100%;
  padding: 1rem;
  font-weight: bold;

  cursor: pointer;
  border-radius: 8px;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.15s background-color;
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
