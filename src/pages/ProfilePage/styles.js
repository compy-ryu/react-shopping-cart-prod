import styled from '@emotion/styled/macro';

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 5rem auto;
`;

const Container = styled.form`
  width: 100%;
`;

const InlineField = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 75% 22%;
  gap: 3%;
`;

export { PageContent, Container, InlineField };
