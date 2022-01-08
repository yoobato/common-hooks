# @common-hooks/use-input

React Hook to use input element with custom validator

## Installation

#### npm

`npm i @common-hooks/use-input`

## Usage

```js
import useInput from "@common-hooks/use-input";

const App = () => {
  const nameInput = useInput("Mr. ", (value) => value.length <= 10);
  return (
    <div className="App">
      <input {...nameInput} placeholder="Enter name" />
    </div>
  )
}
```

### Arguments

| Argument           | Type     | Description                                       | Required |
| ------------------ | -------- | ------------------------------------------------- | -------- |
| default value      | string   | Default value for input                           | no       |
| validator function | function | Custom validation function returns boolean value  | no       |
