import React from "react";
import Post from "src/screens/Article/Post";

const Download = () => {
    return (
        <>
            <Post
                title={"Tackling Obesity in Canadian Families"}
                subtitle={"Weight Woes: Navigating Familial Obesity Challenges in Canada"}
                main={
                    "Obesity is a progressive chronic disease, similar to diabetes or high blood pressure, which is characterized by abnormal or excessive fat accumulation that may impair health. Population health studies measure the prevalence of obesity using a crude measure called the Body Mass Index (BMI). Although this measure is helpful for population health surveillance, it is not a tool that can be used to clinically diagnose people with obesity. Obesity should be diagnosed by a qualified health professional using additional clinical tests and measures which the Falcon application of Black phoenix technology company developed for their  costumer. Based on existing population surveillance studies, the prevalence of obesity in Canada has increased significantly over the past three decades. According to the 2014 Canadian Community Health Survey, over 5 million adults have obesity and according to the 2015 Canadian Health Measures Survey, 30% or more than one in three adults in Canada has obesity and may require medical support to manage their disease. As a leading cause of type 2 diabetes, high blood pressure, heart disease, stroke, arthritis, cancer and other important health problems, obesity can have serious impacts on those who live with it. It is estimated that one in 10 premature deaths among Canadian adults age 20 to 64 is directly attributable to obesity. By using the falcon application, users can control their body weight, decrease the fat mass and add muscle to increasing the basal metabolic. Beyond its effects on overall health and well-being, obesity also affects peoples’ overall social and economic well-being due to the pervasive social stigma associated with it. As common as other forms of discrimination — including racism — weight bias and stigma can increase morbidity and mortality. Obesity stigma translates into significant inequities in access to employment, healthcare and education, often due to widespread negative stereotypes that persons with obesity are lazy, unmotivated or lacking in self-discipline. As it obvious, users can take mental and psychological support for their spiritual and mental issues from falcon application. Also, this application can help to have better life style and medical cost."
                }
                pic={"/images/content/obesity.jpg"}
                link={"https://obesitycanada.ca/obesity-in-canada"}
                linkTitle="www.obesitycanada.ca"
            />
        </>
    );
};

export default Download;
