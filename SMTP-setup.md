## SMTP Setup

### Purpose

Built ontop of the open source project [textbelt](https://textbelt.com/)

I am using this repo to run as a standalone server within my DellR620 server for a SMTP service for free. Utilizing [SendGrid](https://app.sendgrid.com/) as the provider with a free tier account this allows me to send 100 messages a day - which is plenty for my small use cases.

### Setup

1. Clone this repo

```bash
git clone git@github.com:RyanLake6/textbelt.git
```

2. Install all necessary dependencies:

```bash
npm install
```

3. Install (if not already) and run a redis-server on port 6379 (default) as this is necessary for this standalong server to run

```bash
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
```

4. Add credentials into a .env file for lib/config.js to use. An example env file can be found [here](.env.example)

5. Run the server on port 9090

```bash
node server/app.js
```

### Sending a SMS

You are now able to send a post request assuming everything is properly setup. Make sure the parameters are sent as HTTP parameters and not as a JSON object.

Git Bash Example:

```bash
curl -X POST http://localhost:9090/text -d number=<insert-phone-number> -d "message=test"
```
