import Home from "./home";

export default Home;

export async function getStaticProps() {
    const metadata = {
        title: "black phoenix, falcon, falcon app",
        description: "",
    };

    return {
        props: {
            metadata,
        },
        revalidate: 60,
    };
}
