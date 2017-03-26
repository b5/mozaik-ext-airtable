/*
 * This file is part of the Mozaïk project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component, PropTypes }  from 'react'
import { WidgetListItem, WidgetAvatar } from 'mozaik/ui'


export const RecordPropType = PropTypes.shape({
    id:   PropTypes.string.isRequired,
    fields :  PropTypes.object.isRequired,
    // _links: PropTypes.shape({
    //     html: PropTypes.string.isRequired,
    // }).isRequired,
    // commit: PropTypes.shape({
    //     author: PropTypes.shape({
    //         login:      PropTypes.string.isRequired,
    //         avatar_url: PropTypes.string.isRequired,
    //         html_url:   PropTypes.string.isRequired,
    //     }),
    // }),
})


export default class Record extends Component {
    static propTypes = {
        record: RecordPropType.isRequired,
    }

    render() {
        const { record } = this.props
        const { fields } = record;

        return (
            <WidgetListItem
                title={(
                    <span>
                        <a target="_blank">{fields.Name}</a>&nbsp;
                    </span>
                )}
            />
        )
    }
}
