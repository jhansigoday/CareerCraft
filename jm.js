// Sample data for the application
const userData = {
    name: "Jhansi",
    skills: [
        { name: "JavaScript", level: "Expert", primary: true },
        { name: "React", level: "Advanced", primary: true },
        { name: "Node.js", level: "Intermediate", primary: false },
        { name: "Python", level: "Intermediate", primary: false },
        { name: "SQL", level: "Advanced", primary: true },
        { name: "Data Analysis", level: "Intermediate", primary: false },
        { name: "UI/UX Design", level: "Basic", primary: false },
        { name: "AWS", level: "Intermediate", primary: false }
    ]
};

// All available skills for selection
const allSkills = [
    "JavaScript", "React", "Angular", "Vue.js", "Node.js", "Python", 
    "Java", "C#", "SQL", "NoSQL", "MongoDB", "AWS", "Azure", 
    "Docker", "Kubernetes", "CI/CD", "Data Analysis", "Machine Learning",
    "UI/UX Design", "Figma", "Adobe XD", "Product Management", 
    "Agile", "Scrum", "DevOps", "PHP", "Ruby", "Go", "Swift", 
    "Kotlin", "TypeScript", "GraphQL", "REST API", "Git", "Linux"
];

// Job listings database
const jobListings = [
    // Frontend Developer jobs
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "San Francisco, CA",
        salary: "$120,000 - $150,000",
        type: "Full-time",
        posted: "2 days ago",
        matchPercentage: 94,
        requiredSkills: ["JavaScript", "React", "HTML", "CSS", "TypeScript"],
        description: "Join our team to build responsive and intuitive user interfaces for our flagship products."
    },
    {
        id: 2,
        title: "Senior Frontend Engineer",
        company: "Meta",
        location: "Remote",
        salary: "$140,000 - $170,000",
        type: "Full-time",
        posted: "1 week ago",
        matchPercentage: 89,
        requiredSkills: ["JavaScript", "React", "Redux", "CSS", "Performance Optimization"],
        description: "Help us build the next generation of web applications with a focus on performance and accessibility."
    },
    {
        id: 3,
        title: "UI Developer",
        company: "Adobe",
        location: "San Jose, CA",
        salary: "$110,000 - $140,000",
        type: "Full-time",
        posted: "3 days ago",
        matchPercentage: 85,
        requiredSkills: ["JavaScript", "HTML", "CSS", "UI/UX Design", "Adobe Creative Suite"],
        description: "Create beautiful and functional interfaces for our creative software products."
    },
    
    // Backend Developer jobs
    {
        id: 4,
        title: "Backend Developer",
        company: "Amazon",
        location: "Seattle, WA",
        salary: "$130,000 - $160,000",
        type: "Full-time",
        posted: "1 day ago",
        matchPercentage: 78,
        requiredSkills: ["Node.js", "AWS", "SQL", "NoSQL", "API Design"],
        description: "Build scalable backend services for our e-commerce platform."
    },
    {
        id: 5,
        title: "Java Backend Engineer",
        company: "Microsoft",
        location: "Redmond, WA",
        salary: "$135,000 - $165,000",
        type: "Full-time",
        posted: "5 days ago",
        matchPercentage: 72,
        requiredSkills: ["Java", "Spring Boot", "SQL", "Microservices", "Azure"],
        description: "Develop robust backend services for our enterprise solutions."
    },
    
    // Full Stack Developer jobs
    {
        id: 6,
        title: "Full Stack Developer",
        company: "Salesforce",
        location: "Bangalore",
        salary: "₹25,00,000 - ₹35,00,000",
        type: "Full-time",
        posted: "1 week ago",
        matchPercentage: 91,
        requiredSkills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
        description: "Work on both frontend and backend aspects of our CRM solutions."
    },
    {
        id: 7,
        title: "MERN Stack Developer",
        company: "Adobe",
        location: "Hyderabad",
        salary: "₹20,00,000 - ₹30,00,000",
        type: "Full-time",
        posted: "3 days ago",
        matchPercentage: 88,
        requiredSkills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
        description: "Build end-to-end applications using the MERN stack for our digital marketing products."
    },
    
    // Data Science jobs
    {
        id: 8,
        title: "Data Scientist",
        company: "Google",
        location: "New York, NY",
        salary: "$140,000 - $180,000",
        type: "Full-time",
        posted: "4 days ago",
        matchPercentage: 75,
        requiredSkills: ["Python", "Machine Learning", "Data Analysis", "SQL", "Statistics"],
        description: "Analyze large datasets to extract insights and build predictive models."
    },
    {
        id: 9,
        title: "ML Engineer",
        company: "Microsoft",
        location: "Seattle, WA",
        salary: "$150,000 - $190,000",
        type: "Full-time",
        posted: "1 week ago",
        matchPercentage: 73,
        requiredSkills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Computer Vision"],
        description: "Develop and deploy machine learning models for our AI-powered services."
    },
    
    // UX Designer jobs
    {
        id: 10,
        title: "UX Designer",
        company: "Meta",
        location: "Menlo Park, CA",
        salary: "$130,000 - $160,000",
        type: "Full-time",
        posted: "2 days ago",
        matchPercentage: 68,
        requiredSkills: ["UI/UX Design", "Figma", "User Research", "Prototyping", "Design Systems"],
        description: "Create intuitive and engaging user experiences for our social media platforms."
    }
];

