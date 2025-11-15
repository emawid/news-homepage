import { featured, news, teasers } from './data/fixtures.js';
import SiteHeader from './components/layout/SiteHeader.jsx';
import SiteFooter from './components/layout/SiteFooter.jsx';
import Container from './components/layout/Container.jsx';
import Grid from './components/layout/Grid.jsx';
import HeroFeatured from './components/home/HeroFeatured.jsx';
import NewSidebar from './components/home/NewSidebar/NewSidebar.jsx';
import NewList from './components/home/NewSidebar/NewList.jsx';
import TeaserGrid from './components/home/TeaserGrid/TeaserGrid.jsx';

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container>
          <Grid area="hero+sidebar">
            <HeroFeatured article={featured} />
            <NewSidebar>
              <NewList items={news} />
            </NewSidebar>
          </Grid>
          <Grid area="teasers">
            <TeaserGrid items={teasers} />
          </Grid>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
