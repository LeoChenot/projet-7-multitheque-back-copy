const { appendFile } = require('fs/promises');
const path = require("path");

class APIError extends Error {
  constructor (message,url,status = 500) {
    super(message);
    this.status = status;
    this.url = url;
  }
  async log () {
    console.error(this.url, this.message, new Date());
    const logPath = path.resolve(__dirname,`../../log/`);
    const fileName = new Date().toISOString().split('T')[0]+'.csv';
    const result = await appendFile(logPath+"/"+fileName, `${new Date().toLocaleTimeString()},${this.url},${this.message}\n`);
  }
};

module.exports = APIError;
