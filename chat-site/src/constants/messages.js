export const MESSAGES = [
    {
        length: 4.6,
        data: [
            {
                content: "Hey there.",
                link: {
                    display: "",
                    url: ""
                }
            }
        ]
    },
    {
        length: 13.5,
        data: [
            {
                content: "I'm Haochuan.",
                link: {
                    display: "",
                    url: ""
                }
            },
            {
                content: "People prefer call me `H` here.",
                link: {
                    display: "",
                    url: ""
                }
            }
        ]
    },
    {
        length: 16.9,
        data: [
            {
                content: "I write code for web, audio and music",
                link: {
                    display: "",
                    url: ""
                }
            },
            {
                content: "on ",
                link: {
                    display: "my github",
                    url: "https://github.com/haochuan"
                }
            }
        ]
    },
    {
        length: 11,
        data: [
            {
                content: "I write blogs in ",
                link: {
                    display: "my blog,",
                    url: "http://blog.haochuan.io/"
                }
            },
            {
                content: " and in ",
                link: {
                    display: "medium",
                    url: "https://medium.com/@haochuan"
                }
            }
        ]
    },
    {
        length: 16.8,
        data: [
            {
                content: "I use vim a lot,",
                link: {
                    display: "",
                    url: ""
                }
            },
            {
                content: "play guitar for metal on ",
                link: {
                    display: "youtube, ",
                    url: "https://www.youtube.com/channel/UCNESazgvF_NtDAOJrJMNw0g"
                }
            },
            {
                content: "and spend 2+ hours in gym everyday.",
                link: {
                    display: "",
                    url: ""
                }
            }
        ]
    },
    {
        length: 10.6,
        data: [
            {
                content: "If you want to know more about me, feel free to sent me a note via ",
                link: {
                    display: "email",
                    url: "mailto:haochuan.liu@gmail.com"
                }
            }
        ]
    },
    {
        length: getTimeMessage().width,
        data: [
            {
                content: getTimeMessage().text,
                link: {
                    display: "",
                    url: ""
                }
            }
        ]
    }
];

function getTimeMessage() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour < 18 ? {text: "Have a nice day!", width: 7.5} : {text: "Have a good night!", width: 8.5};
}