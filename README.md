
# WhatsApp Lite

WhatsApp Lite is a simple chat application built with Node.js, Express.js, and MongoDB, allowing users to send and manage chats.

## Features

- **Chat Management**: Users can view, add, edit, and delete chats.
- **Simple Interface**: Minimalistic design for easy use.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/whatsapp-lite.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure MongoDB is running locally on port `27017`.

4. Seed initial data:

   ```bash
   node init.js
   ```

5. Start the server:

   ```bash
   node index.js
   ```

6. Open your web browser and navigate to `http://localhost:3301` to access the application.

## Usage

- **View Chats**: Visit `/chats` to view all chats.
- **Add New Chat**: Click on "New Chat" to add a new chat.
- **Edit Chat**: Click on "Edit" next to a chat to modify its message.
- **Delete Chat**: Click on "Delete" to remove a chat.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Folder Structure

- **models**: Contains MongoDB schema definitions.
- **public**: Stores static files such as CSS.
- **views**: Contains EJS templates for rendering HTML.
- **index.js**: Main server file.
- **init.js**: Script to seed initial data into the database.

**Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


