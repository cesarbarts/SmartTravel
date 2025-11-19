//https://latest.currency-api.pages.dev/v1/currencies/eur.json

import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://latest.currency-api.pages.dev/v1/currencies/',
});

export default api;
