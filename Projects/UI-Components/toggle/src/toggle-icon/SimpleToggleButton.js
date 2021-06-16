import React from 'react';
import ToggleButton from './ToggleButton';

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

function SimpleToggleButton() {
  return (
    <div>
      <p>Toggle Button</p>
      <ToggleButton />
      <br />
      <p>Disabled Toggle Button</p>
      <ToggleButton onChange={(state) => console.log(state)} disabled={true} />
      <br />
      <p>Toggle Button - Default Value TRUE</p>
      <ToggleButton
        onChange={(state) => console.log(state)}
        defaultChecked={true}
      />
      <br />
      <p>Toggle Button - Icons Change</p>
      <ToggleButton
        onChange={(state) => console.log(state)}
        icons={{ checked: <CheckedIcon />, unchecked: <UncheckedIcon /> }}
      />
    </div>
  );
}

export default SimpleToggleButton;
