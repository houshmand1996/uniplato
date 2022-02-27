/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React  from 'react';
import { CustomButtonContainer, CustomButtonSpinner } from './custom-button.styles';


interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  loading?:boolean,
  round?:boolean,
}

export const CustomButton = ({ children, ...props }:Props) => (
  <CustomButtonContainer {...props}>
    {props.loading ? <CustomButtonSpinner /> : null}
    {children}
  </CustomButtonContainer>
);
