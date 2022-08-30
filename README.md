# HTML Project Member Generator
Tyler Morse<br>
HTML Project Member Generator<br>
<br>
User Story:<br>
AS A manager<br>
I WANT to generate a webpage that displays my team's basic info<br>
SO THAT I have quick access to their emails and GitHub profiles<br>
<br>
Acceptance Criteria:<br>
GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for my team members and their information<br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br>
WHEN I click on an email address in the HTML<br>
THEN my default email program opens and populates the TO field of the email with the address<br>
WHEN I click on the GitHub username<br>
THEN that GitHub profile opens in a new tab<br>
WHEN I start the application<br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br>
WHEN I enter the team manager’s name, employee ID, email address, and office number<br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br>
WHEN I select the engineer option<br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu<br>
WHEN I select the intern option<br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br>
WHEN I decide to finish building my team<br>
THEN I exit the application, and the HTML is generated<br>
Description:<br>
This application is executed through node.js, including "fs", "inquirer v-8.0.0.", and "jest" npms, as well as custom classes and OOP emplimentation. Once initiated, A series of prompts appear through the terminal requiring information to be passed to the new HTML file. Once complete, a pre-styled HTML file of project members and information will be created. Responsive on all screen sizes.
A link to a video demo of the application can be found <a href="https://drive.google.com/file/d/1BJ3A17VPO9xyPI7A9FYKqPIwEwAxX9tO/view">here<a>.