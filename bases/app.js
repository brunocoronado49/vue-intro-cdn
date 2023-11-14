const app = Vue.createApp({
    // template: `
    // <h1>Hello World</h1>
    // <p>{{ null }}</p>
    // `
   data() {
    return {
        quote: 'I am Batman',
        author: 'Bruce Wayner'
    }
   },
   methods: {
    changeQuote() {
        this.author = 'Francisco Rangel'
        this.capitalize()
    },
    capitalize() {
        this.quote = this.quote.toUpperCase()
    }
   }
})

app.mount('#myApp')
