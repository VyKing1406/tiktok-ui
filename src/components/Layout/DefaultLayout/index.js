import Header from './Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="contain">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
