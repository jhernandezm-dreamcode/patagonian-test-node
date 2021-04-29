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
    - If you have nodemon installed you can execute the following command
    ~~~
    npm run nodemon
    ~~~
    - In other case xecute the following command instead
    ~~~
    npm run start
    ~~~
Now the server is running

3. Now open postman and choose a post request with the following url

~~~
http://localhost:3000/v1/upload
~~~

The project is configured for run in that url

4. In postman also you have to choose the option "Body" this options enables some field where you have to choose in the field key the option file, the name must to be 'file' , then in the field value now is possible choose a file from your computer

This is a picture about postman settings

![postman settings](https://github.com/jhernandezm-dreamcode/patagonian-test-node/blob/main/images/1.png)
- - -
## Notes

1. In folder test_files there are many files for prove the app, each one with 1000 registers

2. In case that you want avoid the postman configurations, you can import this postman collection (https://www.getpostman.com/collections/94cf0c96910999b03e1f)

3. The tests cover 95% of code if you wan to execute the test run:
    ~~~
    npm run test
    ~~~

