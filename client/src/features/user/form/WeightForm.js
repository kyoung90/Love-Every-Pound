import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addUserWeight } from "../../../actions/userActions";

const WeightForm = props => {
  const [weight, setWeight] = useState(0);

  const handleChange = (event) => {
    setWeight(parseInt(event.target.value))
  };

  const handleSubmit = event => {
    props.addUserWeight(weight);
  };

  return (
    <Modal
      size="mini"
      trigger={<Button primary circular className="info" icon="plus"></Button>}
      centered={false}
      closeIcon
    >
      <Modal.Header>Add Today's Weight</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Field
              name="weight"
              label="Weight"
              control="input"
              type="number"
              onChange={handleChange}
            />
            <Form.Field>
              <Button type="submit">Submit</Button>
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    addUserWeight: (weight) => dispatch(addUserWeight(weight))
  };
};

export default connect(null, mapDispatchToProps)(WeightForm);
