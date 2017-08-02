import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Brand from './index';

storiesOf('Brand', module)
  .add('default', () => (
    <Brand />
  ));
