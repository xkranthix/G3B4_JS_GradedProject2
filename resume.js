const data = {
  resume: [
    {
      id: 1,
      basics: {
        name: "John Doe",
        AppliedFor: "Software Engineer",
        image: "",
        email: "john@gmail.com",
        phone: "9999999999",
        location: {
          address: "2712 Broadway St",
          postalCode: "560063",
          city: "Bangalore",
          state: "Karnataka",
        },
        profiles: {
          network: "LinkedIn",
          url: "https://linkedin.com/john",
        },
      },

      skills: {
        name: "Web Development",
        level: "Master",
        keywords: ["HTML", "CSS", "JavaScript", "Python"],
      },

      work: {
        "Company Name": "Harman",
        Position: "Associate Engineer",
        "Start Date": "2013-01-01",
        "End Date": "2014-01-01",
        Summary:
          "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas.",
      },

      Internship: {
        "Company Name": "Ibm",
        Position: "intern",
        "Start Date": "2013-01-01",
        "End Date": "2014-01-01",
        Summary:
          " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional.",
      },

      projects: {
        name: "Diabetic Retinopaty",
        description:
          " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management.",
      },

      education: {
        UG: {
          institute: "Sai Vidya Institute of Technology",
          course: "B.E Computer Science and Engineering",
          "Start Date": "2011-01-01",
          "End Date": "2013-01-01",
          cgpa: "8.7",
        },
        "Senior Secondary": {
          institute: "KV AFS YELAHANKA",
          cgpa: "8.7",
        },
        "High School": {
          institute: "KV AFS Bhuj",
          cgpa: "8.7",
        },
      },
      achievements: {
        Summary: [
          "Attended 5 days industry orientation workshop organized by free software movement",
        ],
      },
      interests: {
        hobbies: ["Wildlife", "Dance", "Workout"],
      },
    },
    {
      id: 2,
      basics: {
        name: "Riya",
        AppliedFor: "Software Engineer",
        image: "",
        email: "riya@gmail.com",
        phone: "9999999999",
        location: {
          address: "12 maruthi nilaya ",
          postalCode: "560063",
          city: "Bangalore",
          state: "Karnataka",
        },
        profiles: {
          network: "LinkedIn",
          url: "https://linkedin.com/riya",
        },
      },

      skills: {
        name: "AIML",
        level: "intermediate",
        keywords: ["python", "ML", "AI", "Image Processing"],
      },

      work: {
        "Company Name": "IBM",
        Position: "Software Engineer",
        "Start Date": "2020-01-01",
        "End Date": "2022-01-01",
        Summary:
          "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas.",
      },

      Internship: {
        "Company Name": "Ibm",
        Position: "intern",
        "Start Date": "2019-01-01",
        "End Date": "2020-01-01",
        Summary:
          " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional.",
      },

      projects: {
        name: "Diabetic Retinopaty",
        description:
          " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management.",
      },

      education: {
        UG: {
          institute: "Nagarujana Institute of Technology",
          course: "B.E Computer Science and Engineering",
          "Start Date": "2010-01-01",
          "End Date": "2015-01-01",
          cgpa: "9.7",
        },
        "Senior Secondary": {
          institute: "Reva Institute",
          cgpa: "8.7",
        },

        "High School": {
          institute: "Ryan public school",
          cgpa: "10.0",
        },
      },
      achievements: {
        dums: "",
        Summary: [
          "Attended 5 days industry orientation workshop organized by free software movement",
          "Participated in google hackathon",
        ],
      },
      interests: {
        hobbies: ["Wildlife", "Dance", "Workout", "Reading books"],
      },
    },
    {
      id: 3,
      basics: {
        name: "Rahul Roy",
        AppliedFor: "Manager",
        image: "",
        email: "roy@gmail.com",
        phone: "9999999999",
        location: {
          address: " 305 A-Richard apartments ",
          postalCode: "560054",
          city: "Ahemdabad",
          state: "Gujarat",
        },
        profiles: {
          network: "LinkedIn",
          url: "https://linkedin.com/rahulroy",
        },
      },

      skills: {
        name: "FullStack",
        level: "Master",
        keywords: ["HTML", "CSS", "JavaScript", "React", "Java"],
      },

      work: {
        "Company Name": "Great Learning",
        Position: "Manager",
        "Start Date": "2015-01-01",
        "End Date": "2020-01-01",
        Summary:
          "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas.",
      },

      Internship: {
        "Company Name": "TCS",
        Position: "intern",
        "Start Date": "2013-01-01",
        "End Date": "2014-01-01",
        Summary:
          " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional.",
      },

      projects: {
        name: "E-Commerce Website",
        description:
          " I have created a ecommerce website using html,css,and react with javascripts, Porject has functionality where user can select any item of their choice and store it into a cart or they add item into their whishlist, seraching functionality allow user to search any product by name .",
      },

      education: {
        UG: {
          institute: "BMS Institute of Technology",
          course: "B.E Information Science and Engineering",
          "Start Date": "2008-01-01",
          "End Date": "2011-01-01",
          cgpa: "8.7",
        },
        "Senior Secondary": {
          institute: "Delhi Public School",
          cgpa: "9.0",
        },

        "High School": {
          institute: "Delhi Public School",
          cgpa: "9.6",
        },
      },
      achievements: {
        Summary: [
          "Attended a workshop on fullstack development",
          "participated in state level baskteball",
        ],
      },
      interests: {
        hobbies: ["Wildlife", "Travelling", "Workout"],
      },
    },
    {
      id: 4,
      basics: {
        name: "Priya Desai",
        AppliedFor: "HR",
        image: "",
        email: "Priya@gmail.com",
        phone: "9999999999",
        location: {
          address: " 201 A-Niteshapartments ",
          postalCode: "560054",
          city: "Bikaner",
          state: "Rajasthan",
        },
        profiles: {
          network: "LinkedIn",
          url: "https://linkedin.com/PriyaDesai",
        },
      },

      skills: {
        name: "HR Management",
        level: "Master",
        keywords: ["Excel", "Data Management", "Communication skill"],
      },

      work: {
        "Company Name": "Cerner private lmtd.",
        Position: "HR",
        "Start Date": "2015-01-01",
        "End Date": "2020-01-01",
        Summary:
          "Involve in various communication activites with client, Handling data for all employees",
      },

      Internship: {
        "Company Name": "TCS",
        Position: "intern",
        "Start Date": "2013-01-01",
        "End Date": "2014-01-01",
        Summary:
          "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms ",
      },

      projects: {
        name: "Efficiency Design of Solar Panels",
        description:
          "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy.",
      },

      education: {
        UG: {
          institute: "BMS Institute of Technology",
          course: "MCA",
          "Start Date": "2008-01-01",
          "End Date": "2011-01-01",
          cgpa: "8.7",
        },
        "Senior Secondary": {
          institute: "Delhi Public School",
          cgpa: "9.0",
        },

        "High School": {
          institute: "Delhi Public School",
          cgpa: "9.6",
        },
      },
      achievements: {
        Summary: [
          "Been complimented by your supervisor or co-workers",
          "Increased revenue or sales for the company",
        ],
      },
      interests: {
        hobbies: ["Art&Craft", "Travelling", "Workout"],
      },
    },
    {
      id: 5,
      basics: {
        name: "Rakesh Ranjan",
        AppliedFor: "Manager",
        image: "",
        email: "Priya@gmail.com",
        phone: "9999999999",
        location: {
          address: " 201 A-Niteshapartments ",
          postalCode: "560054",
          city: "Bikaner",
          state: "Rajasthan",
        },
        profiles: {
          network: "LinkedIn",
          url: "https://linkedin.com/PriyaDesai",
        },
      },

      skills: {
        name: "HR Management",
        level: "Master",
        keywords: ["Excel", "Data Management", "Communication skill"],
      },

      work: {
        "Company Name": "Cerner private lmtd.",
        Position: "HR",
        "Start Date": "2015-01-01",
        "End Date": "2020-01-01",
        Summary:
          "Involve in various communication activites with client, Handling data for all employees",
      },

      Internship: {
        "Company Name": "TCS",
        Position: "intern",
        "Start Date": "2013-01-01",
        "End Date": "2014-01-01",
        Summary:
          "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms ",
      },

      projects: {
        name: "Efficiency Design of Solar Panels",
        description:
          "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy.",
      },

      education: {
        UG: {
          institute: "BMS Institute of Technology",
          course: "MCA",
          "Start Date": "2008-01-01",
          "End Date": "2011-01-01",
          cgpa: "8.7",
        },
        "Senior Secondary": {
          institute: "Delhi Public School",
          cgpa: "9.0",
        },

        "High School": {
          institute: "Delhi Public School",
          cgpa: "9.6",
        },
      },
      achievements: {
        Summary: [
          "Best employee of the year 2021",
          "Increased revenue or sales for the company in 2019",
        ],
      },
      interests: {
        hobbies: ["Art&Craft", "Travelling", "Workout"],
      },
    },
    {
      id: 6,
      basics: {
        name: "Godse",
        AppliedFor: "Manager",
        image: "",
        email: "Priya@gmail.com",
        phone: "9999999999",
        location: {
          address: " 201 A-Niteshapartments ",
          postalCode: "560054",
          city: "Bikaner",
          state: "Rajasthan",
        },
        profiles: {
          network: "LinkedIn",
          url: "https://linkedin.com/PriyaDesai",
        },
      },

      skills: {
        name: "HR Management",
        level: "Master",
        keywords: ["Excel", "Data Management", "Communication skill"],
      },

      work: {
        "Company Name": "Cerner private lmtd.",
        Position: "HR",
        "Start Date": "2015-01-01",
        "End Date": "2020-01-01",
        Summary:
          "Involve in various communication activites with client, Handling data for all employees",
      },

      Internship: {
        "Company Name": "TCS",
        Position: "intern",
        "Start Date": "2013-01-01",
        "End Date": "2014-01-01",
        Summary:
          "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms ",
      },

      projects: {
        name: "Efficiency Design of Solar Panels",
        description:
          "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy.",
      },

      education: {
        UG: {
          institute: "BMS Institute of Technology",
          course: "MCA",
          "Start Date": "2008-01-01",
          "End Date": "2011-01-01",
          cgpa: "8.7",
        },
        "Senior Secondary": {
          institute: "Delhi Public School",
          cgpa: "9.0",
        },

        "High School": {
          institute: "Delhi Public School",
          cgpa: "9.6",
        },
      },
      achievements: {
        Summary: [
          "Been complimented by your supervisor or co-workers",
          "Increased revenue or sales for the company",
        ],
      },
      interests: {
        hobbies: ["Art&Craft", "Travelling", "Workout"],
      },
    },
  ],
};

