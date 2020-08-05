import React from 'react'
import { Block } from 'galio-framework'
import { ScrollView } from 'react-native'
import { getHeight } from 'utils/utils'
import { get } from 'lodash'
import moment from 'moment'
import { AssignmentDetailItem, AssignmentRate, AssignmentDocument } from '.'

/**
 * @param array data
 */
export default class AssignmentDetailData extends React.PureComponent {
  render() {
    const { onRate = () => {}, data = [] } = this.props
    const AssignmentName = get(data, 'AssignmentName')
    const AgencyName = get(data, 'AgencyName')
    const ProjectReference = get(data, 'ProjectReference')
    const PONumber = get(data, 'PONumber')
    const StartDate = get(data, 'StartDate') ? moment(get(data, 'StartDate'), 'DD-MM-YYYY').format('DD/MM/YYYY') : 'N/A'
    const EndDate = get(data, 'EndDate') ? moment(get(data, 'EndDate'), 'DD-MM-YYYY').format('DD/MM/YYYY') : 'N/A'
    const Status = get(data, 'Status')
    return (
      <Block style={{ paddingTop: 5 }}>
        <ScrollView style={{ paddingBomttom: getHeight(52) }}>
          <AssignmentDetailItem
            title="Assignment Name"
            value={AssignmentName}
          />
          <AssignmentDetailItem
            title="Agency Name"
            value={AgencyName}
          />
          <AssignmentDetailItem
            title="Project Reference"
            value={ProjectReference}
          />
          <AssignmentDetailItem
            title="PO Number"
            value={PONumber}
          />
          <AssignmentDetailItem
            title="Start Date"
            value={StartDate}
          />
          <AssignmentDetailItem
            title="End Date"
            value={EndDate}
          />
          <AssignmentDetailItem
            title="Status"
            value={Status}
            style={{ borderBottomWidth: 0 }}
          />
          <AssignmentRate onPress={onRate} />
          <AssignmentDocument />
        </ScrollView>
      </Block>
    )
  }
}
