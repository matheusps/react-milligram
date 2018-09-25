import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RMBlockquote from '../components/RMBlockquote';
import RMButton from '../components/RMButton';

storiesOf('RMButton', module)
  .add('button', () => <RMButton onClick={action('clicked')}>Click me</RMButton>)
  .add('button outline', () => <RMButton isOutline onClick={action('clicked')}>Click me</RMButton>)
  .add('button clear', () => <RMButton isClear onClick={action('clicked')}>Click me</RMButton>)


storiesOf('RMBlockquote', module)
  .add('plain text', () => <RMBlockquote>Awesome blockquote</RMBlockquote>);


