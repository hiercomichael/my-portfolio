import react, {useState} from "react";
import Title from "./Title";
import ServicesBox from "./ServicesBox";

function Services(){
  return <div className="services">
      <Title title="SERVICES" />
      <div className="services-container">
        <ServicesBox servicesTitle= "Web Development" servicesDesc="Offering professional web development services to create visually stunning and functional websites and web applications tailored to your needs"/>
        <ServicesBox bgColorClass = "services-box--blue" servicesTitle= "Game Development" servicesDesc="Providing expert game development services to bring your ideas to life and create immersive and entertaining gaming experiences."/>
        <ServicesBox bgColorClass = "services-box--blue" servicesTitle= "UI/UX Design" servicesDesc="Specializing in UI/UX design services to craft intuitive and visually appealing user interfaces that enhance user satisfaction and engagement."/>
        <ServicesBox servicesTitle= "Web Design" servicesDesc="Delivering exceptional web design services to create visually captivating and user-friendly websites that leave a lasting impression."/>
        <ServicesBox servicesTitle= "Project Management" servicesDesc="Offering efficient project management services to ensure the successful planning, execution, and delivery of your projects, while maintaining clear communication and meeting your specific goals and objectives."/>
        <ServicesBox bgColorClass = "services-box--blue" servicesTitle= "App Development" servicesDesc="Providing top-notch app development services to transform your ideas into innovative and feature-rich mobile applications for iOS and Android platforms, ensuring seamless performance and user satisfaction."/>
      </div>
  </div>
}

export default Services;