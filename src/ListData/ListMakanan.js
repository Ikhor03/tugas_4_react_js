import { Component } from "react";

class ListMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            datalist: this.props.img,
        }
    }
    render(){
        return(
            <div>
                <img src={this.state.datalist} alt='foto makanan' width="150" />
            </div>
        )
    }
}

export default ListMakanan;