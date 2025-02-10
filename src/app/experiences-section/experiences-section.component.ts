import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface IJobExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experiences-section',
  imports: [CommonModule],
  templateUrl: './experiences-section.component.html',
  styleUrl: './experiences-section.component.css',
})
export class ExperiencesSectionComponent {
  jobExperiences: IJobExperience[] = [
    {
      title: 'Frontend developer',
      company: 'Bok Vietnam',
      duration: 'October 2024 - December 2024',
      responsibilities: [
        'Spearheaded the development of a user-friendly feature that enables medium and small factories to efficiently search for and reprint QR codes associated with their products.',
        'Design and development of comprehensive viewing pages for managing manufacturing orders specifically tailored for fabric factories.',
        'Worked closely with the backend development team to define and implement API specifications necessary for integrating new features with existing systems.',
        'Fostered effective communication between frontend and backend teams, facilitating a collaborative environment that enhanced overall project outcomes.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Niteco',
      duration: 'Aprl 2022 - August 2024',
      responsibilities: [
        'Development of the Electrolux EU Contact Us page, enhancing user engagement by providing a streamlined interface for customer inquiries.',
        'Created a Go-Landing page that effectively captures user interest and facilitates easy navigation to key services and information.',
        'Spearheaded the development of an online booking process tailored for Electrolux customers, simplifying appointment scheduling for repairs and services.',
        'Designed intuitive repair pages that guide users through selecting repair types, service categories, and available time slots, enhancing the overall customer experience.',
        'Worked closely with the backend development team to define API requirements essential for integrating new features into existing systems.',
        'Implemented best practices in user experience (UX) design, ensuring that both pages are responsive and optimized for various devices, resulting in improved accessibility and customer satisfaction.',
        'Collaborated with cross-functional teams to gather requirements and feedback, iterating on designs to meet business objectives and user needs.',
        'Actively sought feedback from clients post-deployment to ensure solutions met their expectations and made necessary adjustments based on their input.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'CMC Global',
      duration: 'Apirl 2021 - Apirl 2022',
      responsibilities: [
        'Collaborated effectively with a diverse team of 17 professionals, fostering a cooperative environment to achieve project goals in the logistics sector.',
        'Engaged in regular team meetings to discuss progress, address challenges, and strategize for upcoming tasks, ensuring alignment and efficient workflow.',
        'Developed a comprehensive document management system to streamline the handling of logistics documentation, enhancing accessibility and organization.',  
        'Collaborated closely with the backend (BE) team to connect APIs essential for integrating various logistics applications and services.'     
      ],
    },
    {
      title: 'Frontend developer',
      company: 'VMO HOLDINGS ',
      duration: 'October 2020 - April 2021',
      responsibilities: [
        'Collaborated with a focused team of 4 professionals to enhance the efficiency of medical management systems, ensuring effective communication and streamlined project execution.',
        'Independently designed and developed a user-friendly interface for the Profile page, enabling efficient management of patient and doctor information.',
        'Developed functionalities that facilitate comprehensive management of patient and doctor profiles, including personal information, medical history, and appointment scheduling.',
      ],
    },
  ];
}
