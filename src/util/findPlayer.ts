import {roster} from '../roster';

export const findPlayer = (firstName: string, lastName: string): string => {
  //break roster into first and last names
  const splitRoster = roster.map((name) => {
    const lower = name.toLowerCase();
    const [first, ...rest] = lower.split(' ');
    const last = rest.join(' ');
    console.log(first, last)
    return {first, last};
  });
  //now check the last names
  const check = splitRoster.filter((x) => x.last === lastName);
  if (check.length === 1) {
    //1 name, must be the player
    return `${check[0].first} ${check[0].last}`;
  } else {
    //need to check first name
    const firstNameCheck = check.filter((x) => {
      const start = x.first.substr(0, firstName.length);
      return start === firstName;
    });
    if (firstNameCheck.length === 1) {
      return `${firstNameCheck[0].first} ${firstNameCheck[0].last}`;
    }
  }
  throw Error('No player matching that name found')
};
