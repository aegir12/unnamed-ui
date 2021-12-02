import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'

import { AsyncPopup, Popup } from 'unnamed-ui'

export default {
  title: 'Unnamed-UI/AsyncPopup',
  component: Popup,
  argTypes: {
    ContentComp: {
      description: 'Submodule component, passing results using "api" props'
    }
  }
}

const Template: ComponentStory<any> = ({ type, ...args }) => {
  const handler = async () => {
    const result = await Popup[type](args)
    alert(result)
  }
  return <button onClick={handler}>{args.title}</button>
}

export const Alert = Template.bind({})

Alert.args = {
  type: 'alert',
  title: 'alert',
  content: 'alert content'
}

export const Confirm = Template.bind({})

Confirm.args = {
  type: 'confirm',
  title: 'Confirm input',
  ContentComp: ({ api }: any) => {
    const [value, setValue] = useState<string>('')
    api.onValidate = () => {
      if (!value) return { message: 'not allowed Blank' }
      return null
    }
    api.onConfirm = () => {
      return value
    }

    return (
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  }
}

export const ConfirmSelect = Template.bind({})

const apps = ['service', 'node', 'homepage']
ConfirmSelect.args = {
  type: 'confirm',
  title: 'Select App',
  ContentComp: ({ api }: any) => {
    const [selected, setSelected] = useState<Array<string>>([])

    api.onConfirm = () => {
      return selected
    }
    api.onCancel = () => {
      return null
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {apps.map((app) => (
          <span key={app}>
            <input
              type='checkbox'
              value={app}
              checked={selected.includes(app)}
              onChange={({ target: { value, checked } }) =>
                setSelected((prev) => {
                  if (!checked) return prev.filter((app) => app !== value)
                  return [...prev, value]
                })
              }
            />
            {app}
          </span>
        ))}
      </div>
    )
  }
}
