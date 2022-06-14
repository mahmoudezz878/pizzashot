import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox({ item,onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange()
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      qty: {item.qty} {item?.product?.name}
    </div>
  );
}
