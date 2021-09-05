1. What React components does your app have and what is the responsibility of each component?
   (_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component.

2. Let's say your product owner asks you to define what you need to change to add a deaths page to the application next to the Confirmed and Recovered. Write down (do NOT implement) in short steps what you would need to do.
   (_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
   (_TIP: For example, if the feature would be to create a country select it would be:_

- Create a country selector component
- Add the color picker component to the Confirmed and Recovered pages
- Add a context for the country choice with the country in state
- Update the `getAPIUrl` function to pass the country to the API and update the calls to include the country information
  )

3. Let's say you want to develop your own API to provide the Covid data for your application. You want to be able to query your database with the same queries you have made so far:

- Between date X and date Y, how many cases were confirmed?
- Between date X and date Y, how many recovered cases were recorded?
- Between date X and date Y, how many deaths were recorded?

Your product owner has already let you know that at some point it will need to be extended to include other countries and that it should be possible to query based on the country.

Write down below how you would create the table(s) you would make, what columns there are and what type these columns would be.

(_TIP: For example, this is how a student table may be created:_

CREATE TABLE students (
student_number INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50),
email VARCHAR(200),
PRIMARY KEY (student_number),
);
)
