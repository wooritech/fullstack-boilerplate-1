/**
 * Copyright (c) Wooritech, Inc.
 */

import { createContext, useContext } from 'react';

export const LocationContext = createContext(null);

export const useLocation = () => {
  return useContext(LocationContext);
};
