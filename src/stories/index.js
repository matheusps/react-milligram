import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Paragraph, Heading, Anchor, Emphasis, Small, Strong, Underline } from '../components/RMTypography';
import RMBlockquote from '../components/RMBlockquote';
import RMButton from '../components/RMButton';

storiesOf('RMTypography', module)
  .add('paragraph', () => <Paragraph> This is a paragraph </Paragraph>)
  .add('heading', () => (
    <div>
      <Heading size={1}> Heading 1 </Heading>
      <Heading size={2}> Heading 2 </Heading>
      <Heading size={3}> Heading 3 </Heading>
      <Heading size={4}> Heading 4 </Heading>
      <Heading size={5}> Heading 5 </Heading>
      <Heading size={6}> Heading 6 </Heading>
    </div>
  ))
  .add('anchor', () => <Anchor href={'https://github.com/matheusps'} target='blank'> This is an anchor </Anchor>)
  .add('emphasis', () => <Emphasis> This is an emphasis </Emphasis>)
  .add('small', () => <Small> This is small </Small>)
  .add('strong', () => <Strong> This is strong </Strong>)
  .add('underline', () => <Underline> This is underlined </Underline>);


storiesOf('RMButton', module)
  .add('button', () => <RMButton onClick={action('clicked')}>Click me</RMButton>)
  .add('button outline', () => <RMButton isOutline onClick={action('clicked')}>Click me</RMButton>)
  .add('button clear', () => <RMButton isClear onClick={action('clicked')}>Click me</RMButton>)


storiesOf('RMBlockquote', module)
  .add('plain text', () => <RMBlockquote>Awesome blockquote</RMBlockquote>);


