import styled from 'styled-components';

const HeaderWrapper = styled.div
`
  background-color: #8dc6ff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const Title = styled.h1
`
  height: 64px;
  pointer-events: none;
`

function Header() {
  return (
    <HeaderWrapper>
      <Title>Project Management Board</Title>
    </HeaderWrapper>
  )
}

export default Header;