// Interview questions by job role
const interviewQuestions = {
    "Frontend Developer": [
        {
            question: "Can you explain the difference between React state and props?",
            hint: "Focus on data flow, mutability, and component ownership."
        },
        {
            question: "How do you optimize performance in React applications?",
            hint: "Mention techniques like memoization, virtualization, and code splitting."
        },
        {
            question: "Explain how you would implement responsive design for different screen sizes.",
            hint: "Talk about media queries, flexible layouts, and mobile-first approach."
        },
        {
            question: "What are closures in JavaScript and how would you use them?",
            hint: "Explain lexical scoping and practical applications."
        },
        {
            question: "Describe your experience with state management libraries.",
            hint: "Discuss Redux, Context API, or other solutions you've used."
        }
    ],
    "Backend Developer": [
        {
            question: "How would you design a scalable API?",
            hint: "Consider caching, load balancing, database optimization, and stateless design."
        },
        {
            question: "Explain the concept of middleware in Node.js.",
            hint: "Discuss how middleware functions process requests and the middleware chain."
        },
        {
            question: "How do you handle authentication and authorization in your applications?",
            hint: "Talk about JWT, OAuth, role-based access control, etc."
        },
        {
            question: "Describe your experience with database optimization.",
            hint: "Mention indexing, query optimization, and normalization techniques."
        },
        {
            question: "How do you ensure the security of your backend applications?",
            hint: "Discuss input validation, SQL injection prevention, HTTPS, etc."
        }
    ],
    "Full Stack Developer": [
        {
            question: "How do you maintain communication between frontend and backend components?",
            hint: "Talk about REST APIs, GraphQL, WebSockets, or other methods."
        },
        {
            question: "Describe your approach to testing full-stack applications.",
            hint: "Discuss unit tests, integration tests, and end-to-end testing strategies."
        },
        {
            question: "How do you handle state management across the entire application?",
            hint: "Explain client-side state, server state, and synchronization approaches."
        },
        {
            question: "What's your experience with deployment and DevOps?",
            hint: "Mention CI/CD pipelines, containerization, and cloud services."
        },
        {
            question: "How do you ensure consistent development environments?",
            hint: "Talk about Docker, configuration management, and environment variables."
        }
    ],
    "Data Scientist": [
        {
            question: "Describe your process for cleaning and preparing data for analysis.",
            hint: "Discuss handling missing values, outliers, and feature engineering."
        },
        {
            question: "How do you select the appropriate machine learning model for a problem?",
            hint: "Talk about evaluating model performance, cross-validation, and business requirements."
        },
        {
            question: "Explain how you would handle imbalanced datasets.",
            hint: "Mention techniques like resampling, SMOTE, or weighted loss functions."
        },
        {
            question: "How do you communicate complex analytical findings to non-technical stakeholders?",
            hint: "Discuss data visualization, simplified explanations, and focusing on business impact."
        },
        {
            question: "Describe a challenging data analysis project you worked on.",
            hint: "Focus on the problem, your approach, and the impact of your solution."
        }
    ],
    "UX Designer": [
        {
            question: "How do you approach user research for a new product?",
            hint: "Discuss user interviews, personas, journey mapping, and usability testing."
        },
        {
            question: "Describe your design process from concept to delivery.",
            hint: "Talk about ideation, wireframing, prototyping, and design handoff."
        },
        {
            question: "How do you incorporate accessibility into your designs?",
            hint: "Mention WCAG guidelines, inclusive design principles, and testing with assistive technologies."
        },
        {
            question: "How do you resolve conflicts between user needs and business requirements?",
            hint: "Discuss prioritization, evidence-based design decisions, and finding compromises."
        },
        {
            question: "Describe how you measure the success of a design solution.",
            hint: "Talk about metrics, user feedback, and iterative improvements."
        }
    ]
};

