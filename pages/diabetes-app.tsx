import React from "react";
import Post from "src/screens/Article/Post";

const Download = () => {
    return (
        <>
            <Post
                title={"Diabetes in Canada"}
                subtitle={"Escalating Diabetes Rates Call for Urgent Action"}
                main={
                    "Diabetes Canada released new 2022 figures that show the continued rising trend of diabetes rates in Canada with no signs of leveling or decreasing. Diabetes continues to affect more Canadians than ever before and reasserts the need for further investment into diabetes research to help turn the tide. The new diabetes figures show a steady, continued increase in diabetes in our country with 11.7 million Canadians living with diabetes or prediabetes,” says Laura Syron, President and CEO of Diabetes Canada. “These figures reaffirm our dedication to funding leading-edge research to advance medical innovations and find a cure to end diabetes. ”Using the new technology just like the tracking application and health recoder similar Falcon app of Black pheoinx tech, canadians can alleviate and cotroll the side effect and  prevalence of diabetes Today, there are more than 5.7 million Canadians living with diabetes (type 1 & type 2 diagnosed + type 2 undiagnosed), however, there are 11.7 million Canadians living with diabetes or prediabetes—a condition that, if left unmanaged, can develop into type 2 diabetes. It is also costing the healthcare system $30 billion per year to treat people with diabetes. The high prevalence of diabetes and its overwhelming impact in our communities and health-care system mean that we must further diabetes research. Black phoenix can control the diabetes person and also help the canadian to alleviate the risk of diabetes."
                }
                pic={"/images/content/diabetes.jpg"}
                link={
                    "https://www.diabetes.ca/media-room/press-releases/diabetes-rates-continue-to-climb-in-canada#:~:text=Today%2C%20there%20are%20more%20than,develop%20into%20type%202%20diabetes"
                }
                linkTitle="www.diabetes.ca"
            />
        </>
    );
};

export default Download;