let resumeData = { resume: [] };
let allResumes = resumeData["resume"];
let currentResumeIndex = 0;
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const searchBar = document.getElementById("search");
const loader = document.getElementById("loader");
const noResultContainer = document.getElementById("noResultContainer");
const resumeContainer = document.getElementById("resumeContainer");
const employeeName = document.getElementById("name");
const appliedFor = document.getElementById("appliedFor");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const linkedin = document.getElementById("linkedin");
const technicalSkills = document.getElementById("technicalSkills");
const hobbies = document.getElementById("hobbies");
const previousCompanyDetails = document.getElementById(
  "previousCompanyDetails"
);
const projectDetails = document.getElementById("projectDetails");
const education = document.getElementById("education");
const internship = document.getElementById("internship");
const achievements = document.getElementById("achievements");
const checkButtonsToDisplay = () => {
  if (currentResumeIndex + 1 >= allResumes.length) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
  if (currentResumeIndex === 0) {
    previousBtn.style.visibility = "hidden";
  } else {
    previousBtn.style.visibility = "visible";
  }
};
if (localStorage.getItem("username") === null) {
  window.location.href = "./login.html";
}
const fillData = () => {
  const currentResume = allResumes[currentResumeIndex];
  employeeName.innerText = currentResume["basics"]["name"];
  appliedFor.innerText = currentResume["basics"]["AppliedFor"];
  email.innerText = currentResume["basics"]["email"];
  phone.innerText = currentResume["basics"]["phone"];
  linkedin.href = currentResume["basics"]["profiles"]["url"];
  technicalSkills.innerHTML = `<div>${currentResume["skills"]["keywords"].map(
    (keyword) => `<p>${keyword}</p>`
  )}</div>`.replaceAll(",", "");
  hobbies.innerHTML = `<div>${currentResume["interests"]["hobbies"].map(
    (keyword) => `<p>${keyword}</p>`
  )}</div>`.replaceAll(",", "");
  previousCompanyDetails.innerHTML = `<div>${Object.keys(
    currentResume["work"]
  ).map(
    (key) =>
      `<p class="innerDetail"><b>${key}</b>: ${currentResume["work"][key]}</p>`
  )}</div>`.replaceAll(",", "");
  projectDetails.innerHTML = `<p class="innerDetail"><b>${currentResume["projects"]["name"]}</b>:${currentResume["projects"]["description"]}</p>`;
  education.innerHTML = `<ul>${Object.keys(currentResume["education"]).map(
    (education) =>
      `<li><b>${education}:</b> ${Object.keys(
        currentResume["education"][education]
      ).map(
        (eduDataKey) =>
          `<span> ${currentResume["education"][education][eduDataKey]}</span>`
      )}</li>`
  )}</ul>`;
  internship.innerHTML = `<ul>${Object.keys(currentResume["Internship"]).map(
    (key) => `<li><b>${key}</b>: ${currentResume["Internship"][key]}</li>`
  )}</ul>`.replaceAll(",", "");
  achievements.innerHTML = `<ul>${currentResume["achievements"]["Summary"].map(
    (achievement) => `<li>${achievement}</li>`
  )}</ul>`.replaceAll(",", "");
};
const checkResumes = () => {
  if (allResumes.length > 0) {
    noResultContainer.style.display = "none";
    resumeContainer.style.display = "block";
  } else {
    noResultContainer.style.display = "flex";
    resumeContainer.style.display = "none";
  }
};
fetch("./Data.json")
  .then((respdata) => {
    console.log(respdata);
    loader.style.display = "none";
    resumeData = respdata;
    allResumes = resumeData["resume"];
    checkResumes();
    checkButtonsToDisplay();
    fillData();
  })
  .catch((error) => {
    loader.style.display = "none";
    resumeData = data;
    allResumes = resumeData["resume"];
    checkResumes();
    checkButtonsToDisplay();
    fillData();
  });

searchBar.oninput = function (event) {
  const searchInput = event.target.value;
  if (searchInput.length > 0) {
    allResumes = resumeData["resume"].filter((resume) =>
      resume["basics"]["AppliedFor"]
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
  } else {
    allResumes = resumeData["resume"];
  }
  currentResumeIndex = 0;
  if (allResumes.length > 0) fillData();
  checkResumes();
  checkButtonsToDisplay();
};
const nextBtnClick = () => {
  currentResumeIndex = currentResumeIndex + 1;
  fillData();
  checkButtonsToDisplay();
};
const previousBtnClick = () => {
  currentResumeIndex = currentResumeIndex - 1;
  fillData();
  checkButtonsToDisplay();
};

checkButtonsToDisplay();
