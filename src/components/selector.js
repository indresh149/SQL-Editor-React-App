import React from 'react';
import Select from 'react-select';
import TABLE_NAMES from '../constants/constants';

const options = TABLE_NAMES.map((tableName) => ({
  value: `SELECT * FROM ${tableName}`,
  label: tableName
}));

export default function Selector({ setTableName, tableName, setQuery, query }) {
  const setter = (selectedOption) => {
    setTableName(selectedOption.label);
    setQuery(selectedOption.value);
  };

  return (
    <div>
      <Select options={options} onChange={setter} />
    </div>
  );
}
