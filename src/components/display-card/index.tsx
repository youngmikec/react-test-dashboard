import './styles.css';
import packageImage from '../../images/iconpackage.png';

const DisplayCard = () => {
    return(
        <>
            <div className="card border-0 bg-primary">
                <div className="card h-max-content border-0 -mt-3">
                    <div className="card-body card-success rounded-sm">
                        <div className="d-flex justify-between">
                            <div className="flex-1">
                                <div className='rounded-circle alert alert-primary p-4'>
                                    <img src={packageImage} width="27.82px" height="19.61px" alt="package" />
                                </div>
                            </div>
                            <div className="flex-1 px-1 m-1">
                                <p className='text-sm'>Total Product</p>
                                <h4>300</h4>
                            </div>
                            <div className="flex-1 px-1 ml-4">
                                <p className='text-success text-xs text-right'>
                                    <small><b>2 New Added</b></small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayCard;