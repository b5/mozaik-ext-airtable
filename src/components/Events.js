/*
 * This file is part of the Mozaïk project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component, PropTypes } from 'react'
import Record, { RecordPropType }      from './Record'
import {
    TrapApiError,
    Widget,
    WidgetHeader,
    WidgetBody,
    WidgetLoader,
} from 'mozaik/ui'


export default class Events extends Component {
    static propTypes = {
        // repository: PropTypes.string.isRequired,
        title:      PropTypes.string,
        apiData:    PropTypes.shape({
            records: PropTypes.arrayOf(RecordPropType).isRequired
        }),
        apiError:   PropTypes.object,
    }

    static getApiRequest({ repository }) {
        return {
            id:     `airtable.events.${repository}`,
            params: { repository }
        }
    }

    render() {
        const { repository, title, apiData, apiError } = this.props

        let body = <WidgetLoader />
        let count
        if (apiData && !apiError) {
            count = apiData.records.length
            body = (
                <div>
                    {apiData.records.map((record, i) => (
                        <Record key={i} record={record}/>
                    ))}
                </div>
            )
        }

        return (
            <Widget>
                <WidgetHeader
                    title={title || 'Events'}
                    subject={title ? null : repository}
                    count={count}
                    icon="code-fork"
                />
                <WidgetBody>
                    <TrapApiError error={apiError}>
                        {body}
                    </TrapApiError>
                </WidgetBody>
            </Widget>
        )
    }
}
