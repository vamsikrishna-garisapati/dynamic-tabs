# Dynamic Tabs Component in React

This project is a **Dynamic Tabs Component** built using **React**. It allows users to dynamically add, remove, and switch between tabs. The component ensures a seamless user experience while managing tab interactions.

## Features

- **Add New Tab**: Users can add a new tab by clicking the "Add Tab" button.
- **Switch Between Tabs**: Clicking on a tab switches to its content and highlights the active tab.
- **Remove Tabs**: Users can remove any tab, but at least one tab must always remain.
- **Active Tab Indicator**: The currently active tab is clearly highlighted.
- **Dynamic Content**: Each tab displays its own content dynamically.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/vamsikrishna-garisapati/dynamic-tabs.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd dynamic-tabs-react
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```


## Usage

- **Add a Tab**: Click the "Add Tab" button to add a new tab with default content.
- **Switch Tabs**: Click any tab to switch to it and see its content.
- **Remove a Tab**: Click the "Remove" button next to any tab. At least one tab must remain.

## Technologies Used

- **React**: For building the interactive and dynamic UI.
- **CSS**: For styling the tabs and content.

## Notes

- The component manages state using React hooks (`useState`) to track tabs and the active tab.
- At least one tab will always remain, even when other tabs are removed.
- The active tab is visually distinguished from inactive ones for easy identification.

