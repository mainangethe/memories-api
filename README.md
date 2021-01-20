# Memories API

An Express API with CRUD functionalities to help users with storing worthy events that occured/will occur and want to remember.


## Tech Stack

- NodeJS (Express)
- MongoDB

## Installation

To install the app ensure the following:

### 1. Add Node dependencies

Install all dependencies using your favourite packager. Built using `npm`.
- Run the command in your terminal/command-line.

```sh

npm install

```

### 2. Configure Environment Variables

You will also need to setup the following:

1. create an `.env` file and add the following details:
```sh

touch .env

```


| Variable | Description |
| --- | ---|
| PORT | The Port the app will be listening on |
| MONGODB_URL | A link to your MongoDB database. This was built using an Atlas Cloud instance |

### 3. Running API (Dev)

All you need to do now is just start the API.
```sh

npm run dev:start

```

### 4. Test EPs

You can use your favourite tool to test the end-points. `cURL` or `PostMan` etc.

![api-response-screenshot](https://user-images.githubusercontent.com/41260290/105123765-bbd35080-5ae9-11eb-9f11-2e7ffe33e08d.png)


## List of EPs

The following EPs are accessible:

Base URL should be `http://localhost:PORT`
| Action | URL | METHOD |
| --- | --- | --- |
| Get All Posts | `/api/posts` | GET |
| Create a new Post | `/api/posts` | POST |
| Update a post | `/api/posts/:id` | PATCH |
| Delete a post | `/api/posts/:id` | DELETE |
| Like a post | `/api/posts/:id/like_post` | PATCH |


## License

```

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do
 so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 If you happen to meet one of the copyright holders in a bar you are obligated
 to buy them one pint of beer.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

```



