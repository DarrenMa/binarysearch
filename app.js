const { log } = require('@rama41222/node-logger');
const prompt = require('prompt-sync')();

const logger = log({ console: true, file: false, label: 'binarysearch' });

let binaryTries = 0;

const binarySearch = (array, target) => {
  // Define Start + End Index
  let startIndex = 0;
  let endIndex = array.length - 1;

  // While Start Index Is Less Than Or Equal To End Index
  while (startIndex <= endIndex) {
    binaryTries += 1;

    // Define Middle Index (This Will Change When Comparing )
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    // Compare Middle Index With Target For Match
    if (array[middleIndex] === target) {
      return logger.info(`Target was found at index ${middleIndex} with ${binaryTries} attempts.`);
    }

    // Search Right Side Of Array
    if (target > array[middleIndex]) {
      logger.info('Searching the right side of Array');
      // Assign Start Index And Increase The Index By 1 To Narrow Search
      startIndex = middleIndex + 1;
    }

    // Search Left Side Of Array
    if (target < array[middleIndex]) {
      // Assign End Index And Increase The Index By 1 To Narrow Search
      logger.info('Searching the left side of array');
      endIndex = middleIndex - 1;
    } else {
      // Not Found In This Iteration
      logger.info('Not Found this loop. Looping again.');
    }
  }

  // If Target Is Not Found
  logger.info('Target value not found in array');
};

async function run() {
  try {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
      53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    logger.info(`Possible values are ${primes}`);

    const target = Number(prompt('What number do you want to find?'));
    logger.info('start');

    logger.info(`primes array has ${primes.length} records`);

    let linearTries = 0;
    // find target linear
    logger.info(`Find ${target} using linear search`);
    // eslint-disable-next-line no-restricted-syntax
    for (const prime of primes) {
      linearTries += 1;
      if (prime === target) {
        logger.info(`took ${linearTries} searches to find ${target}`);
        break;
      }
    }

    // find 67 using binary search
    logger.info(`Find ${target} using binary search`);
    binarySearch(primes, target);
    logger.info('end binary search');
  } catch (error) {
    logger.error(error.message);
  }
  logger.info('end');
}

run();
