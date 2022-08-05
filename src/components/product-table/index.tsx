
import calendar from '../../images/Calendar.png';
import userAvatar from '../../images/frameuser.png';
import productImage from '../../images/product.png';
import { Product, products } from './products';


const ProductTable = () => {
    return (
        <>
            <div className="card border-0">
                <div className="card-body">
                    <p className="card-title">Recent Order</p>
                    <table className="table border-0 table-hover table-borderless table-responsive-md">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Order No</th>
                                <th>Product Name</th>
                                <th>Buyer</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products && products.map((item: Product, index: number) => {
                                    return <tr key={index}>
                                            <td><input type="checkbox" /></td>
                                            <td>{item?.orderNum}</td>
                                            <td>
                                                <span className='mr-2'>
                                                    <img src={productImage} alt="product" />
                                                </span>
                                                <span>{item?.name}</span>
                                            </td>
                                            <td>
                                                <span className='mr-2'>
                                                    <img src={userAvatar} alt="user" />
                                                </span>
                                                <span>{item?.buyer}</span>
                                            </td>
                                            <td>
                                                <span className='mr-2'>
                                                    <img src={calendar} alt="date" />
                                                </span>
                                                <span>{item?.date}</span>
                                            </td>
                                            <td>
                                                <span className={`alert ${item.status === 'Successful' ? 'alert-success text-success' : 'alert-primary text-primary'} py-1 px-4`} style={{borderRadius: "15px"}}>{item?.status}</span>
                                            </td>
                                        </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductTable;