import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Contact = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Contact Us</title>
    </Helmet>
    <h1>Contact Us</h1>
    <p>
To reach Sadaath Foundation: <a href = "mailto: sadaathf@gmail.com">sadaathf@gmail.com</a>
    </p>
  </PageWrapper>
);

export default Contact;
