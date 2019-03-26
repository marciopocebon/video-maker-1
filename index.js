//const readline = require('readline-sync')
const robots = {
    //userInput: require('./robots/user-input.js'),
    input: require('./robots/input.js'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js')
}

async function start() {

    robots.input()
    await robots.text()

    const content = robots.state.load()
    console.dir(content, { depth: null})

    /*
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    //robots.userInput(content)
    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }
    
    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Choose one option:')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
    
        return selectedPrefixText
    }

    console.log(JSON.stringify(content, null, 4))
    */
}

start()