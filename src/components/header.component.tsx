import { Nav, PageTitle } from './header.styles';

export const Header = () => {
  return (
    <section style={{ backgroundColor: 'dodgerblue', padding: '1rem 2rem', display: 'flex' }}>
      <PageTitle>
        <h1>Dashboard view</h1>
      </PageTitle>
      <Nav>&nbsp;</Nav>
    </section>
  );
};
