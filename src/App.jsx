import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setGood] = useState('Jam');

  return (
    <main className="section container">
      {value === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                data-cy="Good"
                key={good}
                className={
                  good === value ? 'has-background-success-light' : ''
                }
              >
                {good !== value ? (
                  <>
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setGood(good)}
                      >
                        +
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => setGood('')}
                      >
                        -
                      </button>
                    </td>
                  </>
                )}

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
