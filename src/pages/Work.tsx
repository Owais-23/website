import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import BorwellIcon from '../assets/images/borwell-image.png';
import GroceriesAppIcon from '../assets/images/grocery-basket.png';
import DatesIcon from '../assets/images/dates.png';
import Repo from '../components/Repo';
import { Helmet } from 'react-helmet';

const Work = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Our Work</title>
      </Helmet>
      <h1>Our Work</h1>
      <h3>Projects</h3>
      <CoWrapper>
        <Co
          url =''
          name="Borwell"
          iconReference={BorwellIcon}
          tagline="Hyderabad, India"
          what={'Borwell Drilling'}
          impact={'After raising $2,200 for this project, a borewell was constructed in a village to provide clean water to those who previously did not have access.'}
        />
        <Co
          url=""
          name="Groceries"
          iconReference={GroceriesAppIcon}
          tagline="Hyderabad, India"
          what={'Distributing food to low income families. Groceries consist of high quality rice, fruits, vegetables, and other essential produce'}
          impact={'50 families per month recieve groceries from our team on the ground. We are hoping to increase the number of families! إن شاء الله'}
        />
        <Co
          url=""
          name="Ramadan"
          iconReference={DatesIcon}
          tagline="Hyderabad, India"
          what={'During the month of Ramadan, we distributed food for iftaar. '}
          impact={'In total, we provided iftaar for 200 people.'}
        />
      </CoWrapper>

      <h3>Twitter Feed</h3>
      <Repo
        name={'lanyard'}
        url={'https://github.com/phineas/lanyard'}
        primaryLanguage={'Elixir'}
        description="Expose your Discord presence to an API in <10 seconds (used on this site)"
      />
    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Work;