// Company insights data
const companyInsights = {
    "Google": [
        {
            icon: "fa-building",
            title: "Company Culture",
            content: "Google emphasizes innovation and creative problem-solving. Their interview process often includes behavioral questions to assess cultural fit."
        },
        {
            icon: "fa-comments",
            title: "Interview Style",
            content: "Expect technical questions, coding challenges, and behavioral interviews. They often use the STAR method (Situation, Task, Action, Result)."
        },
        {
            icon: "fa-lightbulb",
            title: "Preparation Tip",
            content: "Review Google's core values: Focus on the user, Fast is better than slow, Great just isn't good enough, etc."
        }
    ],
    "Microsoft": [
        {
            icon: "fa-building",
            title: "Company Culture",
            content: "Microsoft emphasizes growth mindset and learning. Their interview process focuses on problem-solving abilities and collaboration skills."
        },
        {
            icon: "fa-comments",
            title: "Interview Style",
            content: "Microsoft typically uses a combination of technical interviews and behavioral questions. They often ask about past projects and challenges."
        },
        {
            icon: "fa-lightbulb",
            title: "Preparation Tip",
            content: "Familiarize yourself with Microsoft's mission to empower every person and organization on the planet to achieve more."
        }
    ],
    "Amazon": [
        {
            icon: "fa-building",
            title: "Company Culture",
            content: "Amazon emphasizes their leadership principles like Customer Obsession, Ownership, and Dive Deep. Expect questions related to these principles."
        },
        {
            icon: "fa-comments",
            title: "Interview Style",
            content: "Amazon uses behavioral interviews based on their leadership principles. Prepare specific examples from your past experience."
        },
        {
            icon: "fa-lightbulb",
            title: "Preparation Tip",
            content: "Study Amazon's 16 leadership principles and prepare STAR format stories for each one."
        }
    ],
    "Meta": [
        {
            icon: "fa-building",
            title: "Company Culture",
            content: "Meta values moving fast, being bold, and focusing on impact. Their culture emphasizes open communication and innovation."
        },
        {
            icon: "fa-comments",
            title: "Interview Style",
            content: "Meta interviews typically include coding rounds, system design discussions, and behavioral questions. They look for problem-solving skills and cultural fit."
        },
        {
            icon: "fa-lightbulb",
            title: "Preparation Tip",
            content: "Research Meta's product developments and be prepared to discuss how you would improve their existing products."
        }
    ],
    "Adobe": [
        {
            icon: "fa-building",
            title: "Company Culture",
            content: "Adobe values creativity, innovation, and exceptional experiences. They emphasize collaboration and inclusivity."
        },
        {
            icon: "fa-comments",
            title: "Interview Style",
            content: "Adobe interviews often include technical assessments, portfolio reviews (for design roles), and cultural fit questions."
        },
        {
            icon: "fa-lightbulb",
            title: "Preparation Tip",
            content: "Familiarize yourself with Adobe's products and how they integrate with each other in creative workflows."
        }
    ],
    "Salesforce": [
        {
            icon: "fa-building",
            title: "Company Culture",
            content: "Salesforce emphasizes their 'Ohana' culture and values of trust, customer success, innovation, and equality."
        },
        {
            icon: "fa-comments",
            title: "Interview Style",
            content: "Salesforce interviews typically include role-specific technical questions, scenario-based problem solving, and questions about teamwork."
        },
        {
            icon: "fa-lightbulb",
            title: "Preparation Tip",
            content: "Learn about Salesforce's 1-1-1 philanthropic model and their commitment to social responsibility."
        }
    ]
};

