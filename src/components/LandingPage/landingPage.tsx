import React, { FC } from 'react';
import KashyIntroduction from './kashyIntroduction';
import QuotingForm from './quotingForm';

const ContentHero: FC = () => {
  return (
    <div>
      <KashyIntroduction />
      <QuotingForm />
    </div>
  );
}

export default ContentHero;
