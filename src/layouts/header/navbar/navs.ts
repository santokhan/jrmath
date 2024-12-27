const navs = [
    { name: "home", to: "/" },
    {
        name: "courses", dropdown: [
            {
                name: "NUH",
                links: [
                    { name: "1st year", to: "/courses/nuh/1" },
                    { name: "2nd year", to: "/courses/nuh/2" },
                    { name: "3rd year", to: "/courses/nuh/3" },
                    { name: "4th year", to: "/courses/nuh/4" },
                ]
            },
            {
                name: "DUAC",
                links: [
                    { name: "1st year", to: "/courses/duac/1" },
                    { name: "2nd year", to: "/courses/duac/2" },
                    { name: "3rd year", to: "/courses/duac/3" },
                    { name: "4th year", to: "/courses/duac/4" },
                ]
            },
            {
                name: "Job Preparation",
                links: [
                    { name: "NTRCA School Preli", to: "/courses/job-preparation/ntrca-school-preli" },
                    { name: "NTRCA School Written", to: "/courses/job-preparation/ntrca-school-written" },
                    { name: "NTRCA College Preli", to: "/courses/job-preparation/ntrca-college-preli" },
                    { name: "NTRCA College Written", to: "/courses/job-preparation/ntrca-college-written" },
                ]
            },
        ]
    },
    { name: "question bank", to: "/question-bank" },
    { name: "notice", to: "/nuh-notice" },
    { name: "Demo courses", to: "/dummy" },
    { name: "contact", to: "/contact" },
]

export default navs