import React from "react";
import Link from "next/link";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./History.module.sass";

const items = [
    {
        url: "/obesity-app",
        title: "Tackling Obesity in Canadian Families",
        content:
            "Explore the complexities of obesity within Canadian families as they confront the challenges and seek solutions for a healthier future",
        image: "url('/images/content/obesity.jpg')",
        status: "pink",
        statusContent: "new",
    },
    {
        url: "/hypertension-app",
        title: "Hypertension Control: Tech-Enhanced Health Management",
        content:
            "Addressing the Global Epidemic: Hypertension's Impact on Mortality and Quality of Life, and the Role of Innovative Health Apps in Management and Prevention",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        url: "/diabetes-app",
        title: "Diabetes in Canada",
        content: "Navigating the Landscape: Unveiling the Realities and Solutions of Diabetes in Canada",
        image: "url('/images/content/diabetes.jpg')",
        status: "green",
        statusContent: "diabetes",
    },
];

const History = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <div className={styles.history}>
            <div className={styles.wrap}>
                <Slider className="history-slider" {...settings}>
                    {items.map((x, index) => (
                        <div className={styles.slide} key={index}>
                            <div className={cn("history-item", styles.item)}>
                                <div className={styles.preview} style={{ backgroundImage: x.image }}></div>
                                <div className={styles.details}>
                                    <div
                                        className={cn(
                                            {
                                                "status-pink": x.status === "pink",
                                            },
                                            {
                                                "status-green": x.status === "green",
                                            },
                                            styles.status
                                        )}
                                    >
                                        {x.statusContent}
                                    </div>
                                    <div className={styles.title}>{x.title}</div>
                                    <div className={styles.content}>{x.content}</div>
                                    <Link href={x.url} className={cn("button-small", styles.button)}>
                                        Read full story
                                    </Link>
                                </div>
                                <div className={styles.position}>{x.position}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default History;
