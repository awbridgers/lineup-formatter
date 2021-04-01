import React, {useState} from 'react';
import {parseLine} from './util/parseLine';
import './App.css';
import {findPlayer} from './util/findPlayer';
import {Lineup} from './types';
import {CSVLink} from 'react-csv';

const App = () => {
  const [data, setData] = useState<string>('');
  const [results, setResults] = useState<Lineup[]>([]);
  const submit = () => {
    const noNewLines = data.replace(/\n/g, ' ');
    //this gives us the data we need line by line.
    const dataArray = noNewLines.match(
      /(\d+- [a-zA-z]+ [a-zA-z]+\/\s?){5}(\d \d+:\d+ ){2}\d+:\d+ \d+-\d+ (-?\d+ ){5}\d.\d+/g
    );
    if (dataArray) {
      let resultsArray: Lineup[] = [];
      dataArray.forEach((line) => {
        const lineup = parseLine(line);
        const index = resultsArray.findIndex((x) => lineup.lineup === x.lineup);
        if (index === -1) {
          resultsArray.push(lineup);
        } else {
          //lineup exists, update the times
          const existingLineup = resultsArray[index];
          existingLineup.firstHalf = [
            ...existingLineup.firstHalf,
            ...lineup.firstHalf,
          ];
          existingLineup.secondHalf = [
            ...existingLineup.secondHalf,
            ...lineup.secondHalf,
          ];
        }
      });
      setResults(resultsArray);
      console.log(resultsArray);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };
  return (
    <div className="App">
      <div className="form">
        <textarea className="textInput" value={data} onChange={handleChange} />
        <button onClick={submit} className="submit">
          Submit
        </button>
        {results.length > 1 && (
          <button className="csv">
            <CSVLink
              data={results
                .map((lineup) => {
                  const firstHalfResults =
                    lineup.firstHalf.length > 0
                      ? lineup.firstHalf.join('-')
                      : ['none'];
                  const secondHalfResults =
                    lineup.secondHalf.length > 0
                      ? lineup.secondHalf.join('-')
                      : ['none'];
                  return {
                    players: lineup.lineup,
                    firstHalf: firstHalfResults,
                    secondHalf: secondHalfResults,
                  };
                })
                .concat([
                  {
                    players: 'FT sub Shooter',
                    firstHalf: ['none'],
                    secondHalf: ['none'],
                  },
                ])}
              headers={[
                {label: 'Lineup', key: 'players'},
                {label: 'First Half', key: 'firstHalf'},
                {label: 'Second Half', key: 'secondHalf'},
              ]}
              filename="lineups.csv"
            >
              Download{' '}
            </CSVLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
