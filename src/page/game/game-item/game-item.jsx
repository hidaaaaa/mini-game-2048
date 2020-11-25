import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames'

GameItem.propTypes = {

};

function GameItem(listApp) {

    return (
        <React.Fragment>
            <tr>

                {listApp.listApp.listApp.filter(item => item.id >= 0 && item.id <= 3).map(x => (
                    <td key={x.id} className={ClassNames({
                        'item': true,
                        ['value' + x.value]: x.value !== null,
                    })}>
                        {x.value}
                    </td>
                ))}

                {listApp.listApp.listApp.filter(item => item.id >= 4 && item.id <= 7).map(x => (
                    <td key={x.id} className={ClassNames({
                        'item': true,
                        ['value' + x.value]: x.value !== null,
                    })}>
                        {x.value}
                    </td>
                ))}

                {listApp.listApp.listApp.filter(item => item.id >= 8 && item.id <= 11).map(x => (
                    <td key={x.id} className={ClassNames({
                        'item': true,
                        ['value' + x.value]: x.value !== null,
                    })}>
                        {x.value}
                    </td>
                ))}

                {listApp.listApp.listApp.filter(item => item.id >= 12 && item.id <= 15).map(x => (
                    <td key={x.id} className={ClassNames({
                        'item': true,
                        ['value' + x.value]: x.value !== null,
                    })}>
                        {x.value}
                    </td>
                ))}

            </tr>
        </React.Fragment >
    );
}

export default GameItem;