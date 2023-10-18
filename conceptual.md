### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - a JTW is a **jsonwebtoken**, which allows us to recognize our tokens and prevent forging by using a sign property: `jwt.sign(payload, SECRET_KEY)`

- What is the signature portion of the JWT? What does it do?

  - the signature portion of the jwt allows us to differentiate between ours and others trying to edit the payload of the request being made.
  - You will be able to check if the signature is the same, if so, the request is valid. Else someone tried tampering the payload.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  - Yes, a jwt does not prevent others from seeing the content, even though it is encoded.

---

- How can you implement authentication with a JWT? Describe how it works at a high level.

  - JWTs carry payloads, allowing us to check if the payload has certain properties or authorization parameters that would allow us to authenticate an user. example: _**username, is_admin**_ properties

- Compare and contrast unit, integration and end-to-end tests.
-

- What is a mock? What are some things you would mock?

  - Mocking is used when an element of randomness, ajax requests, reading/writing to files. Mocking is when we change the behavior of a method/function.

  ```js
  mockedFunc = jest.fn(() => 0.5);
  // returns 0.5 always
  ```

- What is continuous integration?

  - Continuous Integration refers to the act of constantly saving and testing changes made.

- What is an environment variable and what are they used for?

  - Environment Variables allows to keep values on local and production environments safe. This type of variables are _user-definable_ that can interfere with the behavior of the app or processes running.
  - ex. Setting the `procces.env` to "test" would allow us to change the path to the database.

---

- What is TDD? What are some benefits and drawbacks?

  - TDD refers to test driven development and some benefits would be to have less bugs, and save some time without thaving to write much code that may fail otherwise.

- What is the value of using JSONSchema for validation?

  - to prevent repetition
  - to allow for a more straightforward validation process, simplyfying the logic to reduce code complexity

- What are some ways to decide which code to test?

  - Think of edge cases
  - what code is affecting the overall behavior of the app

- What does `RETURNING` do in SQL? When would you use it?

  - It quite literally means to return some values specified afterwards. `RETURNING id, title, description`
  - We would use this when we want to check if a process was successful, such as inserting into a database or updating, by returning some value we can verify if it was successful or not.

---

- What are some differences between Web Sockets and HTTP?
  both http and WebSocket are communication protocols(client-server).

  - http is unidirectional whereas the WebSocket is bidirectional, meaning the server can also send requests to the client
  - WebSocket starts with ws:// or wss://
  - Http is stateless whereas the WebSocket is stateful, meaning that WebSocket connection can be terminated by either party

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - Flask gave me a bit of a more easy going way around things such as requests thanks to the orm we used. I think I preferred Flask.
