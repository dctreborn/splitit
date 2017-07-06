import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Badge from "material-ui/Badge";
import Chip from "material-ui/Chip";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import AddBill from "./AddBill";

class Bills extends Component {
    constructor(props){
        super(props);
        this.state = {
          isVisible: false  
        };
        this.addBill = this.addBill.bind(this);
        this.listBills = this.listBills.bind(this);
        this.showBillAdd = this.showBillAdd.bind(this);
    }
        
    //addbill fields may be retained; to solve
    listBills(){
        //show minus sign next to each name with delete db method
        return this.props.bills.map((i)=>{
            return(
                <TableRow>
                    <TableRowColumn>{i.name}</TableRowColumn>
                    <TableRowColumn>{i.cost}</TableRowColumn>      
                </TableRow>  
            );
        });
    }

    addBill() {
        this.setState({isVisible: !this.state.isVisible});
    }

    showBillAdd() {
        console.log("showBillAdd");
        if (this.state.isVisible) {
            return(
                <AddBill bills={this.props.bills}/>
            );
        } else {
            console.log("no render");
            return null;
        }
    }

    totalBill(){
        let total = 0;
        this.props.bills.map((i)=>{
            total += i.cost;
        })
        return total;
    }

	render(){
        return(
            <div className="col-md-6">
                <Card>
                    <CardTitle title={
                        <Badge                                                  
                            badgeContent={this.props.bills.length}
                            primary={true}
                        >
                        "Bills"
                        </Badge>
                        } subtitle="manage roommates"/>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Bill</TableHeaderColumn>
                                <TableHeaderColumn>Amount</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.listBills()}
                        </TableBody>                           
                    </Table>
                    <Divider/>
                    <CardText>
                        Total Bill: {this.totalBill()}
                    </CardText>
                    <Divider/>
                    <CardActions>
                        <div onClick={this.addBill}>
                            <RaisedButton label={this.state.isVisible ? "Close" : "Add Bill"}/>
                        </div>
                    </CardActions>
                    {this.showBillAdd()}
                </Card>
            </div>
        );
    }
	

}

export default Bills;