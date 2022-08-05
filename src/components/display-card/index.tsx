import './styles.css';
import { DisplayCardType } from './type';



type Props = {
    data: DisplayCardType;
}

const DisplayCard = ({data}: Props) => {
    return(
        <>
            <div className="card border-0 bg-primary">
                <div className="card h-max-content border-0 -mt-3">
                    <div className={`card-body card-${data.type}`}>
                        <div className="d-flex justify-between">
                            <div className="flex-1">
                                <div className={`rounded-circle alert alert-${data.type} p-4`}>
                                    <img src={
                                        data.img
                                    } width="27.82px" height="19.61px" alt="package" />
                                </div>
                            </div>
                            <div className="flex-1 px-1 m-1">
                                <p className='text-sm'>{data?.title}</p>
                                <h4>{data?.data}</h4>
                            </div>
                            <div className="flex-1 px-1 ml-4">
                                <p className='text-success text-xs text-right'>
                                    <small><b>{data?.itemsAdded} {data?.itemsLabel}</b></small>
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