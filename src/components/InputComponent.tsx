import { TextField } from "@mui/material";
import { InputProp } from "../types";

const InputComponent: React.FC<InputProp> = ({ value, placeholder, onInputUpdated }) => {
    return (
        <TextField label={placeholder} variant="standard" value={value} onChange={onInputUpdated} />
    )
}

export default InputComponent