// DOM elements
const elements = {
    userNameEl: document.getElementById('user-name'),
    userSkillsEl: document.getElementById('user-skills'),
    updateSkillsBtn: document.getElementById('update-skills-btn'),
    skillsModal: document.getElementById('skills-modal'),
    closeSkillsModal: document.getElementById('close-skills-modal'),
    skillsGrid: document.getElementById('skills-grid'),
    saveSkillsBtn: document.getElementById('save-skills-btn'),
    resumeAnalyzer: document.getElementById('resume-analyzer'),
    resumeAnalysisComplete: document.getElementById('resume-analysis-complete'),
    analysisLoader: document.getElementById('analysis-loader'),
    jobContent: document.getElementById('job-content'),
    jobMatchCount: document.getElementById('job-match-count'),
    jobListingsEl: document.getElementById('job-listings'),
    jobSearch: document.getElementById('job-search'),
    companyFilter: document.getElementById('company-filter'),
    roleFilter: document.getElementById('role-filter'),
    matchFilter: document.getElementById('match-filter'),
    locationFilter: document.getElementById('location-filter'),
    applyFiltersBtn: document.getElementById('apply-filters'),
    interviewModal: document.getElementById('interview-modal'),
    closeModalBtn: document.getElementById('close-modal'),
    modalJobTitle: document.getElementById('modal-job-title'),
    questionsContent: document.getElementById('questions-content'),
    companyContent: document.getElementById('company-content'),
    skillsContent: document.getElementById('skills-content'),
    interviewTabs: document.querySelectorAll('.interview-tab'),
    tabContents: document.querySelectorAll('.tab-content'),
    notification: document.getElementById('notification'),
    currentPageEl: document.getElementById('current-page'),
    totalPagesEl: document.getElementById('total-pages'),
    prevPageBtn: document.getElementById('prev-page'),
    nextPageBtn: document.getElementById('next-page')
};

// State
let state = {
    currentPage: 1,
    itemsPerPage: 6,
    filteredJobs: [],
    selectedJob: null,
    skills: userData.skills,
    simulatedAnalysisTime: 3000, // 3 seconds simulation
};

// Initialize the application
function init() {
    // Set user name
    elements.userNameEl.textContent = userData.name;

    // Render user skills
    renderUserSkills();

    // Populate skills selection
    populateSkillsSelection();

    // Simulate resume analysis
    simulateResumeAnalysis();

    // Add event listeners
    attachEventListeners();
}

// Render user skills
function renderUserSkills() {
    elements.userSkillsEl.innerHTML = '';
    
    state.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = `skill-pill ${skill.primary ? 'primary' : ''}`;
        skillElement.innerHTML = `
            ${skill.name}
            <span class="skill-level">${skill.level}</span>
        `;
        elements.userSkillsEl.appendChild(skillElement);
    });
}

// Populate skills selection modal
function populateSkillsSelection() {
    elements.skillsGrid.innerHTML = '';
    
    allSkills.forEach(skill => {
        const userHasSkill = state.skills.some(s => s.name === skill);
        
        const skillCheckbox = document.createElement('div');
        skillCheckbox.className = 'skill-checkbox';
        skillCheckbox.innerHTML = `
            <input type="checkbox" id="skill-${skill.toLowerCase().replace(/\s/g, '-')}" 
                   name="skill-${skill.toLowerCase().replace(/\s/g, '-')}" 
                   ${userHasSkill ? 'checked' : ''}>
            <label for="skill-${skill.toLowerCase().replace(/\s/g, '-')}">${skill}</label>
        `;
        elements.skillsGrid.appendChild(skillCheckbox);
    });
}

// Simulate resume analysis
function simulateResumeAnalysis() {
    setTimeout(() => {
        elements.resumeAnalyzer.classList.add('hidden');
        elements.analysisLoader.classList.add('hidden');
        elements.resumeAnalysisComplete.classList.remove('hidden');
        elements.jobContent.classList.remove('hidden');
        
        // Filter jobs based on user skills
        filterJobsBySkills();
        
        // Update job match count
        elements.jobMatchCount.textContent = state.filteredJobs.length;
        
        // Render job listings
        renderJobListings();
    }, state.simulatedAnalysisTime);
}

// Filter jobs based on user skills
function filterJobsBySkills() {
    // Get user skill names
    const userSkillNames = state.skills.map(skill => skill.name);
    
    // Calculate match percentage for each job
    state.filteredJobs = jobListings.map(job => {
        // Calculate how many of the job's required skills the user has
        const matchingSkills = job.requiredSkills.filter(skill => 
            userSkillNames.includes(skill)
        );
        
        // Calculate match percentage
        const matchPercentage = Math.round(
            (matchingSkills.length / job.requiredSkills.length) * 100
        );
        
        // Add calculated match percentage to the job
        return {
            ...job,
            calculatedMatchPercentage: matchPercentage
        };
    }).sort((a, b) => b.calculatedMatchPercentage - a.calculatedMatchPercentage);
}

