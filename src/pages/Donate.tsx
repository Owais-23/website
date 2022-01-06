import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  ElixirLogo,
  ReactLogo,
  RustLogo,
  SolidityLogo,
  TypescriptLogo,
  ZelleLogo,
} from '../components/Icons';
import Zelle from '../assets/images/grocery-basket.png'
import { Helmet } from 'react-helmet';

const Donate = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>How</title>
      </Helmet>
      <h1>Donate</h1>
      <p>
        There are several payment methods you may use to donate to Sadaath Foundation, you will recieve a confirmation text after donating.
      </p>
      <Technology
        color="#7F33FF"
        icon={<ZelleLogo />}
        payment="Zelle"
        address="sadaathf@gmail.com"
        info={'You will recieve a text message confirming your donation within 24 hours.'}
      />
    </PageWrapper>
  );
};

export default Donate;
