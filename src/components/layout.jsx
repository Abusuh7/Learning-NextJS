import Footer from "./footer/index.jsx";
import Header from "./header/index.jsx";

export default function Layout({ children }) {
    return (
        <>
        <Header />
        <div>
            {children}
        </div>
        <Footer />
        </>
    )
}