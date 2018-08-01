// @flow

import figlet from 'figlet';
import program from 'commander';
import chalk from 'chalk';
import clear from 'clear';
import { arrived } from './actions';

clear();

console.log(chalk.blueBright(figlet.textSync(' -- Labor-Time -- ')));

// labor arrived
program
  .arguments('<cmd> [timeAgo]')
  .command('arrived', {isDefault: true})
  .description('Labor just arrived to work')
  .alias('a')
  .action(arrived);

program.parse(process.argv);

if (!program.args.length) program.help();