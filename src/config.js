/*
 * This file is part of the Mozaïk project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const convict = require('convict')


const config = convict({
    airtable: {
        baseUrl: {
            doc:     'The airtable API base url.',
            default: 'https://api.airtable.com/v0',
            format:  String,
            env:     'AIRTABLE_BASE_URL'
        },
        appId: {
            doc:     'The airtable App Id',
            default: 'apps6l3sgNsC4WzOq',
            format:  String,
            env:     'AIRTABLE_APP_ID',
        },
        token: {
            doc:     'The airtable API token.',
            default: '',
            format:  String,
            env:     'AIRTABLE_API_TOKEN'
        }
    }
})


module.exports = config
