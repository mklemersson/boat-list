import React from 'react';
import BoatListItem from './BoatListItem';
import BoatApiService from '../../services/BoatApiService';

class BoatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                size: {
                    selected: '',
                    options: [
                        { value: 'lt15', text: '< 15' },
                        { value: 'gte15', text: '>= 15' }
                    ]
                },
                year: {
                    selected: '',
                    options: [
                        { value: 'lt2010', text: '< 2010' },
                        { value: 'gte2010', text: '>= 2010' }
                    ]
                }
            },
            activeBoats: [],
            boats: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(event, filterName) {
        let filters = this.state.filters;
        filters[filterName].selected = event.target.value;

        this.setState({ filters });
    }

    handleFilterBySize() {
        console.log('Filtering by size');
    }

    async componentDidMount() {
        const activeBoats = await BoatApiService.getActiveBoats();

        this.setState({ boats: activeBoats, activeBoats });
    }

    render() {
        const boats = this.state.activeBoats.filter(item => {
            let matchSizeFilter = true;
            let matchYearFilter = true;
            
            if (this.state.filters.size.selected !== '') {
                if ((this.state.filters.size.selected === 'lt15' && item.length >= 15) ||
                    (this.state.filters.size.selected === 'gte15' && item.length < 15)
                ) {
                    matchSizeFilter = false;
                }
            }

            if (this.state.filters.year.selected !== '') {
                if ((this.state.filters.year.selected === 'lt2010' && item.year >= 2010) ||
                    (this.state.filters.year.selected === 'gte2010' && item.year < 2010)
                ) {
                    matchYearFilter = false;
                }
            }

            return matchSizeFilter && matchYearFilter;
        });

        return (
            <div className="container pt-3">
                <div className="row boat-fielter">
                    <div className="col-md-6 form-group">
                        <label htmlFor="boatFilterSize">Filter by <strong>size</strong></label>
                        <select className="form-control" name="filterSize" id="boatFilterSize"
                            onChange={(e) => this.handleFilter(e, 'size')}>
                            <option value="">Select filter</option>
                            {this.state.filters.size.options.map((item, index) => {
                                return <option key={index} value={item.value}>{item.text}</option>;
                            })}
                        </select>
                    </div>

                    <div className="col-md-6 form-group">
                        <label htmlFor="boatFilterYear">Filter by <strong>year</strong></label>
                        <select className="form-control" name="filterYear" id="boatFilterYear"
                            onChange={(e) => this.handleFilter(e, 'year')}>
                            <option value="">Select filter</option>
                            {this.state.filters.year.options.map((item, index) => {
                                return <option key={index} value={item.value}>{item.text}</option>;
                            })}
                        </select>
                    </div>
                </div>

                <div className="row">
                    <h4 className="text-right col-md-12 mt-3 mb-0">
                        We have found <strong>{boats.length}</strong> results for your search.</h4>
                </div>

                <div className="boat-list row">
                    {boats.map(item => <BoatListItem key={item.id} boat={item} />)}
                </div>
            </div>
        );
    }
}

export default BoatList;
