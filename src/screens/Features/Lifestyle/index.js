import React from "react";
import cn from "classnames";
import Link from "next/link";
import Slider from "react-slick";
import styles from "./Lifestyle.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
    {
        title: "Tracking",
        image: "/images/content/app-tracking-feature@x.png",
        image2x: "/images/content/app-tracking-feature@x.png",
        content:
            "Effortlessly log symptoms, mood, meds, meals, and more, either manually or through device integration. Customize tracking forms to suit your needs and expand with additional fields for a comprehensive health overview.",
    },
    {
        title: "Insights",
        image: "/images/content/app-insights.png",
        image2x: "/images/content/app-insights.png",
        content:
            "Gain valuable insights through intuitive reports and visualizations showcasing your health data trends over time. Understand how different factors interrelate, influencing outcomes. Analyze trends and easily share summaries with your healthcare providers.",
    },
    {
        title: "Care Plans",
        image: "/images/content/app-drink.png",
        image2x: "/images/content/app-drink.png",
        content:
            "Craft personalized care plans, setting health goals, and customizing tracking forms and reminders. Choose from condition-specific templates or create your own.",
    },
    {
        title: "Care Teams",
        image: "/images/content/app-caregivers.png",
        image2x: "/images/content/app-caregivers.png",
        content:
            "Invite and manage healthcare providers on your team, ensuring centralized communication and access control. Collaborate efficiently through in-app messaging, streamlining healthcare professionals' coordination for optimal care",
    },
    {
        title: "Education",
        image: "/images/content/app-education.png",
        image2x: "/images/content/app-education.png",
        content:
            "Access a rich library of health resources, including videos, podcasts, research summaries, and care guides covering various conditions. Engage in forums, save favorites, and ask experts questions for informed decision-making",
    },
    {
        title: "Social Media",
        image: "/images/content/app-socialmedia.png",
        image2x: "/images/content/app-socialmedia.png",
        content:
            "Engage in user interaction via a social feed, interest-based user groups, and a Q&A section. Interact through comments, likes, and profile activity views while adhering to community guidelines enforced by moderation tools",
    },
    {
        title: "Health Data Profile",
        image: "/images/content/app-history.png",
        image2x: "/images/content/app-history.png",
        content:
            "Manage diverse health information, from medical history to test results, with a customizable and shareable platform for healthcare providers. Integrate medical records seamlessly for continuous tracking and care",
    },
    {
        title: "Advanced Analytics",
        image: "/images/content/app-plots.png",
        image2x: "/images/content/app-plots.png",
        content:
            "Leverage AI and machine learning for personalized health insights. Identify trends, correlations, and outliers across health variables. Receive analysis guidance, natural language summaries, benchmarks, and evidence-based predictions",
    },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => <button {...props}>{children}</button>;

const Lifestyle = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: (
            <SlickArrow>
                <Icon name="arrow-next" size="14" />
            </SlickArrow>
        ),
        prevArrow: (
            <SlickArrow>
                <Icon name="arrow-prev" size="14" />
            </SlickArrow>
        ),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 100000,
                settings: "unslick",
            },
        ],
    };

    return (
        <div className={cn("section-pb", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("stage-small", styles.stage)}>explore the app</div>
                    <h2 className={cn("h2", styles.title)}>Fit for your life style</h2>
                    <div className={styles.info}>
                        Get started with free weeks of unlimited check-in functions, care plans, and insights.{" "}
                    </div>
                    {/* <Link className={cn("button-stroke", styles.button)} href="/class02-details">
                        <span>Join a class today</span>
                        <Icon name="arrow-right" size="10" />
                    </Link> */}
                </div>
                <div className={styles.wrap}>
                    <Slider className={cn("lifestyle-slider", styles.slider)} {...settings}>
                        {items.map((x, index) => (
                            <ScrollParallax className={styles.item} key={index}>
                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <div className={styles.details}>
                                            <div className={styles.number}>0{index + 1}.</div>
                                            <div className={styles.category}>{x.title}</div>
                                            <div className={styles.content}>{x.content}</div>
                                        </div>
                                    </div>
                                    <div className={styles.col}>
                                        <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Lifestyle" />
                                    </div>
                                </div>
                            </ScrollParallax>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Lifestyle;
