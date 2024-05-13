# Klontong, the fullstack project.
### Klontong Apps

git clone https://github.com/ghamz-id/test-fs-brik.git

Guide:
To run the server:
- cd server/
- npm i
- Add .env and fill it according to the example in .env.example
- npm start

I have prepared dummy data for the server
- In the terminal, make sure you are in the server folder
- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all

To run the client:
- Open a new terminal
- cd client/
- npm i
- npm run dev
