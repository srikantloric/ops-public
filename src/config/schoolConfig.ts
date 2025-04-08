import { SchoolInfo } from "../types/schoolinfo";

export const schoolConfig: SchoolInfo = {
    schoolName: "Orient Public School",
    schoolAddress: "123 Education Lane, Knowledge City, KC 12345",
    schoolIamge: "https://www.alardpublicschool.com/cbse-school-hinjawadi-2025/assets/images/about.webp",
    aboutUs: {
        aboutUsContent: "Our school is dedicated to providing a holistic education that nurtures the mind, body, and spirit of every child.",
        aboutUsPoints: [
            {
                title: "Holistic Learning from Preschool to Grade XII",
                content: "A school that focuses on building character, nurturing skills, and achieving academic excellence."
            },
            {
                title: "Beyond Curricula",
                content: "We have collaborated with multiple top class sports academies to provide best in class facilities to our students.",
            },
            {
                title: "Personalized Attention",
                content: "With a low student-to-teacher ratio, we ensure that every child receives the attention they deserve.",
            },
            {
                title: "Innovative Teaching Methods",
                content: "We employ modern teaching techniques and technologies to make learning engaging and effective.",
            },
            {
                title: "Community Engagement",
                content: "We believe in the power of community and actively involve parents and local organizations in our activities.",
            },
        ],
        messages: [{
            messageBy: "Dr. Sarah Johnson",
            messageContent: "We strive to create an environment where every student can thrive and reach their full potential.",
            messageTitle: "Principal's Message",
            highlightedMessage: "Nurturing minds, building futures"
        }]
    },
    latestNews: "Annual Science Fair registration now open for grades 6-12",
    contactDetails: {
        email: "info@oxfordpublic.edu",
        phoneNumbers: ["+1-555-123-4567", "+1-555-987-6543"]
    },
    noticeBoard: [
        {
            createdAt: new Date("2025-04-01"),
            noticeContent: "Parent-Teacher Meeting scheduled for April 15th, 2025"
        }
    ],
    contactUsThumbnail: "/assets/images/contact-us-banner.jpg"
};