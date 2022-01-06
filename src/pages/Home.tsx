import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';


const Home = () => {
  return (
    <PageWrapper forceReadableWidth>
      <h1>Our Mission</h1>
      <p>
        <b>Sadaath Foundation</b> is a charitable trust based in America that provides aid to those who are in need.
      </p>
      <p>
       We are currently helping out the less fortunate in <b>Hyderabad, India</b>. 
      </p>

      <p>
        By Providing:

      <ul>
        - Groceries (High Quality Rice, Fruits, Vegetables, etc.)
        </ul>
        <ul>
        - Educational Aid (Backpacks, Computers, Uniforms, & Breakfast)
        </ul>
        <ul>
          - Marital Services (Wedding Expenses, Catering,)
        </ul>

      </p>

      <p>
        In the future, as <b>Sadaath Foundation</b> grows, we will expand to more cities InshAllah.
      </p>

      <h3>Our Team</h3>
      <p>
       The Board Members of <b>Sadaath Foundation</b> are.... (insert info later)
      </p>
    </PageWrapper>
  );
};

export default Home;
