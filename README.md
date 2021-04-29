# patagonian-test-node
This is a backend test where according with a set of data from a csv file are necessary process them and save them in a database
* * *

## Prerequisites

- Nodejs
- Git
* * *
## Recommended

- Nodemon
* * *

## How to Run

1. Clone the repository and install dependencies

~~~
- git clone https://github.com/jhernandezm-dreamcode/patagonian-test-node.git
- npm install
~~~
- - -
2. Run the server

    - You can execute the following commands

    ~~~
    npm run nodemon
    ~~~
    or 
    ~~~
    npm run start
    ~~~
Now the server is running

3. Now open postman and choose a post request with the following url

~~~
http://localhost:3000/v1/upload
~~~

The project is configured for run in that url

4. In postman  you have to choose the option "Body" this options enables some fields pick "form-data", in the field key choose the option file as type, the name of this field must to be 'file' , then in the field value now is possible choose a file from the project in folder test_files there are many files for prove the app.

This is a picture about postman settings

![postmansettings](https://github.com/jhernandezm-dreamcode/patagonian-test-node/blob/252bc4329f4a6ff92b9643bea9a603bfd6796f49/images/1.png)

5. Now in your postman choose params options, then in the field key type "provider" in the value any string, this is the provider name

This is a picture about postman settings

![postmansettings2](https://github.com/jhernandezm-dreamcode/patagonian-test-node/blob/main/images/2.png)
- - -
## Notes

1. In folder test_files there are many files for prove the app, each one with 1000 registers

2. In case that you want avoid the postman configurations, you can import this postman collection (https://www.getpostman.com/collections/94cf0c96910999b03e1f)

3. The tests cover 95% of code if you wan to execute the test run:
    ~~~
    npm run test
    ~~~

