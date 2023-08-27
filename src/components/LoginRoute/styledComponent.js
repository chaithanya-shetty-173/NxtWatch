import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 100vh;
  background-color: ${props => (props.isDark ? ' #424242' : '#ffffff')};
`

export const FormContainer = styled.form`
  padding: 15px;
  min-width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props => (props.isDark ? null : '0px 4px 16px 0px #bfbfbf')};
  border-radius: 8px;
  @media (min-width: 768px) {
    min-width: 400px;
  }
`
export const Logo = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#7e858e')};
`
export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: 2px solid ${props => (props.isDark ? '#383838' : '#e2e8f0')};
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'Roboto';
  outline: none;
  color: ${props => (props.isDark ? '#f9f9f9' : null)};
  background-color: ${props => (props.isDark ? 'transparent' : null)};
`
export const ShowInput = styled.input`
  margin-right: 5px;
  height: 15px;
  width: 15px;
`
export const ShowLabel = styled.label`
  font-size: 15px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-weight: 500;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`
export const LoginButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background-color: #3b82f6;
  padding: 7px;
  outline: none;
  color: #ffffff
  font-weight: bold;
  border: none;
  margin-top: 19px;
  font-family: 'Roboto';
  text-align: center;
`
export const ErrorText = styled.div`
  color: ${props => (props.isDark ? '#ff0000' : '#ff0b37')};
  font-family: 'Roboto';
  font-weight: 400;
  align-self: flex-start;
  font-size: 12px;
  margin-top: 5px;
`