// Apply filters to job listings
function applyFilters() {
    const searchTerm = elements.jobSearch.value.toLowerCase();
    const companyFilter = elements.companyFilter.value;
    const roleFilter = elements.roleFilter.value;
    const matchFilter = parseInt(elements.matchFilter.value) || 0;
    const locationFilter = elements.locationFilter.value;
    
    // Filter jobs by skills first
    filterJobsBySkills();
    
    // Apply additional filters
    state.filteredJobs = state.filteredJobs.filter(job => {
        // Search term filter
        const matchesSearch = 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.requiredSkills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        // Company filter
        const matchesCompany = !companyFilter || job.company === companyFilter;
        
        // Role filter
        const matchesRole = !roleFilter || job.title.includes(roleFilter);
        
        // Match percentage filter
        const matchesPercentage = job.calculatedMatchPercentage >= matchFilter;
        
        // Location filter
        const matchesLocation = !locationFilter || job.location === locationFilter;
        
        return matchesSearch && matchesCompany && matchesRole && matchesPercentage && matchesLocation;
    });
    
    // Reset pagination
    state.currentPage = 1;
    
    // Update job match count
    elements.jobMatchCount.textContent = state.filteredJobs.length;
    
    // Render job listings
    renderJobListings();
}

// Render job listings with pagination
function renderJobListings() {
    elements.jobListingsEl.innerHTML = '';
    
    // Calculate pagination
    const totalPages = Math.ceil(state.filteredJobs.length / state.itemsPerPage);
    elements.totalPagesEl.textContent = totalPages || 1;
    elements.currentPageEl.textContent = state.currentPage;
    
    // Enable/disable pagination buttons
    elements.prevPageBtn.disabled = state.currentPage === 1;
    elements.nextPageBtn.disabled = state.currentPage === totalPages || totalPages === 0;
    
    // Get current page items
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const currentPageJobs = state.filteredJobs.slice(startIndex, endIndex);
    
    // Render each job card
    currentPageJobs.forEach(job => {
        const firstLetter = job.company.charAt(0);
        
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <span class="match-badge">${job.calculatedMatchPercentage}% Match</span>
            <div class="company-logo">${firstLetter}</div>
            <h3 class="job-title">${job.title}</h3>
            <div class="company-name">${job.company}</div>
            <div class="job-details">
                <div class="job-detail">
                    <i class="fas fa-map-marker-alt detail-icon"></i>
                    ${job.location}
                </div>
                <div class="job-detail">
                    <i class="fas fa-money-bill-wave detail-icon"></i>
                    ${job.salary}
                </div>
                <div class="job-detail">
                    <i class="fas fa-briefcase detail-icon"></i>
                    ${job.type}
                </div>
                <div class="job-detail">
                    <i class="fas fa-clock detail-icon"></i>
                    Posted ${job.posted}
                </div>
            </div>
            <div class="skills-list">
                ${job.requiredSkills.slice(0, 3).map(skill => 
                    `<span class="skill-tag">${skill}</span>`
                ).join('')}
                ${job.requiredSkills.length > 3 ? 
                    `<span class="skill-tag">+${job.requiredSkills.length - 3} more</span>` : ''}
            </div>
            <div class="job-card-actions">
                <button class="action-button prepare-button" data-job-id="${job.id}">
                    Prepare for Interview
                </button>
                <button class="action-button save-button" data-job-id="${job.id}">
                    <i class="far fa-bookmark"></i>
                </button>
            </div>
        `;
        
        elements.jobListingsEl.appendChild(jobCard);
        
        // Add event listener for prepare button
        jobCard.querySelector('.prepare-button').addEventListener('click', () => {
            openInterviewModal(job);
        });
        
        // Add event listener for save button
        jobCard.querySelector('.save-button').addEventListener('click', event => {
            const button = event.currentTarget;
            button.innerHTML = '<i class="fas fa-bookmark"></i>';
            showNotification('Job saved to your favorites!');
        });
    });
    
    // Show message if no jobs found
    if (currentPageJobs.length === 0) {
        elements.jobListingsEl.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3>No matching jobs found</h3>
                <p style="color: #666; margin-top: 10px;">Try adjusting your filters or adding more skills to your profile.</p>
            </div>
        `;
    }
}

// Open interview preparation modal
function openInterviewModal(job) {
    state.selectedJob = job;
    elements.modalJobTitle.textContent = `${job.title} at ${job.company}`;
    elements.interviewModal.style.display = 'flex';
    
    // Render each tab content
    renderQuestionsTab();
    renderCompanyTab();
    renderSkillsTab();
    
    // Set focus on the first tab
    document.querySelector('.interview-tab[data-tab="questions"]').click();
    
    // Prevent scrolling of the body
    document.body.style.overflow = 'hidden';
}

// Render questions tab content
function renderQuestionsTab() {
    elements.questionsContent.innerHTML = '';
    
    // Determine which questions to show based on job title
    let jobType = "Frontend Developer"; // Default
    
    if (state.selectedJob.title.includes("Frontend") || state.selectedJob.title.includes("UI Developer")) {
        jobType = "Frontend Developer";
    } else if (state.selectedJob.title.includes("Backend")) {
        jobType = "Backend Developer";
    } else if (state.selectedJob.title.includes("Full Stack") || state.selectedJob.title.includes("MERN")) {
        jobType = "Full Stack Developer";
    } else if (state.selectedJob.title.includes("Data") || state.selectedJob.title.includes("ML")) {
        jobType = "Data Scientist";
    } else if (state.selectedJob.title.includes("UX") || state.selectedJob.title.includes("Design")) {
        jobType = "UX Designer";
    }
    
    // Get corresponding questions
    const questions = interviewQuestions[jobType] || interviewQuestions["Frontend Developer"];
    
    // Render each question
    questions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.innerHTML = `
            <div class="question">${index + 1}. ${q.question}</div>
            <div class="answer-hint"><strong>Hint:</strong> ${q.hint}</div>
            <textarea class="practice-answer" placeholder="Type your answer here..."></textarea>
        `;
        elements.questionsContent.appendChild(questionCard);
    });
    
    // Add job-specific advice
    const adviceSection = document.createElement('div');
    adviceSection.innerHTML = `
        <h3 style="margin: 30px 0 15px 0;">Preparation Advice for ${jobType}s</h3>
        <div class="question-card">
            <div style="margin-bottom: 10px;">
                <strong>Key Skills to Highlight:</strong> ${state.selectedJob.requiredSkills.join(', ')}
            </div>
            <div style="margin-bottom: 10px;">
                <strong>Prepare Examples Of:</strong> Previous projects where you've used these skills and overcome challenges.
            </div>
            <div>
                <strong>Technical Preparation:</strong> Review fundamentals related to ${state.selectedJob.requiredSkills.slice(0, 3).join(', ')} and be ready to solve practical problems.
            </div>
        </div>
    `;
    elements.questionsContent.appendChild(adviceSection);
}

