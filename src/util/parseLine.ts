import {Lineup} from '../types';
import {findPlayer} from './findPlayer';

export const parseLine = (line: string): Lineup => {
  let lineup: string[] = [];
  let firstHalfArray: number[] = [];
  let secondHalfArray: number[] = [];
  //separate out the players from the times
  const [player1, player2, player3, player4, player5, data] = line.split('/');
  //build the array for the lineup
  const playersArray = [player1, player2, player3, player4, player5].map((x) =>
    x.replace(/\s?\d+- /g, '')
  );
  //get the players
  playersArray.forEach((name, i) => {
    //because some players have 2 last names or a jr,
    //get the first name and then combine w/e is left
    const nameArray = name.split(' ')
    const firstName = nameArray.pop()!;
    const lastName = nameArray.join(' ')
    console.log(firstName, lastName)
    const playerName = findPlayer(firstName.toLowerCase(), lastName.toLowerCase());
    lineup.push(playerName);
  });
  //now handle the data
  const [startHalf, startTimeString, endHalf, endTimeString] = data.trim().split(' ');
  const startTime = parseInt(startTimeString.replace(':',''),10);
  const endTime = parseInt(endTimeString.replace(':',''),10);
  //if it is the first half
  if (startHalf === '1') {
    if (endHalf === '1') {
      //in and out in same half, just add the times
      firstHalfArray = [startTime, endTime];
    } else {
      //play continues into the second half
      if (endTime === 2000) {
        //subbed out at the half
        firstHalfArray = [startTime, 0];
      } else {
        //continued into the second half
        firstHalfArray = [startTime, 0];
        secondHalfArray = [2000, endTime];
      }
    }
  }else{
    //play in the 2nd half
    secondHalfArray = [startTime, endTime];
  }

  return {
    lineup: lineup.sort().join(','),
    firstHalf: firstHalfArray,
    secondHalf: secondHalfArray,
  };
};
