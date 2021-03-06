import React from 'react';
import Aside from '../components/aside';
import Nav from '../components/nav';
import Main from '../components/main';
import Masthead from '../components/masthead';
import Prose from '../components/prose';
import Wrapper from '../components/wrapper';
import Heading from '../components/heading';

const Container = (props) => {
  return (
    <Wrapper>
      <Masthead />
      <Main>
        <Nav />
        <Heading title={props.title} />
        <Prose innerHTML={props.body} />
      </Main>
      <Aside articles={props.latest} />
    </Wrapper>
  );
};

export default Container;
