import React from "react";
import Post from "src/screens/Article/Post";

const Download = () => {
    return (
        <>
            <Post
                title={"Hypertension Control: Tech-Enhanced Health Management"}
                subtitle={"Voices of Resilience"}
                main={
                    "Globally, raised blood pressure is the leading risk factor for death, accounting for about 13% of all deaths, and it is the strongest risk factor for lost years of healthy life. Left untreated, hypertension can increase the risk of stroke, coronary artery disease, dementia, heart and kidney failure, and other chronic diseases. Managing hypertension through lifestyle modification such as falcon app for managing and controlling the blood pressure, check and evaluate the effective parameter and follow the trend of the BP can support the person. On the other hand, using of digital health application such as Black phoenix tracker can check the patient medications consumption and trend of blood pressure can help mitigate the outcomes."
                }
                pic={"/images/content/history-pic.png"}
                link={
                    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3255225/#:~:text=The%20crude%20prevalence%20was%20higher,%25%20CI%201.9%E2%80%932.0"
                }
                linkTitle="www.ncbi.nlm.nih.gov"
            />
        </>
    );
};

export default Download;
