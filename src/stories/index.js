import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import RMBlockquote from '../components/RMBlockquote';
import RMButton from '../components/RMButton';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('RMButton', module)
  .add('button', () => <RMButton onClick={action('clicked')}>Click me</RMButton>)
  .add('button outline', () => <RMButton isOutline onClick={action('clicked')}>Click me</RMButton>)
  .add('button clear', () => <RMButton isClear onClick={action('clicked')}>Click me</RMButton>)


storiesOf('RMBlockquote', module)
  .add('plain text', () => <RMBlockquote>Awesome blockquote</RMBlockquote>);


