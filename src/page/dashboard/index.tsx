import DisplayCard from "../../components/display-card";
import DoughnutComp from "../../components/doughnut";
import LineChartComp from "../../components/line-chart";
import ProductTable from "../../components/product-table";

const Dashboard = () => {
    return(
        <>
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 my-3">
                    <DisplayCard />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 my-3">
                    <DisplayCard />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 my-3">
                    <DisplayCard />
                </div>
            </div>

            <div className="row my-5">
                <div className="col-md-8 col-sm-12 my-2">
                    <div className="card border-0">
                        <div className="card-body card-primary">
                            <h5 className="my-2">Reports  For each month</h5>
                            <div className="text-center">
                                <LineChartComp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 my-2">
                    <div className="card border-0">
                        <div className="card-body card-primary">
                            <h5 className="my-2">Analytics</h5>
                            <div className="text-center">
                                <DoughnutComp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-12">
                    <ProductTable />
                </div>
            </div>
        </>
    )
}

export default Dashboard;