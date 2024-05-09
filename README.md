# Marvel Character Explore Page:
Let’s create a whimsical comic book library app using React and the Marvel API. Our goal is to visualise the connections between Marvel Comics characters based on their appearances in the same comics. The application should allow users to explore the relationships between characters and identify which characters frequently appear together.

## Functional Requirements:
### Users are presented with a graph of Marvel characters.
- Each node in the graph represents a Marvel character, and edges
represent co-appearances in the same comic.
- Nodes should be clickable, displaying character details such as name,
image, and additional information when clicked.
- The graph should be interactive, allowing users to pan and zoom to
explore the connections between characters.
### Available filters:
- Comic (required) - User must select a comic to show the graph.
- Story (optional) - Use can choose to further filter the graph by choosing a
specific story.
### Users can enter a character’s name in a search bar.
- Searches for the specific character in the current graph.
- If found, highlights their connections in the graph.
## Non-Functional Requirements:
- The code must be uploaded to a GitHub or Gitlab repo.
- Performance:
  - The app should load quickly and respond smoothly.
  - Optimize API requests and minimize latency.
- Usability and User Experience:
  - Intuitive UI/UX design.
  - Clear navigation and user-friendly interactions.
  - Responsive design for various devices.
- Scalability:
  - Design the app architecture to handle a growing number of features.
- Maintainability:
  - Write clean, modular code.
  - Document codebase and architecture.
  - Follow recommended practices for React development.
- Compatibility:
  - Ensure cross-browser compatibility.
  - Test on different devices and screen sizes.

Remember, this is a creative project, so feel free to add delightful animations, sound effects, or any other fun elements that make the comic book experience enjoyable! 🦸‍♂️📚🔍

Happy coding!🚀

## UX/UI Inspiration

## Actual build

### Features
Because I didn't understand the full logic of the initial requirements, I decided to implement the following features:
- The user is presented with a list of comics that they can choose from.
- when a comic is selected, it's information are displayed below: Cover image, title, description and list of characters.
- When a character is clicked, additional info is displayed about the character: image and name.
- It is possible to hide the details of a character, display all of them, in any order.
- Light effects are added to images (comic and characters), buttons have hover effects and are disabled when the character is visible.
- A loading takes place before the list of comics is retrieved and until no comic is selected.
- Design is responsive and adapts to the available space with one break point.

#### Missing features
There is no zooming of panning in a dots cloud as there is no dots cloud, it didn't make sense as all the characters are always related to each other in the comic selected.  
The main reason was "User must select a comic to show the graph" which tells me there can't be anything before any comic is selected, and once selected, we're limited to a few characters.

Still I found a few libraries I would have tried/considered to use if I had to implement this feature:
- Observable HQ (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)
- HighCharts (https://www.highcharts.com/demo/highcharts/network-graph),
- FusionCharts (https://www.fusioncharts.com/charts/chord-diagram/chord-diagram-blend?framework=javascript)
- eCharts (https://echarts.apache.org/examples/en/editor.html?c=graph-force-dynamic)

### Coding-wise
I used a React-Typescript-Vite boilerplate as a start, and only added Sass and Axios in terms of packages.

I created a few components to organise the build, including a "Loading" one (only displaying a line of text) used with different parameters. 2 types are defined for characters and comics, I used the `useState` and `useContext` hooks for storing and passing through the data.

I also followed the BEM methodology for the naming of my classes.

## Installation / Running
1) clone the repo locally,
2) `npm install`
3) `npm run dev`
4) Open your browser and navigate to [http://localhost:5173](http://localhost:5173) (port might vary, previous command will output actual port).