/**
 *
 * https://webomnizz.com/how-to-create-a-toggle-switch-button-in-react/
 */

import React, { useState, useEffect } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

function ToggleButton(props) {
  const [toggle, setToggle] = useState(false);
  const { disabled, className, defaultChecked, onChange } = props;

  const triggerToggle = () => {
    if (disabled) return;
    setToggle(!toggle);
    if (typeof onChange === 'function') {
      onChange(!toggle);
    }
  };

   const getIcon = (type) => {
        const { icons } = props;
        if ( ! icons ) {
            return null;
        }

        return icons[type] === undefined ?
            ToggleButton.defaultProps.icons[type] :
            icons[type];
    }

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
    }
  }, [defaultChecked]);

  const toggleClasses = classNames(
    'wrg-toggle',
    {
      'wrg-toggle--checked': toggle,
      'wrg-toggle--disabled': disabled,
    },
    className
  );

  return (
    <div className={toggleClasses} onClick={triggerToggle}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>{getIcon('checked')}</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>{getIcon('unchecked') }</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        className="wrg-toggle-input"
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
}

ToggleButton.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

ToggleButton.defaultProps = {
    icons: {
        checked: <CheckedIcon />, 
        unchecked: <UncheckedIcon />
    }
};

export default ToggleButton;
