import * as React from "react"
import "../../index.scss";

/**
 * Switch properties.
 */
export interface ISwitchProps {
  /** Disables the control. */
  disabled?: boolean
  /** Toggle the control on and off. */
  checked?: boolean
  /** When the toggle changes */
  onChange?: any
}

/**
 * Switch
 */
export const Switch = (props: ISwitchProps) => {
  return <div>{props}</div>
}

export default Switch
