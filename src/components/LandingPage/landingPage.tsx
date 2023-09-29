import React, { FC } from 'react';
import KashyIntroduction from './kashyIntroduction';
import QuotingForm from './quotingForm';

const LandingPage: FC = () => {
  return (
    <div className='hero'>
      <KashyIntroduction />
      <QuotingForm />
    </div>
  );
}

export default LandingPage;
