/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React from 'react';

import { Forms } from '../../../../shared_imports';
import { WizardContent } from '../template_form';
import { StepSettings } from './step_settings';

export const StepSettingsContainer = React.memo(() => {
  const { defaultValue, updateContent } = Forms.useContent<WizardContent>('settings');

  return <StepSettings defaultValue={defaultValue} onChange={updateContent} />;
});
