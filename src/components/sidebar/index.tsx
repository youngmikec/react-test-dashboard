import dashboardIcon from '../../images/Categorydashboard.png';
import productIcon from '../../images/Notificationnotification.png';
import orderIcon from '../../images/Activityorders.png';
import settingIcon from '../../images/Settingsettings.png';


const SideBar = () => {
    const badgeStyle = {
        height: '23px',
        borderRadius: '445%',
        padding: '0 0.4rem',
    }
    return (
        <>
            <div className="bg-light h-100">
                <div className="row">
                    <div className="col-12 mt-5">
                        <hr />
                        <div className="py-3 text-right">
                            <div className="text-primary my-4 d-flex justify-content-center">
                                <span className='pl-5 mr-2 active'>
                                    <img src={dashboardIcon} alt="dashboard" />
                                </span>
                                <p>Dashboard</p>
                            </div>
                            <div className="my-4 d-flex justify-content-start">
                                <span className='pl-5 mr-2'>
                                    <img src={productIcon} alt="product" />
                                </span>
                                <p>Product</p>
                            </div>
                            <div className="my-4 d-flex justify-content-start">
                                <span className='pl-5 mr-2'>
                                    <img src={orderIcon} alt="order" />
                                </span>
                                <p>Orders</p>
                                <span className=' alert-danger text-danger ml-2' style={badgeStyle} >10</span>
                            </div>
                            <div className="my-4 d-flex justify-content-start">
                                <span className='pl-5 mr-2'>
                                    <img src={orderIcon} alt="order" />
                                </span>
                                <p>Customers</p>
                            </div>
                            <div className="my-4 d-flex justify-content-start">
                                <span className='pl-5 mr-2'>
                                    <img src={settingIcon} alt="setting" />
                                </span>
                                <p>Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;