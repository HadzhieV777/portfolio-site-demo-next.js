import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>I am highly motivated person,always willing to learn new skills. Seeking to advance my growing tech career as a Software Developer and bringing my trouble shooting skills to engineer responsive solutions.</SectionText>
    <Button onClick={() => window.location = 'https://github.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;