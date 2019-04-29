import * as React from "react"
import * as RMWC from "@rmwc/types"
import { FormattedOption } from "@rmwc/select/dist/index.d"
import { Select as RmwcSelect } from "@rmwc/select"
import { ListItem } from "@rmwc/list"

/**
 * Selector properties.
 */
export interface ISelectProps {
  /** The value for a controlled select. */
  value?: string
  /** Options accepts value => label maps */
  options?: FormattedOption[]
  /** A label for the form control. */
  label?: string
  /** Makes the select outlined. */
  outlined?: boolean
  /** Makes the Select visually invalid. This is sometimes automatically my material-components-web.  */
  invalid?: boolean
  /** Makes the Select disabled.  */
  disabled?: boolean
  /** Makes the Select required.  */
  required?: boolean
  /** Add a leading icon. */
  icon?: RMWC.IconPropT
  /** When the input changes */
  onChange?: any
}

/**
 * Selector
 */
export const Select = (props: ISelectProps) => {
  return (
    <RmwcSelect outlined={true} enhanced={true} {...props}>
      {props.options.map((option, idx) => (
        <ListItem
          key={idx}
          value={option.value}
          activated={option.value === props.value}
          data-value={option.value}
        >
          {option.label}
        </ListItem>
      ))}
    </RmwcSelect>
  )
}

export default Select