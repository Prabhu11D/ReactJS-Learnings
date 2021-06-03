export interface job {
  id: number;
  title: string;
  company: string;
  experience: number;
  skills: string[];
  description: string;
}

export const jobs: job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'OneData Software Solutions',
    experience: 1,
    skills: [
      'html',
      'css',
      'Javascript',
      'TypeScript',
      'ReactJS',
      'React Native',
      'Redux',
    ],
    description:
      'We are looking for a qualified ReactJS developer to join our team. You will be working with the development team to develop and maintain high-quality web applications. Familiarity with RESTful APIs Familiarity with modern front-end build pipelines and tools. Experience with common front-end development tools such as Babel, Web pack, NPM etc. Experience to handle projects individually. Good communication skill expected.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'OneData Software Solutions',
    experience: 2,
    skills: [
      'html',
      'css',
      'Javascript',
      'NodeJS',
      'express',
      'mongoDB',
      'postgreSQL',
      'linux',
    ],
    description:
      'We are looking for a Great Node Developer who can work with our Team : You would be working as a Backend developer , You Need to Have In-Depth Knowledge of node.js framework , express js , proficiency in Restful APIs and API communication , database scheme creation , knowledge of user authentication and authorization , efficiency in code , implementing data protection , error handling , familiar with MVC framework , Please Note We Work on Mongodb ONLY .',
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    company: 'OneData Software Solutions',
    experience: 1,
    skills: [
      'html',
      'css',
      'Javascript',
      'React Native',
      'Flutter',
      'Android',
      'iOS',
    ],
    description:
      'We are looking for a Mobile APP Developer in React Native and with Knowledge of Back end Development with 1+years of experience. If you are passionate about technology and ready to learn and improve your skill set, then you are the person!',
  },
  {
    id: 4,
    title: 'Game Developer',
    company: 'OneData Software Solutions',
    experience: 2,
    skills: [
      'C#',
      'C++',
      'Maths',
      'Unity',
      'Photoshop',
      'illustrator',
      'Blender',
    ],
    description:
      'Plan and implement game functionality. Transform design specification into functional games.Communicate with other team members.Establish effective strategy and development pipeline.Design, build, and maintain efficient, reusable, and reliable code.Ensure the best performance, quality, and responsiveness of applications and games.Identify process and application bottlenecks and bugs Offer and implement solutions in a timely manner',
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'OneData Software Solutions',
    experience: 1,
    skills: [
      'Python',
      'Maths',
      'Tensorflow',
      'SQL',
      'Tableau',
      'R',
      'Excel',
      'Data Visulization',
      'Machine Learning',
    ],
    description:
      'We are seeking an experienced data scientist to build a python-based classification model prototype that analyses raw data files and establishes output data ranges across dimensions. This data model will deliver analytical results indicating type based on the inputted data. It should run on all new samples received in our cloud, accepting payloads and outputting staged-output scores. Outputs will be appended to existing record for review, analysis, and reporting. Sample data is currently in an AWS cloud which is where your model will reside and be deployed. Upon completion, the deployed model will automatically ingest, process new data samples received through a web app and stored in an AWS DB, outputting classification results. Results will classify/stratify into groups of cohorts.',
  },
  {
    id: 6,
    title: 'Game Developer',
    company: 'Unity',
    experience: 3,
    skills: [
      'C#',
      'C++',
      'Maths',
      'Unity',
      'Photoshop',
      'illustrator',
      'Blender',
    ],
    description:
      'Plan and implement game functionality. Transform design specification into functional games.Communicate with other team members.Establish effective strategy and development pipeline.Design, build, and maintain efficient, reusable, and reliable code.Ensure the best performance, quality, and responsiveness of applications and games.Identify process and application bottlenecks and bugs Offer and implement solutions in a timely manner',
  },
  {
    id: 7,
    title: 'Data Scientist',
    company: 'Google',
    experience: 1,
    skills: [
      'Python',
      'Maths',
      'Tensorflow',
      'SQL',
      'Tableau',
      'R',
      'Excel',
      'Data Visulization',
      'Machine Learning',
    ],
    description:
      'We are seeking an experienced data scientist to build a python-based classification model prototype that analyses raw data files and establishes output data ranges across dimensions. This data model will deliver analytical results indicating type based on the inputted data. It should run on all new samples received in our cloud, accepting payloads and outputting staged-output scores. Outputs will be appended to existing record for review, analysis, and reporting. Sample data is currently in an AWS cloud which is where your model will reside and be deployed. Upon completion, the deployed model will automatically ingest, process new data samples received through a web app and stored in an AWS DB, outputting classification results. Results will classify/stratify into groups of cohorts.',
  },
];
