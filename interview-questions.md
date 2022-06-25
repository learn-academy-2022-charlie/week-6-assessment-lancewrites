# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key should be on the Student model. You can use the add_column migration to add the foreign key--named cohort_id--to the Student model.

  Researched answer: You can use the add_foreign_key from_table (the table with the foreign key column) to_table (the table that has the primary key you need). You can even use the add_reference migration to the Student model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The show, edit, update, and destroyed routes need to be passed params because each them deal with a particular instance in the model they call upon.

  Researched answer: The params specify the specific intance in the model object. The show, edit, update, and destroy RESTful routes each need to do something specific to the model. 



3. Name three rails generator commands. What is created by each?

  Your answer: Generate Model creates a model for the corresponding database. Generate migration creates a class for making a change to the structure of the model. Generate Resource creates a model, its associated controller, helpers, views, and assets files. 

  Researched answer: Generate Scaffold creates the model, controller, views, and test suite to test it all. Generate controller creates a controller to manipulate the model as well as other directories like a JS file and a stylesheet.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students              This calls the index method which displays/lists all of the students

action: "POST"   location: /students              This calls the create method which submits content to the database

action: "GET"    location: /students/new          This call upon the new method which renders an input page for new data to be entered

action: "GET"    location: /students/2            This calls upon the show method which shows the instance in the students model that has the primay key (id) of 2

action: "GET"    location: /students/2/edit       This calls upon the edit method which calls upon the instance in the students model with the id of 2 and renders an input page so that it can be edited

action: "PATCH"  location: /students/2            This calls upon the update method which submits what has been inputed in the edit part and updates the data for the instance with the id of 2

action: "DELETE" location: /students/2            This calls upon the destroy method which deletes the instance in the students model with the id of 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

 - as a user I can see a list of all of the tasks that I need to do
 - as a user I can click on one of the tasks and it takes me to a page that shows a description about that task, whether it has been completed, and list of tools/items I need to complete the task
 - as a user, while on a page that is not the home page, I can easily click a link that takes me back to the page with the list of all tasks
 - as a user I can see a button on the main page that takes me to a new page that allows me to create a new task with an associated description
 - as a user I can update a task's information
 - as a user I can delete a task
 - as a user I can create a list of tools that are required to complete a task
 - as a user I can hover over a tool and see a brief description of that tool's specifications
 - as a user I can update the list of tools for a particular task
 - as a user I can delete a tool from the list
