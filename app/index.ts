#!/usr/bin/env node
import * as yargs from 'yargs';

let args = yargs
  .option('input', {
    alias: 'i',
    demand: true,
  })
  .option('year', {
    alias: 'y',
    description: 'Year number',
    demand: true,
  }).argv;

console.log(JSON.stringify(args));
