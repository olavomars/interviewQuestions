import { CurrencyConverter } from './services/CurrencyConverter.js';

const BASE_CURRENCY = "usd";
const TARGET_CURRENCY = "brl";
const VALUE_TO_CONVERT = 2000;

const currencyService = new CurrencyConverter(BASE_CURRENCY);
const converted = currencyService.convert(VALUE_TO_CONVERT, TARGET_CURRENCY);

console.log(
  VALUE_TO_CONVERT,
  BASE_CURRENCY.toUpperCase(),
  " == ",
  await converted,
  TARGET_CURRENCY.toUpperCase());

