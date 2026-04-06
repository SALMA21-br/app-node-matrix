function sayHello(name) {
    const platform = process.platform; 
    return `Hello ${name}, bienvenue sur la plateforme ${platform}`;
}
module.exports = sayHello;