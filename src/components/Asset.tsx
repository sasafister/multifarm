import React from 'react';
import axios from 'axios';

interface DataItems {
  auditInfo: string;
  asset: string;
  aprWeekly?: number;
  aprDaily?: number;
}

interface ResultData {
  data: DataItems,
}

// ETH_Compound__USDC
const ASSETID = 'BSC_Ellipsis__3EPS'

export default class Asset extends React.Component {
  api: string = `https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000`
  state: ResultData = {
    data: {
        asset: 'Nothing found',
        auditInfo: ''
    }
  }

  componentDidMount() {
    axios.get(this.api)
      .then(res => {
        const data = res.data.data.filter((item: any) => item.assetId === ASSETID)[0]
        if (data) {
            this.setState({ data });
        }
    })
  }

  render() {
    return (
      <ul>
       { 
        <li>Asset:
          <a href={this.state.data.auditInfo} target="_blank" className='link'>
            <strong>{this.state.data.asset}</strong>
          </a>
        </li>
       }
      </ul>
    )
  }
}