'use client'
import CourseMethodsContainer from "@/components/home/CourseMethodsContainer";
import HeroContainer from "@/components/home/HeroContainer";
import InstructorContainer from "@/components/home/InstructorContainer";
import ServicesContainer from "@/components/home/ServicesContainer";
import DashboardTheme from "@/components/shared/theme/DashboardTheme";

export default function HomePage() {
    return (
        <DashboardTheme>
            <HeroContainer />
            <CourseMethodsContainer />
            <ServicesContainer />
            <InstructorContainer />
        </DashboardTheme>
    )
}