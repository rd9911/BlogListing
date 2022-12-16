const app = require('./app');
const configs = require('./utils/config');



const PORT = configs.port || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
