import DisplayCard from "../../components/display-card";
import { DisplayCardType } from "../../components/display-card/type";
import DoughnutComp from "../../components/doughnut";
import LineChartComp from "../../components/line-chart";
import ProductTable from "../../components/product-table";

import { displayCardsData } from "./data";

const Dashboard = () => {
    return(
        <>
            <div className="row my-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h4>Dashboard</h4>
                        <button className="btn btn-lg btn-primary text-light">Add New Product</button>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    displayCardsData && 
                    displayCardsData.map((item: DisplayCardType, index: number) => {
                        return <div key={index} className="col-md-4 col-sm-4 col-xs-12 my-3">
                            <DisplayCard data={item} />
                        </div>
                    })
                }
                
                
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