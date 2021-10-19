import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

//I will eventually get this all pulling from some database instead of being hard-coded here - future enhancement : )
export default new Vuex.Store({
    state:{
        name: "Jared Gruneiro",
        phone: "(860) 808-6389",
        addr: "Boston, MA 02446",
        git: "https://github.com/jgruneir",
        email: "jared.gruneiro@gmail.com",
        skills: [
            {name: "Java"},
            {name: "Python"},
            {name: "C"},
            {name: "JavaScript"},
            {name: "AngularJS"},
            {name: "React"},
            {name: "PHP"},
            {name: "HTML"},
            {name: "CSS"},
            {name: "Flask"},
            {name: "Bash"},
            {name: "Jasmine"},
            {name: "Selenium"},
            {name: "Node.js"},
            {name: "SQL"}
        ], 
        tools: [
            {name: "Azure"},
            {name: "Kubernetes"},
            {name: "AWS"},
            {name: "Jenkins"},
            {name: "Docker"},
            {name: "OpenShift"},
            {name: "Git"},
            {name: "Eclipse"},
            {name: "JBoss"},
            {name: "Rally"},
            {name: "Postman"},
            {name: "SQL Developer"},
            {name: "MongoDB"},
            {name: "Kafka"},
        ],
        workExperience: [
            {title: "Software Engineer", dates: "July 2019 - Present", details: [
                "Supported a high-profile healthcare claims processing system by developing in Java, enhancing functionality of a system that handles millions of claims per day through features that would allow for more information to be processed, enhancing the speed of approval and denial through United Healthcare",
                "Worked within a mature enterprise application requiring compliance with unit test coverage, Sonar quality gates, and application security, and gained an understanding of how to work in a large project with dozens of developers",
                "Developed and integrated a new workflow using OpenShift and Kafka by which claims that met certain criteria would be automatically held from processing and messages instantly sent to the submitting provider alerting them to errors that needed correcting, potentially saving patients from delays in seeing their claim processed",
                "Utilized downtime for self-driven projects utilizing other technologies such as Python and Bash to create various tools that enhanced development within our project space, and shared these with team members to raise productivity",
                "Created a microservice hosted in Azure as part of an initiative to break up a monolithic legacy application into smaller, modern components which are easier to update and maintain"
            ]},
            {title: "Associate Software Engineer", dates: "June 2018 - June 2019", details: [
                "Developed a proof of concept web application using React and Node.js to enable implementation managers to test health care policies in production, creating a huge reduction in go-live-date issues with some of our biggest clients",
                "Programmed heavily in the front-end of the application, creating a web portal which allows users to login and create mock members with real insurance policies, and store test scenarios along with their results",
                "Maintained and improved the DevOps pipeline for the project, including Jenkins, Docker, and OpenShift, allowing the team to develop more efficiently due to quicker times for code deployment",
                "Created a test suite for the application utilizing Selenium and SauceLabs, allowing for the front-end of our application to be functionally tested on the cloud as a part of our deployment process"
            ]},
            {title: "Software Engineering Intern", dates: "June 2017 - August 2017", details: [
                "Worked from scratch to develop a proof of concept web application using Flask and D3 visualizations",
                "Integrated analysis and graphics to enable the user to perform process mining on enterprise workflow data in order to identify inefficiencies and bottlenecks in the system"
            ]},
            {title: "Software Engineering Intern", dates: "June 2016 - August 2016", details: [
                "Developed utilizing AngularJS on the front-end portal of a legacy contract management application to improve the user experience of the system",
                "Bolstered my knowledge of how to function in an Agile environment by working with a group of other interns, including acting as both developer and scrum master at various points"
            ]},
        ]
    }
});