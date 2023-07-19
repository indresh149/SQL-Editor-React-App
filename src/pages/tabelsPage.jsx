import React, { memo } from "react";
import "../components/ResultSection.css";
import Oval from "react-loader-spinner";
import ReactTable from "../data/tableReact";
import { employees, customers, products } from "../data/data";

const TablesPage = () => {
  const resultIsLoading = false; 

  return (
    <>
      <div className="result-section section">
        <div className="loader">
          {resultIsLoading && (
            <Oval
              ariaLabel="loading-indicator"
              height={50}
              width={50}
              strokeWidth={5}
              color="#0ea5e9"
              secondaryColor="#d1d5db"
            />
          )}
        </div>
        <div className="result">
          {!resultIsLoading && (
            <>
              <h2>Employee Table</h2>
              <ReactTable
                data={employees}
                columnsArray={Object.keys(employees[0])}

              />
              <h2>Customer Table</h2>
              <ReactTable
                data={customers}
                columnsArray={Object.keys(customers[0])}
              />
              <h2>Products Table</h2>
              <ReactTable 
                data={products}
                columnsArray={Object.keys(products[0])}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(TablesPage);
