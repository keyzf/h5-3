import React from 'react';
import { FormUi } from '../../routes/components';
import {
  $$one_form_database,
  $$three_form_database,
  $$two_form_database,
} from './form.db';

export const formData = [
  {
    template: <FormUi data={$$one_form_database} pointer={true} />,
    data: $$one_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$two_form_database} />,
    data: $$two_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$three_form_database} />,
    data: $$three_form_database,
  },
];
