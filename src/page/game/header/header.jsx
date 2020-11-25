import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header-info">
            <div className="header-title">2048</div>
            <div className="header-score">
                <div className="header-live_score">SCORE {props.Total}</div>
                <div className="header-best_score">TOP 0</div>
            </div>
        </div>
    );
}

export default Header;