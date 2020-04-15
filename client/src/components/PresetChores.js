import React from 'react';

export const PresetChores = () => {
  return (
    <div>
      List of preset chores. Click and the amount will be added to the history
      and balance
      <ul>
        <li>
          Vacuum for $15<button>Click if done</button>
        </li>
        <li>Dishes</li>
        <li>Sweep Floors</li>
      </ul>
    </div>
  );
};
