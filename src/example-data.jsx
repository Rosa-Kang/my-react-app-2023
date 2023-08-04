import uniqid from 'uniqid';

const exampleData = {
    personalInfo: {
        fullName: "Rosa Kang",
        email: "therosessom@gmail.com",
        phoneNumber: '+1 604 910- 3337',
        address: 'Langely BC, Canada'
    },

    sections: {
        educations: [
            {
                degree: "Bachelors in Chemical Engineering",
                schoolName: "Korea Jeonbuk University",
                location: "Jeonju, South Korea",
                startDate: "03/2004",
                enDate: "02/2009",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
            {
                degree: "Master's Degree in Math",
                schoolName: "Hidden University",
                location: "New York City, US",
                startDate: "08/2020",
                endDate: "present",
                isCollapsed: true,
                isHidden: true,
                id: uniqid(),
            },
        ],

        experience: [
             {
        companyName: "White Canvas Design",
        positionTitle: "Front-end Web Developer",
        location: "Langely, BC, Canada",
        description:
          "Developed, implemented, and maintained websites using JavaScript, jQuery, PHP, Liquid,HTML/CSS and other programming languages upon need",
        startDate: "10/2021",
        endDate: "07/2023",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "The Coding Bull",
        positionTitle: "Web Developer",
        location: "Burnaby, BC, Canada",
        description:
          "Created responsive customWordPress Themes from start to finish primarily using PHP, MAMP, JavaScript, JQuery, Advanced Custom Fields (ACF Pro or CPTUI plugins), custom post types,HTML5, SASS, CSS framework like Bulma&Gulp for compiling/compressing",
        startDate: "02/2021",
        endDate: "08/2021",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
        ]
    }
}

export default exampleData;