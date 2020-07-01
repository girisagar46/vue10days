let a = new Vue({
    el: '#app',
    data: {
        title: "Hello",
        link: "http://google.com",
        finishedLink: `<a href="http://google.com">Google</a>`
    },
    methods: {
        sayHello: function () {
            this.title = "Hello There!"
            return this.title
        }
    }
})

let b = new Vue({
    el: "#exercise",
    data: {
        name: "Sagar",
        age: 25,
        imgSrc: `https://djangostars.com/blog/uploads/2020/05/cover-1.png`,
        counter: 0
    },
    methods: {
        myRandom: function () {
            return Math.random()
        },
        increase: function () {
            this.counter++
        }
    }
})