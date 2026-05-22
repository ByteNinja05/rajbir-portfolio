import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, AfterViewInit {

  @ViewChild('contentContainer')
  contentContainer!: ElementRef;

  @ViewChildren('fadeRef')
  fadeElements!: QueryList<ElementRef>;

  constructor(private cdr: ChangeDetectorRef) {}

  /* HERO ROLES */

  roles = [
    'AI-Powered Full Stack Developer',
    'Machine Learning Enthusiast',
    'Angular & ASP.NET Developer',
    'Building Futuristic Digital Experiences'
  ];

  currentRole = this.roles[0];

  /* DASHBOARD */

  showDashboard = false;

  bootMessages = [
    'Initializing RajbirPortfolio...',
    'Loading AI modules...',
    'Connecting neural systems...',
    'Authenticating developer...',
    'Access Granted.'
  ];

  displayedMessages: string[] = [];

  /* PROJECTS */

  selectedProject: any = null;

  projects = [

    {
      title: 'Smart Grocery Management System',

      description:
        'AI-powered grocery management platform with budgeting, role-based dashboards, and smart recommendations.',

      tech: [
        'Angular',
        'ASP.NET Core',
        'SQL Server',
        'Azure OpenAI'
      ],

      status: 'Enterprise Experience',

      overview:
        'Developed a full stack Smart Grocery Management System that helps customers manage grocery lists, track budgets, receive AI-powered recommendations, and interact with a smart chatbot. The platform also provides separate dashboards for Admin and Seller with role-based access and management features.',

      architecture:
        'Angular Frontend → ASP.NET Core Web API → Service Layer → Entity Framework Core → SQL Server → Azure OpenAI Integration',

      challenges: [

        'Implementing role-based authentication and route protection',

        'Integrating Azure OpenAI for recommendations and chatbot functionality',

        'Managing frontend-backend API communication and dynamic UI updates',

        'Designing scalable CRUD operations for products and grocery lists',

        'Handling budget calculations and real-time updates'

      ],

      learnings: [

        'Full stack application development using Angular and ASP.NET Core',

        'REST API development and integration',

        'Database management using SQL Server and Entity Framework Core',

        'AI integration using Azure OpenAI APIs',

        'Authentication and authorization workflows',

        'Real-world software development lifecycle experience'

      ]
    },

    {
      title: 'Real-Time Face Attendance System',

      description:
        'AI-powered attendance automation system using real-time face recognition and FastAPI backend integration.',

      tech: [
        'Python',
        'OpenCV',
        'FaceNet',
        'FastAPI',
        'MongoDB'
      ],

      status: 'AI Engineering Project',

      overview:
        'Developed and deployed a real-time face recognition based attendance system to automate attendance marking. The system utilizes machine learning models for live face detection and recognition, enabling fast, contactless, and accurate attendance tracking while reducing manual errors.',

      architecture:
        'Python + OpenCV + FaceNet → FastAPI REST APIs → MongoDB Database → Attendance Management Workflow',

      challenges: [

        'Implementing accurate real-time face detection and recognition workflows',

        'Optimizing face embedding generation and matching performance',

        'Managing API communication between recognition modules and attendance services',

        'Handling secure storage of face embeddings and attendance records in MongoDB',

        'Reducing recognition latency for smoother real-time performance'

      ],

      learnings: [

        'Real-time computer vision system development using OpenCV',

        'Face recognition workflows using FaceNet embeddings',

        'REST API development and integration using FastAPI',

        'Database design and management using MongoDB',

        'Machine learning model integration into real-world applications',

        'Performance optimization for real-time AI systems'

      ]
    },

    {
      title: 'FIFA World Cup Analyzer & Predictor',

      description:
        'Machine learning based FIFA World Cup analysis and prediction system using historical data analytics and visualization techniques.',

      tech: [
        'Python',
        'Machine Learning',
        'SQL',
        'Data Analytics',
        'Visualization'
      ],

      status: 'Research & Analytics Project',

      overview:
        'Developed a FIFA World Cup analysis and prediction system focused on extracting insights from historical match data using machine learning, data preprocessing, and visualization techniques. The project involved analyzing team performance metrics, trends, and match statistics to generate predictive insights for future tournaments.',

      architecture:
        'Historical FIFA Dataset → Data Cleaning & Preprocessing → Exploratory Data Analysis → Machine Learning Models → Prediction & Visualization Pipeline',

      challenges: [

        'Cleaning and preprocessing inconsistent historical sports datasets',

        'Handling missing values and feature engineering for predictive analysis',

        'Selecting meaningful performance metrics for prediction models',

        'Designing visual analytics for trend identification and comparison',

        'Improving prediction accuracy using optimized feature selection techniques'

      ],

      learnings: [

        'Machine learning workflow implementation using real-world datasets',

        'Data preprocessing and feature engineering techniques',

        'Sports analytics and predictive modeling concepts',

        'Data visualization and trend analysis',

        'SQL integration for structured data handling',

        'Research-oriented problem solving and analytical thinking'

      ]
    },

    {
      title: 'AI Portfolio Assistant',

      description:
        'Experimental AI-inspired portfolio experience focused on interactive UI systems and engineering storytelling.',

      tech: [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'UI/UX Design'
      ],

      status: 'Under Development',

      overview:
        'Currently exploring and designing an AI-inspired interactive developer portfolio experience focused on modern UI engineering, project storytelling, and immersive user interaction patterns.',

      architecture:
        'Angular Frontend → Dynamic UI Components → Interactive Project System → Responsive User Experience Design',

      challenges: [

        'Designing meaningful AI-inspired interactions without overcomplicating user experience',

        'Creating scalable and reusable frontend component architecture',

        'Balancing futuristic visual design with professional presentation',

        'Building immersive project storytelling workflows',

        'Maintaining responsiveness and smooth UI transitions'

      ],

      learnings: [

        'Modern frontend architecture using Angular and TypeScript',

        'Interactive UI/UX design principles',

        'Component-driven frontend development',

        'Portfolio storytelling and engineering presentation',

        'Responsive design and smooth user interactions'

      ]
    }

  ];

  /* STATS */

  stats = [

    {
      value: '5+',
      label: 'Projects Built'
    },

    {
      value: '20+',
      label: 'Technologies'
    },

    {
      value: 'AI',
      label: 'Integrated Systems'
    },

    {
      value: 'Real-Time',
      label: 'Solutions'
    }

  ];

  /* EXPERIENCE */

  experiences = [

    {
      title: 'Winter Intern at Infosys',
      period: 'Dec 2025 to May 2026',
      description:
        'Worked on full-stack enterprise application development using Angular, ASP.NET Core, Entity Framework, and SQL Server.'
    },

    {
      title: 'Summer Intern at DJT Corporation and Investments',
      period: 'May 2025 to July 2025',
      description:
        'Developed AI-powered real-time face recognition attendance system using computer vision and machine learning.'
    },

    {
      title: 'Qutopia Quiz Society, KIIT',
      period: 'Leadership & Management',
      description:
        'Contributed to sponsorship, marketing, and event management operations for national-level quiz competitions and technical events.'
    }

  ];

  /* MOUSE GLOW */

  mouseX = 0;
  mouseY = 0;

  /* SIDEBAR */

  activeSection = 'dashboard';

  sidebarOpen = false;

  

private roleIndex = 0;

private charIndex = 0;


  /* INIT */

  async ngOnInit() {

    for (const msg of this.bootMessages) {

      await this.delay(1000);

      this.displayedMessages.push(msg);

      this.cdr.detectChanges();

    }

    await this.delay(1500);

    this.showDashboard = true;

   this.startTypingAnimation();

    this.cdr.detectChanges();

  }

  /* INTERSECTION OBSERVER */

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('visible');

          }

        });

      },

      {
        threshold: 0.15
      }

    );

    this.fadeElements.forEach((element) => {

      observer.observe(element.nativeElement);

    });

  }

  /* ROLE ROTATION */

  startTypingAnimation() {

  const type = () => {

    const currentText =
      this.roles[this.roleIndex];

    if (this.charIndex < currentText.length) {

      this.currentRole =
        currentText.substring(0, this.charIndex + 1);

      this.charIndex++;

      this.cdr.detectChanges();

      setTimeout(type, 70);

    } else {

      setTimeout(() => {

        this.roleIndex =
          (this.roleIndex + 1) % this.roles.length;

        this.charIndex = 0;

        this.currentRole = '';

        this.cdr.detectChanges();

        type();

      }, 1000);

    }

  };

  type();

}

  /* DELAY */

  delay(ms: number) {

    return new Promise(resolve => setTimeout(resolve, ms));

  }

  /* SCROLL */

  scrollToSection(sectionId: string) {

    this.activeSection = sectionId;

    const container = this.contentContainer.nativeElement;

    const element = document.getElementById(sectionId);

    if (element) {

      container.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth'
      });

    }

  }

  /* MOUSE TRACKING */

  onMouseMove(event: MouseEvent) {

    this.mouseX = event.clientX;

    this.mouseY = event.clientY;

  }

  /* PROJECT MODAL */

  openProject(project: any) {

    this.selectedProject = project;

  }

  closeProject() {

    this.selectedProject = null;

  }

  /* SIDEBAR */

  toggleSidebar() {

    this.sidebarOpen = !this.sidebarOpen;

  }

}