// Render company tab content
function renderCompanyTab() {
    elements.companyContent.innerHTML = '';
    
    // Get company insights
    const insights = companyInsights[state.selectedJob.company] || companyInsights["Google"];
    
    // Render each insight
    insights.forEach(insight => {
        const insightElement = document.createElement('div');
        insightElement.className = 'company-insight';
        insightElement.innerHTML = `
            <div class="company-insight-icon">
                <i class="fas ${insight.icon}"></i>
            </div>
            <div>
                <h3 style="margin-bottom: 10px;">${insight.title}</h3>
                <p>${insight.content}</p>
            </div>
        `;
        elements.companyContent.appendChild(insightElement);
    });
    
    // Add company-specific research section
    const researchSection = document.createElement('div');
    researchSection.innerHTML = `
        <h3 style="margin: 30px 0 15px 0;">Research Resources</h3>
        <div class="company-insight">
            <div class="company-insight-icon">
                <i class="fas fa-search"></i>
            </div>
            <div>
                <h3 style="margin-bottom: 10px;">Prepare With Research</h3>
                <p>Visit the company's career page, read recent news about ${state.selectedJob.company}, and check employee reviews on sites like Glassdoor to get more insights.</p>
            </div>
        </div>
    `;
    elements.companyContent.appendChild(researchSection);
}

