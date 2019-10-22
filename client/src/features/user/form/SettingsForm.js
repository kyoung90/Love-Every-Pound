import React from "react";
import { Form, Button, Select, Dropdown } from "semantic-ui-react";

const options = [
  { key: "f", text: "Fitness", value: "fitness" },
  { key: "s", text: "Self Love", value: "self love" },
  { key: "p", text: "Positive Affirmation", value: "positive affirmation" },
  { key: "i", text: "Inspirational", value: "inspirational" }
];

const SettingsForm = () => {
  return (
    <Form>
      <Form.Field label="username" control="input" type="text" />
      <Form.Field label="email" control="input" type="text" />
      <Form.Field label="Weight" control="input" type="unit" />
      <Form.Field
        control={Dropdown}
        label="Quotes Preference"
        options={options}
        placeholder="Inspirational"
      />
      <Form.Field />
      <Form.Field
        control={Select}
        label="Quotes Preference"
        options={options}
        placeholder="Inspirational"
      />
      <Form.Field />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SettingsForm;
