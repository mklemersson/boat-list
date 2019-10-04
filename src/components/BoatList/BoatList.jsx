import React from 'react';
import BoatListItem from './BoatListItem';
import BoatApiService from '../../services/BoatApiService';

class BoatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {},
            activeBoats: [],
            boats: []
        };
    }

    async componentDidMount() {
        const activeBoats = await BoatApiService.getActiveBoats();

        this.setState({ boats: activeBoats, activeBoats });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                    </div>
                </div>

                <div className="row">
                    <div className={this.props.containerClass}>
                        {this.state.boats.map(item => <BoatListItem key={item.id} boat={item} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default BoatList;