// Render skills tab content
function renderSkillsTab() {
    elements.skillsContent.innerHTML = '';
    
    // Get job skills
    const jobSkills = state.selectedJob.requiredSkills;
    
    // Get user skills
    const userSkillNames = state.skills.map(skill => skill.name);
    
    // Render each skill assessment
    jobSkills.forEach(skill => {
        // Check if user has this skill
        const userHasSkill = userSkillNames.includes(skill);
        const matchPercentage = userHasSkill ? 
            Math.floor(Math.random() * 30) + 70 : // Random between 70-100
            Math.floor(Math.random() * 30) + 30;

            // Create skill assessment container
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill-assessment';
        
        // Create skill header with name and match percentage
        const skillHeader = document.createElement('div');
        skillHeader.className = 'skill-header';
        
        const skillName = document.createElement('h3');
        skillName.textContent = skill;
        
        const matchBadge = document.createElement('span');
        matchBadge.className = `match-badge ${matchPercentage >= 70 ? 'match-high' : 'match-low'}`;
        matchBadge.textContent = `${matchPercentage}% Match`;
        
        skillHeader.appendChild(skillName);
        skillHeader.appendChild(matchBadge);
        
        // Create progress bar
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = `${matchPercentage}%`;
        
        progressContainer.appendChild(progressBar);
        
        // Add recommendation if skill match is low
        if (matchPercentage < 70) {
            const recommendation = document.createElement('div');
            recommendation.className = 'skill-recommendation';
            recommendation.innerHTML = `
                <p><i class="fa fa-lightbulb-o"></i> Consider improving this skill to increase your match!</p>
                <button class="btn btn-sm btn-outline" onclick="showSkillResources('${skill}')">
                    Find Resources
                </button>
            `;
            
            // Add all elements to container
            skillContainer.appendChild(skillHeader);
            skillContainer.appendChild(progressContainer);
            skillContainer.appendChild(recommendation);
        } else {
            // Just add header and progress bar if match is good
            skillContainer.appendChild(skillHeader);
            skillContainer.appendChild(progressContainer);
        }
        
        // Add the skill container to the content area
        elements.skillsContent.appendChild(skillContainer);
    });
    
    // Add a summary section at the bottom
    const summarySection = document.createElement('div');
    summarySection.className = 'skills-summary';
    
    const matchCount = jobSkills.filter(skill => 
        userSkillNames.includes(skill)).length;
    
    const overallMatch = Math.floor((matchCount / jobSkills.length) * 100);
    
    summarySection.innerHTML = `
        <h3>Skills Match Summary</h3>
        <p>You have ${matchCount} of ${jobSkills.length} required skills</p>
        <div class="progress-container overall-progress">
            <div class="progress-bar" style="width: ${overallMatch}%"></div>
            <span class="progress-label">${overallMatch}% Overall Match</span>
        </div>
        <button class="btn btn-primary" onclick="showSkillsActionPlan()">
            Generate Skills Action Plan
        </button>
    `;
    
    elements.skillsContent.appendChild(summarySection);
}

// Function to show resources for improving a specific skill
function showSkillResources(skillName) {
    // Create modal or panel with resources
    const resourcesModal = document.createElement('div');
    resourcesModal.className = 'modal';
    resourcesModal.id = 'skillResourcesModal';
    
    // Sample resources data - in a real app, this would come from an API
    const resources = [
        { type: 'Course', name: `Complete ${skillName} Bootcamp`, platform: 'Udemy', link: '#' },
        { type: 'Book', name: `${skillName} for Professionals`, author: 'Jane Smith', link: '#' },
        { type: 'Tutorial', name: `Learn ${skillName} in 30 Days`, platform: 'FreeCodeCamp', link: '#' },
        { type: 'Community', name: `${skillName} Discord Group`, members: '5,000+', link: '#' }
    ];
    
    // Create modal content
    resourcesModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Resources to Improve ${skillName}</h2>
                <span class="close-modal" onclick="closeModal('skillResourcesModal')">&times;</span>
            </div>
            <div class="modal-body">
                <div class="resources-list">
                    ${resources.map(resource => `
                        <div class="resource-item">
                            <div class="resource-type">${resource.type}</div>
                            <div class="resource-info">
                                <h4>${resource.name}</h4>
                                <p>${resource.platform || resource.author || ''}</p>
                            </div>
                            <a href="${resource.link}" class="btn btn-sm">View</a>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn" onclick="closeModal('skillResourcesModal')">Close</button>
                <button class="btn btn-primary" onclick="trackSkillProgress('${skillName}')">
                    Track Progress
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(resourcesModal);
    resourcesModal.style.display = 'block';
}

// Function to generate a skills action plan
function showSkillsActionPlan() {
    // Create and show the action plan modal
    const actionPlanModal = document.createElement('div');
    actionPlanModal.className = 'modal';
    actionPlanModal.id = 'actionPlanModal';
    
    const jobSkills = state.selectedJob.requiredSkills;
    const userSkillNames = state.skills.map(skill => skill.name);
    const missingSkills = jobSkills.filter(skill => !userSkillNames.includes(skill));
    
    actionPlanModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Your Skills Action Plan</h2>
                <span class="close-modal" onclick="closeModal('actionPlanModal')">&times;</span>
            </div>
            <div class="modal-body">
                <p>Based on your profile and the ${state.selectedJob.title} role, here's a personalized action plan:</p>
                
                <h3>Skills to Develop</h3>
                <ol class="action-plan-list">
                    ${missingSkills.map((skill, index) => `
                        <li>
                            <h4>${skill}</h4>
                            <p>Estimated time to proficiency: ${4 + index} weeks</p>
                            <button class="btn btn-sm" onclick="showSkillResources('${skill}')">
                                Find Resources
                            </button>
                        </li>
                    `).join('')}
                </ol>
                
                <div class="timeline">
                    <h3>Suggested Timeline</h3>
                    <div class="timeline-chart">
                        <!-- Timeline visualization would go here -->
                        <div class="timeline-bar">
                            <div class="timeline-marker" style="left: 0%">Now</div>
                            <div class="timeline-marker" style="left: 50%">2 Months</div>
                            <div class="timeline-marker" style="left: 100%">4 Months</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn" onclick="closeModal('actionPlanModal')">Close</button>
                <button class="btn btn-primary" onclick="saveActionPlan()">Save Plan</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(actionPlanModal);
    actionPlanModal.style.display = 'block';
}

// Helper function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.remove();
    }
}

// Function to track progress on a skill
function trackSkillProgress(skillName) {
    // Implementation would go here
    console.log(`Tracking progress for: ${skillName}`);
    // Close the resources modal
    closeModal('skillResourcesModal');
    
    // Show a success message
    showNotification(`Started tracking progress for ${skillName}`);
}

// Function to save action plan
function saveActionPlan() {
    // Implementation would save the plan to user profile
    console.log('Saving action plan...');
    closeModal('actionPlanModal');
    showNotification('Action plan saved to your profile');
}

// Function to show notification
// Add this function after the init() function
function attachEventListeners() {
    // Skills modal events
    elements.updateSkillsBtn.addEventListener('click', () => {
        elements.skillsModal.style.display = 'flex';
    });
    
    elements.closeSkillsModal.addEventListener('click', () => {
        elements.skillsModal.style.display = 'none';
    });
    
    elements.saveSkillsBtn.addEventListener('click', () => {
        saveUserSkills();
        elements.skillsModal.style.display = 'none';
    });
    
    // Job filtering events
    elements.applyFiltersBtn.addEventListener('click', applyFilters);
    
    // Pagination events
    elements.prevPageBtn.addEventListener('click', () => {
        if (state.currentPage > 1) {
            state.currentPage--;
            renderJobListings();
        }
    });
    
    elements.nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(state.filteredJobs.length / state.itemsPerPage);
        if (state.currentPage < totalPages) {
            state.currentPage++;
            renderJobListings();
        }
    });
    
    // Interview modal events
    elements.closeModalBtn.addEventListener('click', () => {
        elements.interviewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Tab switching in interview modal
    elements.interviewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            elements.interviewTabs.forEach(t => t.classList.remove('active'));
            elements.tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
}

// Add this function to save user skills
function saveUserSkills() {
    const updatedSkills = [];
    
    // Get all checked skills from the modal
    const checkboxes = elements.skillsGrid.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const skillName = checkbox.id.replace('skill-', '').replace(/-/g, ' ');
            
            // Check if skill already exists to preserve level
            const existingSkill = state.skills.find(s => s.name === skillName);
            
            if (existingSkill) {
                updatedSkills.push(existingSkill);
            } else {
                // Add as new skill with default values
                updatedSkills.push({
                    name: skillName,
                    level: 'Basic',
                    primary: false
                });
            }
        }
    });
    
    // Update state
    state.skills = updatedSkills;
    
    // Re-render skills and update job matches
    renderUserSkills();
    filterJobsBySkills();
    
    // Update job match count
    elements.jobMatchCount.textContent = state.filteredJobs.length;
    
    // Re-render job listings
    renderJobListings();
    
    // Show notification
    showNotification('Your skills have been updated!');
}

// Fix the job search functionality
elements.jobSearch.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        applyFilters();
    }
});

// Fix showNotification function which has issues
function showNotification(message) {
    elements.notification.textContent = message;
    elements.notification.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// Make sure to call init when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
