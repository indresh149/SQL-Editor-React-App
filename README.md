
![firstpage](https://github.com/indresh149/challengetask/assets/76736055/1832a228-f131-4a3b-9c8c-f94baa1fd7d4)
![second page](https://github.com/indresh149/challengetask/assets/76736055/d76f42f7-82ea-4f44-a1e5-8b492669918c)

<br>
<br>
<br>


<h1 align="center">SQL Editor - Made with React</h1>

<br>

## About
An application created using **ReactJS** and **CSS**.          
**You can run SQL queries here.**    

The application contains an SQL editor where you can write your query. There are 2 buttons **Clear** and **Run**. You can click on RUN button to run the query. Once RUN is pressed, TableName is searched in the given query and is tallied with the TABLE_NAMES, which is an array of tables names supported by the application. If the table name queried by the user is present in the TABLE_NAMES array, API request is made to fetch data from a URL. Then the data and query is processed with the help of **alasql**. It returns us the data in a JSON format. Then we display the data in form of a table.

The application contains some more components - 
- **DropDown** by using which we can select queries according to our choice which will be run in the editor.
- **Table Names section** which contains the names of the tables supported so user can easily make the queries. SEARCH BAR provided
- **History Panel** where all the queries RUN are stored with there status. SEARCH BAR provided

<br>

## Deployement URL

The application is hosted on Vercel.            
<h3><a href="https://challengetask.vercel.app/sql-editor">SQL-Editor</a></h3>

<br>


## SOME Queries you can try to run
1. ```SELECT * FROM Customers```
2. ```SELECT * FROM Categories```
3. ```SELECT * FROM Employee_territories;```
4. ```SELECT * FROM Employees;```
5. ```SELECT * FROM Orders;```
6. ```SELECT * FROM Products;```


<br>

##  Tech Stack
1. ReactJS
2. CSS


<br>

## Major Dependencies
- @uiw/react-codemirror ```6.5.2``` - Editor to write query
- alasql ```4.1.2``` - To run SQL query on a .csv file and return result in form of JSON object
- react-hot-toast ```2.4.1``` - For notifications such as success and error
- react-loader-spinner ```4.0.0``` - Loader for the table
- react-table ```7.8.0``` - To create result table
- axios ```1.4.0``` - for http request
  


<br>

## Page load time
I used Lighthouse Chrome DevTools to check application performace.
![performance view new](https://github.com/indresh149/challengetask/assets/76736055/c49cb7c9-19ef-4c49-affc-61754bacc756)
![metrics view new](https://github.com/indresh149/challengetask/assets/76736055/07dd4890-ae7b-4911-b8af-4479b96f46bb)


<br>


## Steps taken to optimize

- Used performace optimization hooks - **memo, useMemo and useCallback** to prevent unnecessary re-rendering of components and increase performance.     
- Used code splitting for the code-editor component. Using code splitting for all components lead to decrease in performance, so applied to only editor.


<br>      


<h3 align="center">THANK YOU!!!</h3>
