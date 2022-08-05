import dropdown from '../../images/Vectordropdown.png';

const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 pt-3 pb-2">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="flex">
                            <h4>Welcome, Misa Choice</h4>
                        </div>

                        <div className="flex d-flex justify-content-between">
                            <p className="mx-3 pt-2"><small><b>Misa Choice</b></small></p>
                            <div className="mx-2">
                                <p className="py-2 px-3 bg-secondary rounded-circle text-light text-lg"><b>A</b></p>
                            </div>
                            <div className="mx-3 pt-2">
                                <img src={dropdown} alt="dropdown" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar;