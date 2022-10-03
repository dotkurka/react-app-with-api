Submission frontend [TODO]
End goal is to create a simple page with simple functionality:

table with list of users from users endpoint at the top of the page
under the table - form with 3 fields (name, email - required, age - optional) and submit button (posting new user to users endpoint).
fields and button should be inlined (aligned horizontally)
after submission we should initialize new request for the list of users and display new data in a table (so there will be no "optimistic update")
Technologies to use

Typescript (feel free to use TS template of CRA)
React (preferably with hooks)
Redux
Saga (we have async actions here, so api calls should be in sagas)
Material-ui (all fields/tables/buttons can be just taken from ui library, use JSS styling if it is necessary to align buttons horizontally)
Formik (to handle form. Form state may not be placed in redux)
Yup (to handle validation of form fields)
